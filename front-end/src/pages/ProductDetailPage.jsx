import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ShoppingCart, Plus, Minus, ChevronLeft, ChevronRight, Heart, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProductCard from '@/components/ProductCard';
import { useToast } from '@/components/ui/use-toast';

const ProductDetailPage = ({ addToCart, products, toggleWishlist, wishlist }) => {
  const { productId } = useParams();
  const { toast } = useToast();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    const foundProduct = products.find(p => p.id.toString() === productId);
    setProduct(foundProduct);

    if (foundProduct) {
      const related = products.filter(
        p => p.category === foundProduct.category && p.id !== foundProduct.id
      ).slice(0, 4);
      setRelatedProducts(related);
      setCurrentImageIndex(0); 
      setQuantity(1); 
    }
  }, [productId, products]);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-12 text-center min-h-[calc(100vh-10rem)] flex flex-col justify-center items-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-pink-600"></div>
        <h1 className="text-2xl font-semibold text-pink-600 mt-4">Đang tải sản phẩm...</h1>
      </div>
    );
  }

  const { name, description, longDescription, price, images, rating, reviews, ingredients, howToUse } = product;
  const isInWishlist = wishlist && wishlist.some(item => item.id === product.id);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
  };

  const handleQuantityChange = (amount) => {
    setQuantity(prev => Math.max(1, prev + amount));
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % (images?.length || 1));
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + (images?.length || 1)) % (images?.length || 1));
  };
  
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: product.name,
        text: `Xem sản phẩm ${product.name} tại BeautyGlow!`,
        url: window.location.href,
      })
      .then(() => toast({ title: "Đã chia sẻ sản phẩm!" }))
      .catch((error) => console.error('Lỗi chia sẻ:', error));
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast({ title: "Đã sao chép liên kết sản phẩm!" });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-8"
    >
      <div className="mb-6 text-sm text-gray-500">
        <Link to="/" className="hover:text-pink-600">Trang chủ</Link>
        <span className="mx-2">/</span>
        <Link to="/products" className="hover:text-pink-600">Sản phẩm</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-700">{name}</span>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:w-1/2"
        >
          <div className="relative">
            <div className="aspect-square rounded-xl overflow-hidden shadow-lg bg-gray-100">
              <AnimatePresence initial={false} mode="wait">
                <motion.img  
                  key={currentImageIndex}
                  alt={images && images.length > 0 ? images[currentImageIndex] : name} 
                  className="w-full h-full object-cover"
                  src={images && images.length > 0 ? `${images[currentImageIndex]}` : `${images[0]}`} 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </AnimatePresence>
            </div>
            {images && images.length > 1 && (
              <>
                <Button onClick={prevImage} variant="outline" size="icon" className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full shadow-md">
                  <ChevronLeft className="h-5 w-5" />
                </Button>
                <Button onClick={nextImage} variant="outline" size="icon" className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full shadow-md">
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </>
            )}
          </div>
          {images && images.length > 1 && (
            <div className="mt-4 flex space-x-2 overflow-x-auto pb-2">
              {images.map((imgDesc, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`flex-shrink-0 w-20 h-20 rounded-md overflow-hidden border-2 ${index === currentImageIndex ? 'border-pink-500 ring-2 ring-pink-300' : 'border-transparent'} transition-all`}
                >
                  <img  
                    alt={`${name} - ảnh nhỏ ${index + 1}`} 
                    className="w-full h-full object-cover"
                    src={`https://images.unsplash.com/photo-1591375462077-800a22f5fba4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8${encodeURIComponent(imgDesc)}fGVufDB8fDB8fHww&auto=format&fit=crop&w=100&q=60`}
                  />
                </button>
              ))}
            </div>
          )}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:w-1/2"
        >
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-3">{name}</h1>
          
          <div className="flex items-center mb-4">
            <div className="flex text-yellow-400">
              {[...Array(Math.floor(rating))].map((_, i) => <Star key={`full-${i}`} className="h-5 w-5 fill-current" />)}
              {rating % 1 !== 0 && <Star key="half" className="h-5 w-5 fill-yellow-200 stroke-yellow-400" />}
              {[...Array(5 - Math.ceil(rating))].map((_, i) => <Star key={`empty-${i}`} className="h-5 w-5 text-gray-300 fill-current" />)}
            </div>
            <span className="ml-2 text-sm text-gray-600">({reviews} đánh giá)</span>
          </div>

          <p className="text-gray-600 mb-6 text-lg">{description}</p>
          <p className="text-3xl font-bold text-pink-600 mb-6">{formatPrice(price)}</p>

          <div className="flex items-center mb-6">
            <span className="mr-4 font-medium text-gray-700">Số lượng:</span>
            <div className="flex items-center border border-gray-300 rounded-md">
              <Button variant="ghost" size="icon" onClick={() => handleQuantityChange(-1)} className="h-10 w-10 rounded-r-none">
                <Minus className="h-4 w-4" />
              </Button>
              <span className="px-4 text-lg font-medium w-10 text-center">{quantity}</span>
              <Button variant="ghost" size="icon" onClick={() => handleQuantityChange(1)} className="h-10 w-10 rounded-l-none">
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            <Button onClick={handleAddToCart} size="lg" className="flex-1 bg-pink-600 hover:bg-pink-700 text-lg py-3 btn-hover-effect">
              <ShoppingCart className="mr-2 h-5 w-5" />
              Thêm vào giỏ hàng
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              onClick={() => toggleWishlist(product)}
              className={`flex-1 border-pink-600 text-lg py-3 ${isInWishlist ? 'bg-pink-50 text-pink-700 hover:bg-pink-100' : 'text-pink-600 hover:bg-pink-50'}`}
            >
              <Heart className={`mr-2 h-5 w-5 ${isInWishlist ? 'fill-current' : ''}`} />
              {isInWishlist ? 'Đã yêu thích' : 'Yêu thích'}
            </Button>
          </div>
          
          <Button variant="ghost" onClick={handleShare} className="text-gray-600 hover:text-pink-600">
            <Share2 className="mr-2 h-4 w-4" /> Chia sẻ
          </Button>
        </motion.div>
      </div>

      <div className="mt-12">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8" aria-label="Tabs">
            <span className="border-pink-500 text-pink-600 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-lg" aria-current="page">
              Thông tin chi tiết
            </span>
          </nav>
        </div>
        <div className="py-6 space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Mô tả sản phẩm</h3>
            <p className="text-gray-600 leading-relaxed whitespace-pre-line">{longDescription}</p>
          </div>
          {ingredients && ingredients.length > 0 && (
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Thành phần</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                {ingredients.map((ingredient, index) => <li key={index}>{ingredient}</li>)}
              </ul>
            </div>
          )}
          {howToUse && (
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Hướng dẫn sử dụng</h3>
              <p className="text-gray-600 leading-relaxed whitespace-pre-line">{howToUse}</p>
            </div>
          )}
        </div>
      </div>

      {relatedProducts.length > 0 && (
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Sản phẩm liên quan</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map(relatedProduct => (
              <ProductCard key={relatedProduct.id} product={relatedProduct} addToCart={addToCart} toggleWishlist={toggleWishlist} wishlist={wishlist} />
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default ProductDetailPage;