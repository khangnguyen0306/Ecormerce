import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-neutral-900 text-neutral-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/" className="text-3xl font-bold text-gold-500 font-cormorant mb-4 inline-block">
              BeautyGlow
            </Link>
            <p className="mb-6 text-neutral-400 text-sm leading-relaxed">
              Nơi vẻ đẹp thăng hoa cùng những sản phẩm tinh túy nhất từ thiên nhiên và khoa học. Khám phá sự khác biệt, khẳng định đẳng cấp.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Instagram, Twitter, Youtube].map((Icon, index) => (
                <a key={index} href="#" className="text-neutral-400 hover:text-gold-500 transition-colors duration-300">
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="text-lg font-semibold text-white mb-5">Khám phá</div>
            <ul className="space-y-3 text-sm">
              {['Trang chủ', 'Sản phẩm', 'Blog', 'Về chúng tôi', 'Liên hệ'].map((item, index) => (
                 <li>
                  <Link to={item === 'Trang chủ' ? '/' : `/${item.toLowerCase().replace(/\s+/g, '-')}`} className="text-neutral-400 hover:text-gold-500 transition-colors duration-300 hover:underline underline-offset-4">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="text-lg font-semibold text-white mb-5">Hỗ trợ khách hàng</div>
            <ul className="space-y-3 text-sm">
              {['Câu hỏi thường gặp', 'Chính sách vận chuyển', 'Chính sách đổi trả', 'Chính sách bảo mật', 'Điều khoản dịch vụ'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-neutral-400 hover:text-gold-500 transition-colors duration-300 hover:underline underline-offset-4">{item}</a>
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="text-lg font-semibold text-white mb-5">Thông tin liên hệ</div>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-gold-500 flex-shrink-0 mt-0.5" />
                <span className="text-neutral-400">123 Phố Vàng, Phường Kim Cương, Quận Ngọc Trai, TP.HCM</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-gold-500" />
                <span className="text-neutral-400">+84 909 999 999</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-gold-500" />
                <span className="text-neutral-400">support@beautyglow.vn</span>
              </li>
            </ul>
          </motion.div>
        </div>
        
        <div className="border-t border-neutral-700 mt-12 pt-8 text-center text-neutral-500 text-xs">
          <p>© {currentYear} BeautyGlow Vietnam. Mọi quyền được bảo lưu. Thiết kế bởi Tinh Hoa Sáng Tạo.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
