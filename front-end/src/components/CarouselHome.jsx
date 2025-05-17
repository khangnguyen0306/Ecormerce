"use client";

import { Carousel } from "./ui/Carousel-Product";
import { motion } from 'framer-motion';



export default function CarouselHome({ addToCart, products,wishlist,toggleWishlist }) {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };
  return (
    <motion.div
    className="relative overflow-hidden w-full h-full py-20"
    variants={containerVariants}
    initial="hidden"
    animate="visible"
  >
    <Carousel
      slides={products}
      addToCart={addToCart}
      wishlist={wishlist}
      toggleWishlist={toggleWishlist}
    />
  </motion.div>
  );
}
