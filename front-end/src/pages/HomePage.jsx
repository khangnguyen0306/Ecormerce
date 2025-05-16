import React from 'react';
import Hero from '@/components/Hero';
import Categories from '@/components/Categories';
import FeaturedProducts from '@/components/FeaturedProducts';
import Testimonials from '@/components/Testimonials';
import Newsletter from '@/components/Newsletter';
import { motion } from 'framer-motion';

const HomePage = ({ addToCart, products }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <Categories />
      <FeaturedProducts addToCart={addToCart} products={products.slice(0, 8)} title="Sản phẩm nổi bật" />
      <Testimonials />
      <Newsletter />
    </motion.div>
  );
};

export default HomePage;