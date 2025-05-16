import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';
import { Mail, Send, Home, ArrowLeft } from 'lucide-react';

const ForgotPasswordPage = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isEmailSent, setIsEmailSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (!email) {
      toast({ title: "Lỗi", description: "Vui lòng nhập địa chỉ email của bạn.", variant: "destructive" });
      setIsLoading(false);
      return;
    }

    console.log("Forgot password for email:", email);
    await new Promise(resolve => setTimeout(resolve, 1500)); 

    // Simulate successful email sending
    toast({
      title: "Yêu cầu đã được gửi",
      description: "Nếu email của bạn tồn tại trong hệ thống, chúng tôi đã gửi một liên kết đặt lại mật khẩu.",
    });
    setIsEmailSent(true);
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
          <h1 className="text-2xl font-semibold text-neutral-700 mt-3 font-cormorant">Quên mật khẩu</h1>
          <p className="text-sm text-neutral-500 mt-1">
            {isEmailSent 
              ? "Kiểm tra hộp thư của bạn để đặt lại mật khẩu."
              : "Nhập email của bạn để nhận liên kết đặt lại mật khẩu."
            }
          </p>
        </div>

        {isEmailSent ? (
          <div className="text-center">
            <Mail className="h-16 w-16 text-gold-500 mx-auto mb-6" />
            <p className="text-neutral-600 mb-6">
              Một email hướng dẫn đặt lại mật khẩu đã được gửi đến <strong className="text-gold-700">{email}</strong>. Vui lòng kiểm tra hộp thư đến (và cả mục spam).
            </p>
            <Button 
              onClick={() => navigate('/login')}
              className="w-full bg-gradient-to-r from-gold-500 to-amber-500 hover:from-gold-600 hover:to-amber-600 text-white font-semibold py-3 text-base btn-hover-effect"
            >
              <ArrowLeft className="mr-2 h-5 w-5" /> Quay lại Đăng nhập
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-neutral-600 mb-1">Địa chỉ Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-neutral-400" />
                <Input 
                  type="email" name="email" id="email" 
                  value={email} onChange={(e) => setEmail(e.target.value)} 
                  placeholder="nhapemail@example.com" required 
                  className="pl-10 py-2.5 focus:ring-gold-500 focus:border-gold-500 border-neutral-300/70" 
                />
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
                  Đang gửi...
                </div>
              ) : (
                <>
                  <Send className="mr-2 h-5 w-5" /> Gửi liên kết đặt lại
                </>
              )}
            </Button>
          </form>
        )}

        {!isEmailSent && (
          <p className="text-center text-sm text-neutral-500 mt-8">
            Nhớ mật khẩu? 
            <Link to="/login" className="font-medium text-gold-600 hover:text-gold-700 hover:underline ml-1">Đăng nhập</Link>
          </p>
        )}
      </motion.div>
    </div>
  );
};

export default ForgotPasswordPage;