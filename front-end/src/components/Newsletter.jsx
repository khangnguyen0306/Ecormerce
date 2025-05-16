
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Lỗi",
        description: "Vui lòng nhập địa chỉ email của bạn.",
        variant: "destructive",
      });
      return;
    }
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Đăng ký thành công!",
        description: "Cảm ơn bạn đã đăng ký nhận bản tin của chúng tôi.",
      });
      setEmail('');
    }, 500);
  };

  return (
    <section className="py-16 bg-gradient-to-r from-pink-500 to-purple-600 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Đăng ký nhận thông tin</h2>
            <p className="mb-8 opacity-90">
              Đăng ký để nhận thông tin về sản phẩm mới, khuyến mãi đặc biệt và các mẹo làm đẹp hữu ích.
            </p>
            
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Nhập địa chỉ email của bạn"
                className="flex-1 px-4 py-3 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <Button 
                type="submit"
                className="bg-white text-pink-600 hover:bg-gray-100 px-6 py-3 rounded-full font-medium"
              >
                Đăng ký
              </Button>
            </form>
            
            <p className="mt-4 text-sm opacity-80">
              Chúng tôi tôn trọng quyền riêng tư của bạn. Bạn có thể hủy đăng ký bất cứ lúc nào.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
