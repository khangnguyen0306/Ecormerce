import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';
import { Mail, Lock, LogIn, Eye, EyeOff, Home } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

const LoginPage = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const { login } = useAuth();

  const [formData, setFormData] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Basic validation
    if (!formData.email || !formData.password) {
      toast({
        title: "Lỗi đăng nhập",
        description: "Vui lòng điền đầy đủ email và mật khẩu.",
        variant: "destructive",
      });
      setIsLoading(false);
      return;
    }
    
    try {
      // Use the login function from AuthContext
      await login(formData.email, formData.password);
      toast({
        title: "Đăng nhập thành công!",
        description: "Chào mừng bạn trở lại BeautyGlow.",
      });
      navigate('/'); // Redirect to homepage or dashboard
    } catch (error) {
      toast({
        title: "Đăng nhập thất bại",
        description: "Email hoặc mật khẩu không chính xác. Vui lòng thử lại.",
        variant: "destructive",
      });
    }
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center auth-gradient-bg p-4">
      <Link to="/" className="absolute top-6 left-6 text-gold-600 hover:text-gold-700 transition-colors z-10 flex items-center group">
        <Home className="h-5 w-5 mr-2 transition-transform duration-300 group-hover:-translate-x-1" />
        <span className="font-medium">Về trang chủ</span>
      </Link>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full max-w-md bg-white/90 backdrop-blur-md p-8 md:p-10 rounded-xl shadow-2xl border border-gold-200/50"
      >
        <div className="text-center mb-8">
          <Link to="/">
            <span className="text-4xl font-bold text-gold-600 font-cormorant cursor-pointer">
              BeautyGlow
            </span>
          </Link>
          <h1 className="text-2xl font-semibold text-neutral-700 mt-3 font-cormorant">Đăng nhập tài khoản</h1>
          <p className="text-sm text-neutral-500 mt-1">Chào mừng bạn trở lại!</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-neutral-600 mb-1">Địa chỉ Email</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-neutral-400" />
              <Input 
                type="email" name="email" id="email" 
                value={formData.email} onChange={handleChange} 
                placeholder="nhapemail@example.com" required 
                className="pl-10 py-2.5 focus:ring-gold-500 focus:border-gold-500 border-neutral-300/70" 
              />
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-1">
              <label htmlFor="password"className="block text-sm font-medium text-neutral-600">Mật khẩu</label>
              <Link to="/forgot-password" className="text-xs text-gold-600 hover:text-gold-700 hover:underline">Quên mật khẩu?</Link>
            </div>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-neutral-400" />
              <Input 
                type={showPassword ? "text" : "password"} name="password" id="password" 
                value={formData.password} onChange={handleChange} 
                placeholder="Nhập mật khẩu của bạn" required 
                className="pl-10 pr-10 py-2.5 focus:ring-gold-500 focus:border-gold-500 border-neutral-300/70"
              />
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-neutral-400 hover:text-neutral-600">
                {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
            </div>
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-gradient-to-r from-gold-500 to-amber-500 hover:from-gold-600 hover:to-amber-600 text-white font-semibold py-3 text-base shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 btn-hover-effect"
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                Đang xử lý...
              </div>
            ) : (
              <>
                <LogIn className="mr-2 h-5 w-5" /> Đăng nhập
              </>
            )}
          </Button>
        </form>

        <p className="text-center text-sm text-neutral-500 mt-8">
          Chưa có tài khoản? 
          <Link to="/register" className="font-medium text-gold-600 hover:text-gold-700 hover:underline ml-1">Đăng ký ngay</Link>
        </p>
      </motion.div>
    </div>
  );
};

export default LoginPage;