import React from 'react';
import { motion } from 'framer-motion';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { User, ShoppingBag, MapPin, LogOut, LayoutDashboard } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

const accountNavLinks = [
  { name: 'Thông tin cá nhân', href: '/account/profile', icon: User },
  { name: 'Lịch sử đơn hàng', href: '/account/orders', icon: ShoppingBag },
  { name: 'Địa chỉ', href: '/account/addresses', icon: MapPin },
  { name: 'Đăng xuất', href: '#logout', icon: LogOut }, // Placeholder for logout
];

const AccountPage = () => {
  const location = useLocation();
  const { logout } = useAuth()
  // Determine active tab based on current path or default to profile
  const isActive = (path) => {
    if (path === '/account/profile' && (location.pathname === '/account' || location.pathname === '/account/')) {
      return true;
    }
    return location.pathname === path;
  };

  const handleLogout = async () => {
    await logout();
  }

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
          Tài khoản của tôi
        </h1>
      </motion.div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar Navigation */}
        <motion.aside
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="md:w-1/4"
        >
          <div className="bg-white p-6 rounded-xl shadow-lg sticky top-24">
            <nav className="space-y-2">
              {accountNavLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.href === '#logout' ? '#' : link.href}
                  onClick={link.href === '#logout' ?  handleLogout : undefined}
                  className={({ isActive: navIsActive }) => // Use NavLink's isActive prop
                    `flex items-center px-4 py-3 rounded-lg transition-colors text-gray-700 hover:bg-pink-50 hover:text-pink-600
                    ${(link.href === '/account/profile' && (location.pathname === '/account' || location.pathname === '/account/profile')) || location.pathname === link.href ? 'bg-pink-100 text-pink-700 font-semibold' : ''}`
                  }
                >
                  <link.icon className="mr-3 h-5 w-5" />
                  {link.name}
                </NavLink>
              ))}
            </nav>
          </div>
        </motion.aside>

        {/* Main Content Area */}
        <motion.main
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="md:w-3/4 bg-white p-6 sm:p-8 rounded-xl shadow-lg min-h-[300px]"
        >
          <Outlet />
        </motion.main>
      </div>
    </motion.div>
  );
};

export default AccountPage;