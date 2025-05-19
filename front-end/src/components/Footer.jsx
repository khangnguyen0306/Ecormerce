import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const ContactLink = [
    { icon: Facebook, link: "https://www.facebook.com/nguyen.an.an.378924" },
    { icon: Instagram, link: "https://www.instagram.com/nana.see__/" },
    // { icon: Instagram, link: "https://www.instagram.com/nana.see__/" }
  ]

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
            <Link to="/" className="text-2xl font-nunito tracking-wider font-bold text-white mb-4 inline-block">
              NGUYEN AN AN
            </Link>
            <p className="mb-6 text-neutral-400 text-sm leading-relaxed">
              Nơi vẻ đẹp thăng hoa cùng những sản phẩm tinh túy nhất từ thiên nhiên và khoa học. Khám phá sự khác biệt, khẳng định đẳng cấp.
            </p>
            <div className="flex space-x-4">
              {ContactLink.map((Contact, index) => (
                <a key={index} href={Contact.link} className="text-neutral-400 hover:text-gold-500 transition-colors duration-300">
                  <Contact.icon className="h-5 w-5" />
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
                <MapPin className="h-5 w-5 mr-3  flex-shrink-0 mt-0.5" />
                <span className="text-neutral-400">123 Phố Vàng, Phường Kim Cương, Quận Ngọc Trai, TP.HCM</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 " />
                <span className="text-neutral-400">090 290 3522</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 " />
                <a href="mailto:nguyenthiencammc@gmail.com">
                  <span className="text-neutral-400">nguyenthiencammc@gmail.com</span>
                </a>
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
