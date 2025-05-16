import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { HeartCrack } from 'lucide-react';

const WishlistPage = ({ wishlist, toggleWishlist, addToCart }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-12"
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
          Danh sách yêu thích
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Những sản phẩm bạn đã lưu lại. Đừng bỏ lỡ cơ hội sở hữu chúng!
        </p>
      </motion.div>

      {wishlist.length === 0 ? (
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center py-16"
        >
          <HeartCrack className="h-24 w-24 text-gray-300 mx-auto mb-6" />
          <h2 className="text-2xl font-semibold text-gray-700 mb-3">Danh sách yêu thích trống</h2>
          <p className="text-gray-500 mb-8">
            Bạn chưa có sản phẩm nào trong danh sách yêu thích. Hãy khám phá và thêm những sản phẩm bạn quan tâm nhé!
          </p>
          <Link to="/products">
            <Button className="bg-pink-600 hover:bg-pink-700 text-lg px-8 py-3">
              Khám phá sản phẩm
            </Button>
          </Link>
        </motion.div>
      ) : (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence>
            {wishlist.map(product => (
              <ProductCard 
                key={product.id} 
                product={product} 
                addToCart={addToCart} 
                toggleWishlist={toggleWishlist}
                wishlist={wishlist}
                isWishlistPage={true}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      )}
    </motion.div>
  );
};

export default WishlistPage;