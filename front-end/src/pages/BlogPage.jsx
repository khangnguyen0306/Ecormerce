import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, User, Tag, ArrowRight } from 'lucide-react';

const BlogPage = ({ articles }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
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
  
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('vi-VN', options);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16"
    >
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12 md:mb-16"
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-cormorant mb-4 text-transparent bg-clip-text bg-gradient-to-r from-gold-600 via-gold-500 to-amber-400">
          BeautyGlow Blog
        </h1>
        <p className="text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto font-montserrat leading-relaxed">
          Khám phá kiến thức làm đẹp, xu hướng mới nhất và bí quyết chăm sóc da từ các chuyên gia hàng đầu.
        </p>
      </motion.div>

      {articles.length === 0 ? (
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center text-neutral-500 text-lg"
        >
          Hiện chưa có bài viết nào. Vui lòng quay lại sau!
        </motion.p>
      ) : (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
        >
          {articles.map((article) => (
            <motion.div
              key={article.id}
              variants={itemVariants}
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl group border border-gold-100/50"
            >
              <Link to={`/blog/${article.id}`} className="block">
                <div className="relative h-56 md:h-64 overflow-hidden">
                  <img 
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                   src="https://images.unsplash.com/photo-1694388001616-1176f534d72f" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  <span className="absolute top-4 left-4 bg-gold-500 text-white px-3 py-1 rounded-full text-xs font-semibold font-montserrat">
                    {article.category}
                  </span>
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-semibold font-cormorant text-neutral-800 mb-3 group-hover:text-gold-600 transition-colors duration-300 line-clamp-2">
                    {article.title}
                  </h2>
                  <div className="flex items-center text-xs text-neutral-500 mb-3 font-montserrat space-x-3">
                    <div className="flex items-center">
                      <User className="h-3.5 w-3.5 mr-1.5 text-gold-500" />
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-3.5 w-3.5 mr-1.5 text-gold-500" />
                      <span>{formatDate(article.date)}</span>
                    </div>
                  </div>
                  <p className="text-sm text-neutral-600 mb-4 font-montserrat leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center text-gold-600 font-semibold group-hover:text-gold-700 transition-colors duration-300 font-montserrat">
                    Đọc thêm
                    <ArrowRight className="ml-1.5 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      )}
    </motion.div>
  );
};

export default BlogPage;