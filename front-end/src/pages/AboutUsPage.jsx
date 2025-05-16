import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Sparkles, Leaf } from 'lucide-react';

const AboutUsPage = () => {
  const teamMembers = [
    { name: 'Trần Thị Mai', role: 'Nhà sáng lập & CEO', image: 'Chân dung một phụ nữ Việt Nam thành đạt, mỉm cười, mặc vest công sở' },
    { name: 'Nguyễn Văn Hùng', role: 'Trưởng phòng Marketing', image: 'Chân dung một nam giới Việt Nam năng động, mặc áo sơ mi, đang thảo luận' },
    { name: 'Lê Thu Trang', role: 'Chuyên gia sản phẩm', image: 'Chân dung một phụ nữ Việt Nam trẻ trung, đang kiểm tra chất lượng mỹ phẩm' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-12"
    >
      {/* Hero Section */}
      <section className="text-center mb-16">
        <motion.h1 
          initial={{ opacity:0, y: -20 }}
          animate={{ opacity:1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent"
        >
          Về BeautyGlow
        </motion.h1>
        <motion.p 
          initial={{ opacity:0, y: 20 }}
          animate={{ opacity:1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
        >
          Tại BeautyGlow, chúng tôi tin rằng vẻ đẹp đích thực đến từ sự chăm sóc tận tâm và những sản phẩm chất lượng. Sứ mệnh của chúng tôi là mang đến cho bạn những giải pháp làm đẹp an toàn, hiệu quả từ thiên nhiên, giúp bạn tự tin tỏa sáng mỗi ngày.
        </motion.p>
      </section>

      {/* Our Values Section */}
      <section className="mb-16">
        <motion.h2 
          initial={{ opacity:0, y: -20 }}
          animate={{ opacity:1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-3xl font-bold text-gray-800 text-center mb-10"
        >
          Giá trị cốt lõi
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: <Leaf className="h-10 w-10 text-green-500" />, title: 'Thành phần tự nhiên', description: 'Ưu tiên sử dụng các thành phần lành tính, chiết xuất từ thiên nhiên, an toàn cho mọi loại da.' },
            { icon: <Sparkles className="h-10 w-10 text-yellow-500" />, title: 'Chất lượng vượt trội', description: 'Cam kết mang đến sản phẩm chất lượng cao, được nghiên cứu và kiểm nghiệm kỹ lưỡng.' },
            { icon: <Target className="h-10 w-10 text-blue-500" />, title: 'Khách hàng là trung tâm', description: 'Luôn lắng nghe và đáp ứng nhu cầu của khách hàng, mang đến trải nghiệm mua sắm tốt nhất.' },
            { icon: <Users className="h-10 w-10 text-purple-500" />, title: 'Đội ngũ tận tâm', description: 'Đội ngũ chuyên gia giàu kinh nghiệm, luôn sẵn sàng tư vấn và hỗ trợ bạn.' },
          ].map((value, index) => (
            <motion.div 
              key={index}
              initial={{ opacity:0, scale: 0.9 }}
              animate={{ opacity:1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow"
            >
              <div className="flex justify-center mb-4">{value.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{value.title}</h3>
              <p className="text-gray-600 text-sm">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
      
      {/* Our Story Section */}
      <section className="mb-16 bg-pink-50 p-8 md:p-12 rounded-xl">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <motion.div 
            initial={{ opacity:0, x: -30 }}
            animate={{ opacity:1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="md:w-1/2"
          >
            <img  
              alt="Nhóm người đang làm việc trong văn phòng mỹ phẩm hiện đại" 
              className="rounded-lg shadow-xl w-full h-auto object-cover"
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YnVzaW5lc3MlMjB0ZWFtfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60" 
            />
          </motion.div>
          <motion.div 
            initial={{ opacity:0, x: 30 }}
            animate={{ opacity:1, x: 0 }}
            transition={{ duration: 0.7, delay: 1.0 }}
            className="md:w-1/2"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Câu chuyện của chúng tôi</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              BeautyGlow ra đời từ niềm đam mê với mỹ phẩm và mong muốn tạo ra một thương hiệu Việt Nam uy tín, mang đến những sản phẩm làm đẹp chất lượng quốc tế. Chúng tôi bắt đầu từ một ý tưởng nhỏ, với đội ngũ nòng cốt là những chuyên gia hàng đầu trong lĩnh vực da liễu và hóa mỹ phẩm.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Trải qua nhiều năm nghiên cứu và phát triển, BeautyGlow tự hào giới thiệu các dòng sản phẩm đa dạng, phù hợp với đặc điểm làn da châu Á. Chúng tôi không ngừng nỗ lực để cải tiến và mang đến những trải nghiệm tốt nhất cho khách hàng.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="mb-12">
        <motion.h2 
          initial={{ opacity:0, y: -20 }}
          animate={{ opacity:1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-3xl font-bold text-gray-800 text-center mb-10"
        >
          Đội ngũ của chúng tôi
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div 
              key={index}
              initial={{ opacity:0, y: 20 }}
              animate={{ opacity:1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.4 + index * 0.15 }}
              className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-2xl transition-shadow transform hover:-translate-y-1"
            >
              <div className="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden border-4 border-pink-200">
                <img  
                  alt={member.name} 
                  className="w-full h-full object-cover"
                  src={`https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8${encodeURIComponent(member.image)}fGVufDB8fDB8fHww&auto=format&fit=crop&w=200&q=60`}
                />
              </div>
              <h3 className="text-xl font-semibold text-pink-600 mb-1">{member.name}</h3>
              <p className="text-gray-500">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </motion.div>
  );
};

export default AboutUsPage;