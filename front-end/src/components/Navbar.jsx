import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {  Heart, Search, Menu, X, User, Briefcase, ShoppingBag,LogIn  } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import logo from '../assets/image/logo.png'
import { useAuth } from '../contexts/AuthContext';
const Navbar = ({ cartItemCount, wishlistCount, setIsCartOpen }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuth();

  // console.log(user)

  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        closeMobileMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'TRANG CHỦ', href: '/' },
    { name: 'SẢN PHẨM', href: '/products' },
    { name: 'DANH MỤC', href: '/categories' },
    { name: 'BÀI VIẾT', href: '/blog' },
    { name: 'KHUYẾN MÃI', href: '/promotions' },
    { name: 'GIỚI THIỆU', href: '/about-us' },
    { name: 'LIÊN HỆ', href: '/contact' },
  ];


  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchTerm.trim())}`);
      setIsSearchOpen(false);
      setSearchTerm('');
      closeMobileMenu();
    }
  };

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const isAuthPage = location.pathname === '/login' || location.pathname === '/register' || location.pathname === '/forgot-password';

  if (isAuthPage) {
    return null; // Hide navbar on auth pages
  }

  return (
    <header
      className={`fixed font-nunito top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-white'
        }`}
    >
   
      <div className="container mx-auto px-4 sm:px-6 lg:px-4 py-3">
        
        <div className="flex items-center justify-between">
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.35 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-full hover:bg-gold-100/50 transition-colors" aria-label="Menu"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5 text-gray-700" /> : <Menu className="h-5 w-5 text-gray-700" />}
          </motion.button>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/" >
            <img src={logo} width={150} height={50} alt="Logo" className='rounded-sm w-auto h-10 lg:w-64 lg:h-auto' />

            </Link>
          </motion.div>

          <nav className="hidden lg:flex space-x-6 xl:space-x-8">
            {navLinks.map((link, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <Link
                  to={link.href}
                  className="text-gray-700 pb-2 hover:text-gold-600 font-semibold  transition-colors text-sm relative group"
                >
                  <span>{link.name}</span>
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gold-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 ease-out ${location.pathname === link.href ? 'scale-x-100' : ''}`}></span>
                </Link>
              </motion.div>
            ))}
          </nav>

          <div className="flex items-center space-x-2 sm:space-x-3">
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.1 }}
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 rounded-full hover:bg-gold-100/50 transition-colors" aria-label="Search"
            >
              <Search className="h-5 w-5 text-gray-700 hover:text-gold-700" />
            </motion.button>

            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.15 }} className="hidden lg:block">
              <Link to="/wishlist" className="p-2 rounded-full hover:bg-gold-100/50 transition-colors relative block" aria-label="Favorites">
                <Heart className="h-5 w-5 text-gray-700 hover:text-gold-700" />
                {wishlistCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-black text-white text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center">
                    {wishlistCount}
                  </span>
                )}
              </Link>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.2 }} className="hidden lg:block">
              <Link to="/account" className="p-2 rounded-full hover:bg-gold-100/50 transition-colors block" aria-label="Account">
                <User className="h-5 w-5 text-gray-700 hover:text-gold-700" />
              </Link>
            </motion.div>

            <motion.button
              initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.25 }}
              onClick={() => setIsCartOpen(true)}
              className="p-2 rounded-full hover:bg-gold-100/50 transition-colors relative" aria-label="Shopping Cart"
            >
              <ShoppingBag className="h-5 w-5 text-gray-700 hover:text-gold-700" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-black text-white text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </motion.button>
            {/*             
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.3 }} className="hidden md:block">
              <Link to="/seller-dashboard" className="p-2 rounded-full hover:bg-gold-100/50 transition-colors block" aria-label="Seller Dashboard">
                <Briefcase className="h-5 w-5 text-gray-700 hover:text-gold-700" />
              </Link>
            </motion.div> */}


          </div>
        </div>

        <AnimatePresence>
          {isSearchOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }} className="mt-4"
            >
              <form onSubmit={handleSearchSubmit} className="relative">
                <input
                  type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Tìm kiếm sản phẩm..."
                  className="w-full p-3 pl-10 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent shadow-sm"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <button type="submit" className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-black text-white px-4 py-2 rounded-full text-sm hover:bg-slate-900">Tìm kiếm</button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              ref={sidebarRef}
              initial={{ opacity: 0, x: -300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -300 }}
              transition={{ duration: 0.1 }}
              className="fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50"
            >
              <nav className="flex flex-col gap-1  space-y-1 w-full">
                <div
                  className='p-3'
                >
                  <button
                    onClick={closeMobileMenu}
                    className="p-1 rounded-full hover:bg-white/20 transition-colors"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>

                {navLinks.map((link, index) => {
                  const isActive = location.pathname === link.href;
                  return (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.1, delay: index * 0.1 }}
                      className="w-full "
                    >
                      <Link
                        to={link.href}
                        onClick={closeMobileMenu}
                        className={`block w-full px-4 py-3 text-sm rounded-md transition-colors ${isActive ? 'bg-gold-100/70 text-gold-700' : 'text-gray-700 hover:text-gold-600 hover:bg-gold-50/50'}  `}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  );
                })}

                <div className='absolute bottom-5 left-3'>
                  {user?.role !== 'guest' ? (
                    <div>
                      <Link to="/account" className="p-2 rounded-full flex gap-2 hover:bg-gold-100/50 transition-colors" aria-label="Account" onClick={closeMobileMenu}>
                        <User className="h-5 w-5 text-gray-700 hover:text-gold-700" /> <p>Tài khoản</p>
                      </Link>
                    </div>
                  ) : (
                    <Link to="/login" onClick={closeMobileMenu}
                      className={`md:hidden text-gray-700 hover:text-gold-600 hover:bg-gold-50/50 font-medium transition-colors px-3 py-3 rounded-md flex items-center ${location.pathname === "/seller-dashboard" ? 'bg-gold-100/70 text-gold-700' : ''}`}
                    >
                      <LogIn className="h-5 w-5 mr-2" /> Đăng nhập
                    </Link>
                  )}
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
   
    </header>
  );
};

export default Navbar;
