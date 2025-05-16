import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { categoriesData } from '@/components/Categories'; 
import { ArrowRight } from 'lucide-react';

const CategoriesPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
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
          Tất cả danh mục
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Khám phá thế giới mỹ phẩm đa dạng của chúng tôi. Mỗi danh mục đều được tuyển chọn kỹ lưỡng để mang đến cho bạn những sản phẩm tốt nhất.
        </p>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {categoriesData.map((category) => (
          <motion.div
            key={category.id}
            variants={itemVariants}
            whileHover={{ 
              scale: 1.03, 
              boxShadow: "0px 10px 20px rgba(0,0,0,0.1)",
              transition: { duration: 0.3 } 
            }}
            className="rounded-xl overflow-hidden shadow-lg group cursor-pointer bg-white"
          >
            <Link to={`/categories/${category.slug}`} className="block">
              <div className="relative h-64">
                <img  
                  alt={category.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  src={`https://images.unsplash.com/photo-1697256200022-f61abccad430?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60`} 
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-70 group-hover:opacity-60 transition-opacity duration-300`}></div>
                <div className="absolute inset-0 flex items-end p-6">
                  <h2 className="text-white text-3xl font-bold drop-shadow-md">{category.name}</h2>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">Khám phá các sản phẩm {category.name.toLowerCase()} tốt nhất.</p>
                <div className="flex items-center text-pink-600 font-semibold group-hover:underline">
                  Xem sản phẩm
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default CategoriesPage;