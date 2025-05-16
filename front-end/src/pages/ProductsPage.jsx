import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation, useParams, Link } from 'react-router-dom';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { ListFilter, X } from 'lucide-react';
import { categoriesData } from '@/components/Categories';

const ProductsPage = ({ addToCart, products: allProducts, toggleWishlist, wishlist }) => {
  const location = useLocation();
  const { categoryName } = useParams();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState([0, 1000000]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [sortBy, setSortBy] = useState('default');
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  const uniqueCategories = categoriesData.map(cat => ({ id: cat.slug, name: cat.name }));
  const maxPrice = Math.max(...allProducts.map(p => p.price), 1000000);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const querySearchTerm = searchParams.get('search') || '';
    setSearchTerm(querySearchTerm);

    if (categoryName) {
      setSelectedCategories([categoryName]);
    } else {
      // Only reset if not coming from a category link directly
      if (!location.state?.fromCategoryLink) {
         setSelectedCategories([]);
      }
    }
  }, [location.search, categoryName, location.state]);

  useEffect(() => {
    let tempProducts = [...allProducts];

    if (searchTerm) {
      tempProducts = tempProducts.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    tempProducts = tempProducts.filter(
      product => product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    if (selectedCategories.length > 0) {
      tempProducts = tempProducts.filter(product =>
        selectedCategories.includes(product.category)
      );
    }
    
    if (sortBy === 'price-asc') {
      tempProducts.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      tempProducts.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
      tempProducts.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === 'newest') {
      tempProducts.sort((a, b) => b.id - a.id); 
    }

    setFilteredProducts(tempProducts);
  }, [searchTerm, priceRange, selectedCategories, sortBy, allProducts]);

  const handleCategoryChange = (categoryId) => {
    setSelectedCategories(prev =>
      prev.includes(categoryId)
        ? prev.filter(c => c !== categoryId)
        : [...prev, categoryId]
    );
  };
  
  const pageTitle = categoryName 
    ? uniqueCategories.find(c => c.id === categoryName)?.name || "Sản phẩm"
    : "Tất cả sản phẩm";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-8"
    >
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-pink-600">{pageTitle}</h1>
        {searchTerm && <p className="text-lg text-gray-600 mt-2">Kết quả tìm kiếm cho: "{searchTerm}"</p>}
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        <aside className={`md:w-1/4 ${isFiltersOpen ? 'fixed inset-0 bg-white z-40 p-6 overflow-y-auto' : 'hidden'} md:sticky md:top-24 md:block md:h-auto md:bg-transparent md:p-0 md:overflow-y-visible`}>
          <div className={`${isFiltersOpen ? '' : 'bg-white p-6 rounded-lg shadow-lg sticky top-24'}`}>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold text-gray-800">Bộ lọc</h2>
              <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsFiltersOpen(false)}>
                <X className="h-5 w-5" />
              </Button>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-medium mb-2 text-gray-700">Giá</h3>
              <Slider
                defaultValue={[0, maxPrice]}
                value={priceRange}
                max={maxPrice}
                step={10000}
                onValueChange={(value) => setPriceRange(value)}
                className="[&>span:first-child]:h-1 [&>span:first-child]:bg-pink-600 [&_[role=slider]]:bg-pink-600 [&_[role=slider]]:border-2 [&_[role=slider]]:border-white [&_[role=slider]]:shadow-md"
              />
              <div className="flex justify-between text-sm text-gray-500 mt-2">
                <span>{priceRange[0].toLocaleString()}đ</span>
                <span>{priceRange[1].toLocaleString()}đ</span>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-medium mb-2 text-gray-700">Danh mục</h3>
              <div className="space-y-2">
                {uniqueCategories.map(category => (
                  <div key={category.id} className="flex items-center space-x-2">
                    <Checkbox
                      id={`cat-${category.id}`}
                      checked={selectedCategories.includes(category.id)}
                      onCheckedChange={() => handleCategoryChange(category.id)}
                      className="data-[state=checked]:bg-pink-600 data-[state=checked]:border-pink-600"
                    />
                    <label htmlFor={`cat-${category.id}`} className="text-sm text-gray-600 cursor-pointer">
                      {category.name}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mb-6">
              <h3 className="text-lg font-medium mb-2 text-gray-700">Sắp xếp theo</h3>
              <select 
                value={sortBy} 
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500"
              >
                <option value="default">Mặc định</option>
                <option value="price-asc">Giá: Thấp đến Cao</option>
                <option value="price-desc">Giá: Cao đến Thấp</option>
                <option value="rating">Đánh giá cao nhất</option>
                <option value="newest">Mới nhất</option>
              </select>
            </div>

            <Button 
              onClick={() => {
                setPriceRange([0, maxPrice]);
                setSelectedCategories([]);
                setSortBy('default');
                setSearchTerm('');
              }}
              variant="outline"
              className="w-full"
            >
              Xóa bộ lọc
            </Button>
            {isFiltersOpen && (
              <Button className="w-full mt-4 bg-pink-600 hover:bg-pink-700" onClick={() => setIsFiltersOpen(false)}>
                Xem kết quả
              </Button>
            )}
          </div>
        </aside>

        <main className="md:w-3/4">
          <div className="flex justify-between items-center mb-6">
            <p className="text-gray-600">{filteredProducts.length} sản phẩm</p>
            <Button variant="outline" className="md:hidden" onClick={() => setIsFiltersOpen(true)}>
              <ListFilter className="h-4 w-4 mr-2" />
              Bộ lọc
            </Button>
          </div>

          {filteredProducts.length > 0 ? (
            <motion.div
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.1 }
                }
              }}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} addToCart={addToCart} toggleWishlist={toggleWishlist} wishlist={wishlist} />
              ))}
            </motion.div>
          ) : (
            <div className="text-center py-12">
              <img  alt="Không tìm thấy sản phẩm" className="mx-auto mb-4 w-1/2 max-w-xs" src="https://images.unsplash.com/photo-1577033810326-de357a2feb77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGVtcHR5JTIwc2hlbGZ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60" />
              <h2 className="text-2xl font-semibold text-gray-700 mb-2">Không tìm thấy sản phẩm</h2>
              <p className="text-gray-500 mb-6">
                Rất tiếc, chúng tôi không tìm thấy sản phẩm nào phù hợp với lựa chọn của bạn.
                <br />
                Vui lòng thử điều chỉnh bộ lọc hoặc tìm kiếm từ khóa khác.
              </p>
              <Link to="/products">
                <Button className="bg-pink-600 hover:bg-pink-700">Xem tất cả sản phẩm</Button>
              </Link>
            </div>
          )}
        </main>
      </div>
    </motion.div>
  );
};

export default ProductsPage;