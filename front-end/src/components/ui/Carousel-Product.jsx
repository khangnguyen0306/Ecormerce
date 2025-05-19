"use client";;
import { ChevronRight } from 'lucide-react';
import { useState, useRef, useId, useEffect } from "react";
import { ShoppingBag, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Slide = ({
    slide,
    index,
    current,
    handleSlideClick,
    addToCart,
    wishlist,
    toggleWishlist,

}) => {
    const slideRef = useRef(null);
    const xRef = useRef(0);
    const yRef = useRef(0);
    const frameRef = useRef();


    useEffect(() => {
        const animate = () => {
            if (!slideRef.current) return;
            const x = xRef.current;
            const y = yRef.current;
            slideRef.current.style.setProperty("--x", `${x}px`);
            slideRef.current.style.setProperty("--y", `${y}px`);
            frameRef.current = requestAnimationFrame(animate);
        };
        frameRef.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(frameRef.current);
    }, []);

    const handleMouseMove = (event) => {
        const el = slideRef.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        xRef.current = event.clientX - (r.left + Math.floor(r.width / 2));
        yRef.current = event.clientY - (r.top + Math.floor(r.height / 2));
    };

    const handleMouseLeave = () => {
        xRef.current = 0;
        yRef.current = 0;
    };

    const imageLoaded = (event) => {
        event.currentTarget.style.opacity = "1";
    };

    const { id, images, price, rating, name, description } = slide;
    const isInWishlist = wishlist && wishlist.some(item => item.id === id);
    return (
        <div className="[perspective:1200px] [transform-style:preserve-3d]">
            <Link to={`/products/${id}`}>
                <li
                    ref={slideRef}
                    className="flex flex-1 flex-col items-center justify-between relative text-center text-white opacity-100 transition-all duration-300 ease-in-out w-[70vmin] h-[70vmin] mx-[4vmin] z-10"
                    onClick={() => handleSlideClick(index)}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    style={{
                        transform:
                            current !== index
                                ? "scale(0.98) rotateX(8deg)"
                                : "scale(1) rotateX(0deg)",
                        transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                        transformOrigin: "bottom",
                    }}>
                    <div
                        className="absolute top-0 left-0 w-full h-full bg-[#1D1F2F] rounded-[1%] overflow-hidden transition-all duration-150 ease-out"
                        style={{
                            transform:
                                current === index
                                    ? "translate3d(calc(var(--x) / 30), calc(var(--y) / 30), 0)"
                                    : "none",
                        }}>
                        <img
                            className="absolute inset-0 w-[120%] h-[120%] object-cover opacity-100 transition-opacity duration-600 ease-in-out"
                            style={{
                                opacity: current === index ? 1 : 0.5,
                            }}
                            alt={name}
                            src={images[0]}
                            onLoad={imageLoaded}
                            loading="eager"
                            decoding="sync" />
                        {current === index && (
                            <div className="absolute inset-0 bg-black/30 transition-all duration-1000" />
                        )}
                    </div>

                    <div className="self-end ">
                        <button
                            onClick={(event) => {
                                event.preventDefault();   // Chặn điều hướng mặc định của <Link>
                                event.stopPropagation();  // Ngăn không cho click nổi bọt lên parent
                                toggleWishlist(slide);
                            }}
                            className={`
    ${current === index ? "opacity-100 visible" : "opacity-0 invisible"} 
    relative mr-4 mt-6 px-3 py-2 w-fit mx-auto sm:text-sm bg-white/70 h-12 border border-transparent text-xs flex items-center justify-center rounded-xl
    transition duration-200 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]
    hover:shadow-lg hover:text-black group  
  `}
                        >
                            <Heart className={`h-5 w-5 ${isInWishlist ? 'text-red-500 fill-current' : 'text-gray-700'}`} />
                        </button>

                    </div>
                    <article
                        className={`relative z-10 mb-10 px-4 pb-4 text-left flex flex-col  transition-opacity duration-1000 ease-in-out ${current === index ? "opacity-100 visible" : "opacity-0 invisible"}`}>
                        <button
                            onClick={(e) => {
                                e.preventDefault();    // Chặn điều hướng
                                e.stopPropagation();   // Ngăn nổi bọt
                                addToCart(slide);
                            }}
                            className={`
    ${current === index ? "opacity-100 visible" : "opacity-0 invisible"} 
    relative px-4 py-2 w-fit  sm:text-sm bg-white/70  border border-transparent text-xs flex items-center justify-center rounded-xl
    transition duration-200 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]
    hover:shadow-lg hover:text-black mb-4 
  `}
                        >
                            <ShoppingBag width={25} height={25} />
                            <span
                                className="group-hover:inline-block transform ml-3 transition-all duration-300">
                                + Thêm vào giỏ hàng
                            </span>
                        </button>

                        <h2 className="text-lg md:text-xl lg:text-3xl font-nunito font-semibold relative ">
                            {name}
                        </h2>
                        <div className="">
                            <p className='font-nunito mt-2'>
                                {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price)}
                            </p>
                            <p className='font-nunito mt-2'>
                                {description}
                            </p>
                        </div>
                    </article>
                </li>
            </Link>
        </div>
    );
};

const CarouselControl = ({
    type,
    title,
    handleClick
}) => (
    <button
        className={`w-10 h-10 flex items-center mx-2 justify-center bg-neutral-200 dark:bg-neutral-800 border-3 border-transparent rounded-full focus:border-[#6D64F7] focus:outline-none hover:-translate-y-0.5 active:translate-y-0.5 transition duration-200 ${type === "previous" ? "rotate-180" : ""
            }`}
        title={title}
        onClick={handleClick}>
        <ChevronRight className="text-neutral-600 dark:text-neutral-200" />
    </button>
);

export function Carousel({ slides, addToCart, wishlist, toggleWishlist }) {
    const [current, setCurrent] = useState(0);
    const [touchStartX, setTouchStartX] = useState(null);

    const handlePreviousClick = () => {
        const previous = current - 1;
        setCurrent(previous < 0 ? slides.length - 1 : previous);
    };

    const handleNextClick = () => {
        const next = current + 1;
        setCurrent(next === slides.length ? 0 : next);
    };

    const handleSlideClick = (index) => {
        if (current !== index) setCurrent(index);
    };

    const handleTouchStart = (e) => {
        setTouchStartX(e.touches[0].clientX);
    };

    const handleTouchEnd = (e) => {
        if (touchStartX === null) return;
        const touchEndX = e.changedTouches[0].clientX;
        const deltaX = touchEndX - touchStartX;
        const threshold = 50; // swipe sensitivity
        if (deltaX > threshold) handlePreviousClick();
        else if (deltaX < -threshold) handleNextClick();
        setTouchStartX(null);
    };

    const id = useId();

    return (
        <div
            className="relative w-[70vmin] h-[70vmin] mx-auto"
            aria-labelledby={`carousel-heading-${id}`}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
        >
            <ul
                className="absolute flex mx-[-4vmin] transition-transform duration-1000 ease-in-out"
                style={{
                    transform: `translateX(-${current * (100 / slides.length)}%)`,
                }}>
                {slides.map((slide, index) => (
                    <Slide
                        key={index}
                        slide={slide}
                        index={index}
                        current={current}
                        handleSlideClick={handleSlideClick}
                        addToCart={addToCart}
                        wishlist={wishlist}
                        toggleWishlist={toggleWishlist}
                    />
                ))}
            </ul>
            <div className="hidden md:flex absolute justify-center w-full top-[calc(100%+1rem)]">
                <CarouselControl
                    type="previous"
                    title="Go to previous slide"
                    handleClick={handlePreviousClick} />

                <CarouselControl
                    type="next"
                    title="Go to next slide"
                    handleClick={handleNextClick} />
            </div>
        </div>
    );
}