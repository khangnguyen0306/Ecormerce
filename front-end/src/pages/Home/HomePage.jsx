import React from 'react';
import Hero from '@/components/Hero';
import Categories from '@/components/Categories';
import FeaturedProducts from '@/components/FeaturedProducts';
import Testimonials from '@/components/Testimonials';
import Newsletter from '@/components/Newsletter';
import { motion } from 'framer-motion';
import { ThreeDMarqueeDemo } from '../../components/3d-home';
import CarouselHome from '../../components/CarouselHome';
import { DraggableCardHome } from './DragCardHome';
// import ProductCarousel from '../components/ui/ProductCarousel';


const HomePage = ({ addToCart, products, toggleWishlist, wishlist }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <p className='text-center font-bold xl:text-3xl sm:text-2xl xl:tracking-widest sm:tracking-wide'>AN AN</p>
      <ThreeDMarqueeDemo />
      <p className='text-center mt-14 font-bold xl:text-3xl sm:text-2xl xl:tracking-widest sm:tracking-wide'>BESTSELLERS</p>
      <p className='text-center font-serif xl:text-xl sm:text-lg xl:tracking-widest sm:tracking-wide'>Top những sản phẩm được yêu thích nhất của tháng</p>
      <CarouselHome addToCart={addToCart} products={products.slice(0, 8)} toggleWishlist={toggleWishlist} wishlist={wishlist}/>
      <p className='text-center mt-14 mb-4 font-bold xl:text-3xl sm:text-2xl xl:tracking-widest sm:tracking-wide'>DIVERSE PRODUCTS</p>
      <DraggableCardHome/>
      {/* <Hero /> */}

      <Categories />
      <FeaturedProducts addToCart={addToCart} products={products.slice(0, 8)} title="Sản phẩm nổi bật" />
      {/* <Testimonials /> */}
      <Newsletter />
    </motion.div>
  );
};

export default HomePage;