import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast({
        title: "Lỗi",
        description: "Vui lòng điền đầy đủ thông tin.",
        variant: "destructive",
      });
      return;
    }
    // Simulate form submission
    console.log("Form data submitted:", formData);
    toast({
      title: "Gửi thành công!",
      description: "Cảm ơn bạn đã liên hệ. Chúng tôi sẽ phản hồi sớm nhất có thể.",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

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
          Liên hệ với chúng tôi
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Chúng tôi luôn sẵn sàng lắng nghe bạn. Hãy gửi cho chúng tôi câu hỏi, ý kiến đóng góp hoặc bất kỳ yêu cầu nào.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white p-8 rounded-xl shadow-xl"
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Gửi tin nhắn cho chúng tôi</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Họ và tên</label>
              <Input type="text" name="name" id="name" value={formData.name} onChange={handleChange} placeholder="Nguyễn Văn A" required 
                     className="focus:ring-pink-500 focus:border-pink-500"/>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <Input type="email" name="email" id="email" value={formData.email} onChange={handleChange} placeholder="email@example.com" required 
                     className="focus:ring-pink-500 focus:border-pink-500"/>
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Chủ đề</label>
              <Input type="text" name="subject" id="subject" value={formData.subject} onChange={handleChange} placeholder="Về sản phẩm XYZ" required 
                     className="focus:ring-pink-500 focus:border-pink-500"/>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Nội dung tin nhắn</label>
              <Textarea name="message" id="message" rows={5} value={formData.message} onChange={handleChange} placeholder="Nội dung tin nhắn của bạn..." required 
                        className="focus:ring-pink-500 focus:border-pink-500"/>
            </div>
            <div>
              <Button type="submit" className="w-full bg-pink-600 hover:bg-pink-700 text-lg py-3 btn-hover-effect">
                <Send className="mr-2 h-5 w-5" /> Gửi tin nhắn
              </Button>
            </div>
          </form>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-8"
        >
          <div className="bg-white p-8 rounded-xl shadow-xl">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Thông tin liên hệ</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-pink-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-gray-700">Địa chỉ</h3>
                  <p className="text-gray-600">123 Đường Nguyễn Huệ, Phường Bến Nghé, Quận 1, TP. Hồ Chí Minh</p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="h-6 w-6 text-pink-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-gray-700">Điện thoại</h3>
                  <p className="text-gray-600">(+84) 123 456 789</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-pink-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-gray-700">Email</h3>
                  <p className="text-gray-600">info@beautyglow.com</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-xl">
             <h2 className="text-2xl font-semibold text-gray-800 mb-4">Giờ làm việc</h2>
             <p className="text-gray-600">Thứ 2 - Thứ 6: 9:00 - 18:00</p>
             <p className="text-gray-600">Thứ 7: 9:00 - 12:00</p>
             <p className="text-gray-600">Chủ nhật: Nghỉ</p>
          </div>
          
          {/* Placeholder for map */}
          <div className="bg-gray-200 h-64 rounded-xl shadow-inner flex items-center justify-center text-gray-500">
            <MapPin className="h-12 w-12 mr-2" />
            <span>Bản đồ sẽ được hiển thị ở đây</span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ContactPage;