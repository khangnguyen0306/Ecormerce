
import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Nguyễn Thị Anh',
    avatar: 'Phụ nữ Việt Nam trẻ với làn da đẹp, mặc áo trắng, mỉm cười',
    rating: 5,
    text: 'Tôi đã sử dụng serum Vitamin C được 2 tháng và làn da của tôi đã cải thiện rõ rệt. Các vết thâm mờ dần và da sáng hơn nhiều. Sẽ tiếp tục mua lại!'
  },
  {
    id: 2,
    name: 'Trần Minh Tuấn',
    avatar: 'Nam giới Việt Nam trẻ với làn da khỏe mạnh, mặc áo sơ mi xanh',
    rating: 4,
    text: 'Lần đầu tiên tôi thử dùng bộ sản phẩm chăm sóc da cho nam và thực sự ấn tượng với kết quả. Da không còn bóng nhờn và các vết mụn cũng giảm đáng kể.'
  },
  {
    id: 3,
    name: 'Lê Thị Hương',
    avatar: 'Phụ nữ Việt Nam trung niên với làn da tươi sáng, tóc đen dài',
    rating: 5,
    text: 'Kem dưỡng ẩm Hyaluronic là sản phẩm tuyệt vời nhất mà tôi từng dùng. Ở tuổi 45, làn da của tôi cần độ ẩm cao và sản phẩm này đáp ứng hoàn hảo nhu cầu đó.'
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-pink-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Khách hàng nói gì về chúng tôi</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Khám phá trải nghiệm thực tế từ những khách hàng đã sử dụng và yêu thích sản phẩm của chúng tôi.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-2xl shadow-lg relative"
            >
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <div className="rounded-full border-4 border-white shadow-md overflow-hidden h-16 w-16">
                  <img  
                    alt={`Avatar của ${testimonial.name}`} 
                    className="w-full h-full object-cover"
                   src="https://images.unsplash.com/photo-1693042766870-fc4293fd1ab9" />
                </div>
              </div>
              
              <div className="pt-10 text-center">
                <h3 className="font-semibold text-lg mb-1 text-gray-800">{testimonial.name}</h3>
                
                <div className="flex items-center justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-4 w-4 ${i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>
                
                <p className="text-gray-600 italic">"{testimonial.text}"</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
