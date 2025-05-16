import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProductCard from '@/components/ProductCard';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const FeaturedProducts = ({ addToCart, products, title = "Sản phẩm nổi bật", showFilters = true, initialCategory = 'all' }) => {
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  
  const categories = [
    { id: 'all', name: 'Tất cả' },
    { id: 'skincare', name: 'Chăm sóc da' },
    { id: 'makeup', name: 'Trang điểm' },
    { id: 'bestseller', name: 'Bán chạy' },
    { id: 'new', name: 'Mới' }
  ];
  
  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => 
        product.category === activeCategory || product.tag === activeCategory
      );
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">{title}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Khám phá các sản phẩm chất lượng cao của chúng tôi, được chọn lọc kỹ lưỡng để mang lại trải nghiệm làm đẹp tuyệt vời.
          </p>
        </motion.div>
        
        {showFilters && (
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {categories.map(category => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-pink-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.name}
              </motion.button>
            ))}
          </div>
        )}
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {filteredProducts.map(product => (
            <ProductCard 
              key={product.id} 
              product={product} 
              addToCart={addToCart} 
            />
          ))}
        </motion.div>

        {products.length > 8 && showFilters && (
           <div className="text-center mt-12">
            <Link to="/products">
              <Button variant="outline" className="border-pink-600 text-pink-600 hover:bg-pink-50 px-8 py-3 rounded-full text-lg">
                Xem tất cả sản phẩm
              </Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedProducts;