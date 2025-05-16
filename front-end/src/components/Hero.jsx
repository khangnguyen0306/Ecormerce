import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-gradient-to-b from-pink-50 via-pink-100 to-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 mb-10 md:mb-0 md:pr-10 text-center md:text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              Khám phá vẻ đẹp tự nhiên của bạn
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Sản phẩm chăm sóc da cao cấp được chiết xuất từ các thành phần tự nhiên, 
              giúp làn da của bạn luôn tươi trẻ, rạng rỡ và khỏe mạnh.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link to="/products">
                <Button className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 sm:py-6 rounded-full text-lg btn-hover-effect w-full sm:w-auto">
                  Mua ngay
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/about-us">
                <Button variant="outline" className="border-pink-600 text-pink-600 hover:bg-pink-50 px-8 py-3 sm:py-6 rounded-full text-lg w-full sm:w-auto">
                  Tìm hiểu thêm
                </Button>
              </Link>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:w-1/2 relative mt-10 md:mt-0"
          >
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-3xl blur-lg opacity-40 animate-pulse"></div>
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <img  
                  alt="Bộ sưu tập mỹ phẩm cao cấp trên nền hồng" 
                  className="w-full h-auto"
                 src="https://images.unsplash.com/photo-1591375462077-800a22f5fba4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29zbWV0aWNzJTIwY29sbGVjdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60" />
              </div>
            </div>
            
            <motion.div 
              className="absolute -top-8 -right-8 md:-top-10 md:-right-10 bg-pink-100 rounded-full p-4 md:p-6 shadow-lg animate-float"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <span className="text-pink-600 font-bold text-sm md:text-base">100%</span>
              <span className="block text-xs md:text-sm">Tự nhiên</span>
            </motion.div>
            
            <motion.div 
              className="absolute -bottom-6 -left-6 md:-bottom-8 md:-left-8 bg-purple-100 rounded-full p-3 md:p-5 shadow-lg animate-float"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              style={{ animationDelay: '1s' }}
            >
              <span className="text-purple-600 font-bold text-sm md:text-base">Mới</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;