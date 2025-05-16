import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Tag, Gift, Percent } from 'lucide-react';
import { Link } from 'react-router-dom';

const promotions = [
  {
    id: 1,
    title: 'Giảm giá 20% cho đơn hàng đầu tiên',
    description: 'Đăng ký tài khoản mới và nhận ngay ưu đãi giảm giá 20% cho tất cả sản phẩm trong đơn hàng đầu tiên của bạn.',
    code: 'WELCOME20',
    icon: <Percent className="h-12 w-12 text-pink-500" />,
    image: 'Người phụ nữ vui vẻ nhận gói hàng mỹ phẩm với biểu ngữ giảm giá',
    bgColor: 'bg-pink-50',
    textColor: 'text-pink-700',
    buttonText: 'Mua ngay',
    link: '/products'
  },
  {
    id: 2,
    title: 'Mua 1 Tặng 1 Serum Vitamin C',
    description: 'Ưu đãi đặc biệt! Mua một Serum Vitamin C bất kỳ, nhận ngay một sản phẩm tương tự hoàn toàn miễn phí.',
    icon: <Gift className="h-12 w-12 text-purple-500" />,
    image: 'Hai lọ serum Vitamin C đặt cạnh nhau với biểu tượng quà tặng',
    bgColor: 'bg-purple-50',
    textColor: 'text-purple-700',
    buttonText: 'Xem Serum',
    link: '/products/1' 
  },
  {
    id: 3,
    title: 'Miễn phí vận chuyển cho đơn từ 500K',
    description: 'Thỏa sức mua sắm không lo phí ship! Áp dụng cho tất cả đơn hàng có giá trị từ 500.000đ trở lên.',
    icon: <Tag className="h-12 w-12 text-green-500" />,
    image: 'Hộp giao hàng với biểu tượng xe tải và dòng chữ miễn phí vận chuyển',
    bgColor: 'bg-green-50',
    textColor: 'text-green-700',
    buttonText: 'Khám phá sản phẩm',
    link: '/products'
  },
];

const PromotionsPage = () => {
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
          Khuyến mãi hấp dẫn
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Đừng bỏ lỡ những ưu đãi đặc biệt từ BeautyGlow! Cơ hội sở hữu sản phẩm yêu thích với giá tốt nhất.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {promotions.map((promo, index) => (
          <motion.div
            key={promo.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`rounded-xl shadow-xl overflow-hidden flex flex-col group hover:shadow-2xl transition-shadow duration-300 ${promo.bgColor}`}
          >
            <div className="relative h-56">
              <img  
                alt={promo.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                src={`https://images.unsplash.com/photo-1516478177764-9fe567e941a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8${encodeURIComponent(promo.image)}fGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60`}
              />
              <div className="absolute top-4 right-4 bg-white p-3 rounded-full shadow-md">
                {promo.icon}
              </div>
            </div>
            <div className={`p-6 flex-grow flex flex-col ${promo.textColor}`}>
              <h2 className="text-2xl font-bold mb-3">{promo.title}</h2>
              <p className="text-sm mb-4 flex-grow opacity-80">{promo.description}</p>
              {promo.code && (
                <p className="mb-4 text-sm">
                  Mã giảm giá: <strong className="px-2 py-1 bg-white/50 rounded-md">{promo.code}</strong>
                </p>
              )}
              <Link to={promo.link} className="mt-auto">
                <Button className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-semibold py-3 rounded-lg transition-all duration-300 transform group-hover:scale-105">
                  {promo.buttonText}
                </Button>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default PromotionsPage;