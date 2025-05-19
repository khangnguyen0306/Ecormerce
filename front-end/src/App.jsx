import React, { useState, useEffect, Suspense, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Toaster } from '@/components/ui/toaster';
import { AuthProvider, useAuth } from '@/contexts/AuthContext';
import ProtectedRoute from '@/components/ProtectedRoute';

// Eagerly loaded components
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CartSidebar from '@/components/CartSidebar';
import LoadingSpinner from '@/components/Loading/LoadingSpinner';

// Lazy loaded pages

const ProductsPage = lazy(() => import('@/pages/ProductsPage'));
const ProductDetailPage = lazy(() => import('@/pages/ProductDetailPage'));
const CategoriesPage = lazy(() => import('@/pages/CategoriesPage'));
const PromotionsPage = lazy(() => import('@/pages/PromotionsPage'));
const AboutUsPage = lazy(() => import('@/pages/AboutUsPage'));
const ContactPage = lazy(() => import('@/pages/ContactPage'));
const CheckoutPage = lazy(() => import('@/pages/CheckoutPage'));
const WishlistPage = lazy(() => import('@/pages/WishlistPage'));
const AccountPage = lazy(() => import('@/pages/profile/AccountPage'));
const ProfilePage = lazy(() => import('@/pages/profile/ProfilePage'));
const OrderHistoryPage = lazy(() => import('@/pages/profile/OrderHistoryPage'));
const AddressesPage = lazy(() => import('@/pages/profile/AddressesPage'));
const SellerDashboardPage = lazy(() => import('@/pages/SellerDashboardPage'));
// const AdminDashboardPage = lazy(() => import('@/pages/AdminDashboardPage'));
const BlogPage = lazy(() => import('@/pages/BlogPage'));
const ArticlePage = lazy(() => import('@/pages/ArticlePage'));
const LoginPage = lazy(() => import('@/pages/authentication/LoginPage'));
const RegisterPage = lazy(() => import('@/pages/authentication/RegisterPage'));
const ForgotPasswordPage = lazy(() => import('@/pages/authentication/ForgotPasswordPage'));
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'));

// Data
import { sampleProducts, sampleArticles } from '@/data/sampleData';
import { useToast } from './components/ui/use-toast';
import HomePage from './pages/Home/HomePage';


const AppContent = () => {

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('beautyCart');
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [wishlist, setWishlist] = useState(() => {
    const savedWishlist = localStorage.getItem('beautyWishlist');
    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });
  const location = useLocation();
  const { user } = useAuth();
  const { toast } = useToast();

  useEffect(() => {
    localStorage.setItem('beautyCart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('beautyWishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const addToCart = (product, quantity = 1) => {
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
      setCart(cart.map(item => item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item));
    } else {
      setCart([...cart, { ...product, quantity }]);
    }
    toast({
      // title: "Lỗi đăng nhập",
      description: "Đã thêm vào giỏ hàng !",
      position: "top-left",
      // variant: "destructive",
      className: "bg-green-500 text-white",

    });
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(productId);
      return;
    }
    setCart(cart.map(item => item.id === productId ? { ...item, quantity: newQuantity } : item));
  };

  const clearCart = () => {
    setCart([]);
  };

  const toggleWishlist = (product) => {
    const isInWishlist = wishlist.find(item => item.id === product.id);
    if (isInWishlist) {
      setWishlist(wishlist.filter(item => item.id !== product.id));
    } else {
      setWishlist([...wishlist, product]);
    }
    toast({
      // title: "Lỗi đăng nhập",
      description: `Đã ${!isInWishlist ? "thêm vào" : "xóa khỏi"} danh sách yêu thích !`,
      className: `${!isInWishlist ? "bg-green-500" : "bg-red-500"}  text-white`
    });
  };

  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);
  const cartTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  const wishlistCount = wishlist.length;

  return (
    <div className="min-h-screen bg-white flex flex-col font-body">
      <Navbar cartItemCount={cartItemCount} wishlistCount={wishlistCount} setIsCartOpen={setIsCartOpen} />

      <main className="flex-grow pt-20 md:pt-24">
        <Suspense fallback={<LoadingSpinner />}>
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<HomePage addToCart={addToCart} products={sampleProducts} toggleWishlist={toggleWishlist} wishlist={wishlist} />} />
              <Route path="/products" element={<ProductsPage addToCart={addToCart} products={sampleProducts} toggleWishlist={toggleWishlist} wishlist={wishlist} />} />
              <Route path="/products/:productId" element={<ProductDetailPage addToCart={addToCart} products={sampleProducts} toggleWishlist={toggleWishlist} wishlist={wishlist} />} />
              <Route path="/categories" element={<CategoriesPage />} />
              <Route path="/categories/:categoryName" element={<ProductsPage addToCart={addToCart} products={sampleProducts} toggleWishlist={toggleWishlist} wishlist={wishlist} />} />
              <Route path="/promotions" element={<PromotionsPage />} />
              <Route path="/about-us" element={<AboutUsPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/blog" element={<BlogPage articles={sampleArticles} />} />
              <Route path="/blog/:articleId" element={<ArticlePage articles={sampleArticles} />} />

              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/forgot-password" element={<ForgotPasswordPage />} />

              {/* Protected Routes */}
              <Route element={<ProtectedRoute allowedRoles={['customer', 'seller', 'admin']} />}>
                <Route path="/checkout" element={<CheckoutPage cart={cart} cartTotal={cartTotal} clearCart={clearCart} />} />
                <Route path="/wishlist" element={<WishlistPage wishlist={wishlist} toggleWishlist={toggleWishlist} addToCart={addToCart} />} />
                <Route path="/account" element={<AccountPage />}>
                  <Route index element={<ProfilePage />} />
                  <Route path="profile" element={<ProfilePage />} />
                  <Route path="orders" element={<OrderHistoryPage />} />
                  <Route path="addresses" element={<AddressesPage />} />
                </Route>
              </Route>

              <Route element={<ProtectedRoute allowedRoles={['seller', 'admin']} />}>
                <Route path="/seller-dashboard" element={<SellerDashboardPage products={sampleProducts} />} />
              </Route>

              <Route element={<ProtectedRoute allowedRoles={['admin']} />}>
                {/* <Route path="/admin-dashboard" element={<AdminDashboardPage initialProducts={sampleProducts} initialUsers={[]} />} /> */}
              </Route>

              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </AnimatePresence>
        </Suspense>
      </main>

      <Footer />

      <AnimatePresence>
        {isCartOpen && (
          <CartSidebar
            cart={cart}
            setIsCartOpen={setIsCartOpen}
            removeFromCart={removeFromCart}
            updateQuantity={updateQuantity}
            cartTotal={cartTotal}
          />
        )}
      </AnimatePresence>

      <Toaster />
    </div>
  );
};

const App = () => (

  <AuthProvider>
    <AppContent />
  </AuthProvider>
);

export default App;