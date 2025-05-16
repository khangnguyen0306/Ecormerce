import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Heart, Search, Menu, X, User, Briefcase, BookOpen } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import logo from '../assets/image/anan.jpg'
const Navbar = ({ cartItemCount, wishlistCount, setIsCartOpen }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Trang chủ', href: '/' },
    { name: 'Sản phẩm', href: '/products' },
    { name: 'Danh mục', href: '/categories' },
    { name: 'Bài viết', href: '/blog'},
    { name: 'Khuyến mãi', href: '/promotions' },
    { name: 'Về chúng tôi', href: '/about-us' },
    { name: 'Liên hệ', href: '/contact' },
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
      className={`fixed font-nunito top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/" >
            <img src={logo} width={75} height={40} alt="Logo" className='rounded-sm'/>
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
                  className="text-gray-700 pb-2 hover:text-gold-600 font-medium transition-colors text-base relative group"
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

            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.15 }}>
              <Link to="/wishlist" className="p-2 rounded-full hover:bg-gold-100/50 transition-colors relative block" aria-label="Favorites">
                <Heart className="h-5 w-5 text-gray-700 hover:text-gold-700" />
                {wishlistCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[#da6a82] text-white text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center">
                    {wishlistCount}
                  </span>
                )}
              </Link>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.2 }}>
              <Link to="/account" className="p-2 rounded-full hover:bg-gold-100/50 transition-colors block" aria-label="Account">
                <User className="h-5 w-5 text-gray-700 hover:text-gold-700" />
              </Link>
            </motion.div>

            <motion.button
              initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.25 }}
              onClick={() => setIsCartOpen(true)}
              className="p-2 rounded-full hover:bg-gold-100/50 transition-colors relative" aria-label="Shopping Cart"
            >
              <ShoppingCart className="h-5 w-5 text-gray-700 hover:text-gold-700" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#da6a82] text-white text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </motion.button>
            
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.3 }} className="hidden md:block">
              <Link to="/seller-dashboard" className="p-2 rounded-full hover:bg-gold-100/50 transition-colors block" aria-label="Seller Dashboard">
                <Briefcase className="h-5 w-5 text-gray-700 hover:text-gold-700" />
              </Link>
            </motion.div>

            <motion.button
              initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.35 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-full hover:bg-gold-100/50 transition-colors" aria-label="Menu"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5 text-gray-700" /> : <Menu className="h-5 w-5 text-gray-700" />}
            </motion.button>
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
                <button type="submit" className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-gold-600 text-white px-4 py-2 rounded-full text-sm hover:bg-gold-700">Tìm</button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }} className="lg:hidden mt-4 bg-white rounded-lg shadow-xl"
            >
              <nav className="flex flex-col space-y-1 p-4">
                {navLinks.map((link) => (
                  <Link key={link.name} to={link.href} onClick={closeMobileMenu}
                    className={`text-gray-700 hover:text-gold-600 hover:bg-gold-50/50 font-medium transition-colors px-3 py-3 rounded-md ${location.pathname === link.href ? 'bg-gold-100/70 text-gold-700' : ''}`}
                  >
                    {link.name}
                  </Link>
                ))}
                <Link to="/seller-dashboard" onClick={closeMobileMenu}
                  className={`md:hidden text-gray-700 hover:text-gold-600 hover:bg-gold-50/50 font-medium transition-colors px-3 py-3 rounded-md flex items-center ${location.pathname === "/seller-dashboard" ? 'bg-gold-100/70 text-gold-700' : ''}`}
                >
                  <Briefcase className="h-5 w-5 mr-2" /> Kênh người bán
                </Link>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Navbar;
