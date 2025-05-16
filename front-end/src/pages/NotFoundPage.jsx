import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { AlertTriangle } from 'lucide-react';

const NotFoundPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-16 flex flex-col items-center justify-center text-center min-h-[calc(100vh-10rem)]" // Adjust min-height based on navbar/footer
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.2 }}
        className="mb-8"
      >
        <AlertTriangle className="h-24 w-24 text-yellow-400" />
      </motion.div>
      
      <h1 className="text-6xl font-bold text-pink-600 mb-4">404</h1>
      <h2 className="text-3xl font-semibold text-gray-800 mb-3">Trang không tồn tại</h2>
      <p className="text-gray-600 mb-8 max-w-md">
        Rất tiếc, chúng tôi không thể tìm thấy trang bạn đang tìm kiếm. 
        Có thể trang đã bị xóa, đổi tên hoặc tạm thời không khả dụng.
      </p>
      
      <div className="flex space-x-4">
        <Link to="/">
          <Button className="bg-pink-600 hover:bg-pink-700 text-lg px-6 py-3">
            Về trang chủ
          </Button>
        </Link>
        <Link to="/contact">
          <Button variant="outline" className="border-pink-600 text-pink-600 hover:bg-pink-50 text-lg px-6 py-3">
            Liên hệ hỗ trợ
          </Button>
        </Link>
      </div>
      
      <motion.div 
        className="mt-12 w-full max-w-lg h-64 rounded-lg overflow-hidden shadow-xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <img  
          alt="Hình ảnh minh họa trang không tìm thấy với mỹ phẩm bị đổ" 
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1580870069867-74c57ee130b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29zbWV0aWNzJTIwc3BpbGx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60" 
        />
      </motion.div>
    </motion.div>
  );
};

export default NotFoundPage;