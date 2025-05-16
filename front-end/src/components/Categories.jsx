import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const categoriesData = [
  {
    id: 1,
    name: 'Chăm sóc da',
    slug: 'skincare',
    image: 'Các sản phẩm chăm sóc da như serum, kem dưỡng và mặt nạ được bày trí đẹp mắt',
    color: 'from-pink-400 to-pink-600',
  },
  {
    id: 2,
    name: 'Trang điểm',
    slug: 'makeup',
    image: 'Bộ sưu tập mỹ phẩm trang điểm với son môi, phấn má và mascara',
    color: 'from-purple-400 to-purple-600',
  },
  {
    id: 3,
    name: 'Chăm sóc tóc',
    slug: 'haircare',
    image: 'Các sản phẩm chăm sóc tóc như dầu gội, dầu xả và serum dưỡng tóc',
    color: 'from-blue-400 to-blue-600',
  },
  {
    id: 4,
    name: 'Nước hoa',
    slug: 'fragrance',
    image: 'Bộ sưu tập nước hoa cao cấp với thiết kế chai đẹp mắt',
    color: 'from-yellow-400 to-yellow-600',
  },
];

const Categories = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="py-16 bg-gradient-to-b from-white to-pink-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Danh mục sản phẩm</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Khám phá các danh mục sản phẩm đa dạng của chúng tôi, được thiết kế để đáp ứng mọi nhu cầu làm đẹp của bạn.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {categoriesData.map((category) => (
            <motion.div
              key={category.id}
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <Link to={`/categories/${category.slug}`} className="relative block rounded-2xl overflow-hidden shadow-lg group cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-br bg-opacity-70 z-10 transition-opacity duration-300 opacity-80 group-hover:opacity-90"></div>
                
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-80 group-hover:opacity-90 transition-opacity duration-300 z-10`}></div>
                
                <img  
                  alt={category.name} 
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                 src={`https://images.unsplash.com/photo-1697256200022-f61abccad430?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60`} />
                
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <h3 className="text-white text-2xl font-bold tracking-wide">{category.name}</h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export { categoriesData };
export default Categories;