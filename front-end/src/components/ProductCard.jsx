import React from 'react';
import { motion } from 'framer-motion';
import { Star, ShoppingCart, Heart, Eye, XCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const ProductCard = ({ product, addToCart, toggleWishlist, wishlist, isWishlistPage = false }) => {
  const { id, name, description, price, image, rating, tag } = product;
  
  const formatPrice = (price) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    }).format(price);
  };

  const isInWishlist = wishlist && wishlist.some(item => item.id === id);
  
  return (
    <motion.div 
      className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 product-card flex flex-col"
      layout // Added for smoother removal animation on wishlist page
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20, transition: { duration: 0.3 } }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      <div className="relative overflow-hidden group">
        <Link to={`/products/${id}`}>
          <img  
            alt={name} 
            className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
           src={`https://images.unsplash.com/photo-1686061592689-312bbfb5c055?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60`} />
        </Link>
        
        {tag && (
          <div className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold text-white ${
            tag === 'new' ? 'bg-blue-500' : 
            tag === 'bestseller' ? 'bg-pink-600' : 
            'bg-purple-500'
          }`}>
            {tag === 'new' ? 'Mới' : 
             tag === 'bestseller' ? 'Bán chạy' : 
             'Phổ biến'}
          </div>
        )}
        
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col space-y-2">
          <button 
            onClick={() => toggleWishlist(product)}
            className="bg-white rounded-full p-2 shadow-md hover:bg-pink-50 transition-colors"
            aria-label={isInWishlist ? "Xóa khỏi yêu thích" : "Thêm vào yêu thích"}
          >
            <Heart className={`h-5 w-5 ${isInWishlist ? 'text-pink-600 fill-current' : 'text-gray-700'}`} />
          </button>
          {!isWishlistPage && (
            <Link to={`/products/${id}`} className="bg-white rounded-full p-2 shadow-md hover:bg-pink-50 transition-colors" aria-label="Xem chi tiết">
              <Eye className="h-5 w-5 text-gray-700" />
            </Link>
          )}
          {isWishlistPage && (
             <button 
              onClick={() => toggleWishlist(product)}
              className="bg-white rounded-full p-2 shadow-md hover:bg-red-100 transition-colors"
              aria-label="Xóa khỏi yêu thích"
            >
              <XCircle className="h-5 w-5 text-red-500" />
            </button>
          )}
        </div>
        
        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-11/12 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
          <Button 
            onClick={() => addToCart(product)}
            className="w-full bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-full flex items-center justify-center gap-2"
          >
            <ShoppingCart className="h-4 w-4" />
            Thêm vào giỏ
          </Button>
        </div>
      </div>
      
      <div className="p-4 flex flex-col flex-grow">
        <div className="flex items-center mb-2">
          <div className="flex text-yellow-400">
            {[...Array(Math.floor(rating))].map((_, i) => <Star key={`full-${i}`} className="h-4 w-4 fill-current" />)}
            {rating % 1 !== 0 && <Star key="half" className="h-4 w-4 fill-yellow-200 stroke-yellow-400" />}
            {[...Array(5 - Math.ceil(rating))].map((_, i) => <Star key={`empty-${i}`} className="h-4 w-4 text-gray-300 fill-current" />)}
          </div>
          <span className="ml-2 text-sm font-medium text-gray-700">{rating.toFixed(1)}</span>
        </div>
        
        <Link to={`/products/${id}`}>
          <h3 className="font-semibold text-lg mb-1 text-gray-800 hover:text-pink-600 transition-colors line-clamp-2">{name}</h3>
        </Link>
        <p className="text-gray-500 text-sm mb-3 line-clamp-2 flex-grow">{description}</p>
        
        <div className="flex items-center justify-between mt-auto">
          <span className="font-bold text-xl text-pink-600">{formatPrice(price)}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;