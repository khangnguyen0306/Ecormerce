import React, { useContext, useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';
import { User, Mail, Phone, Save } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

const ProfilePage = () => {
  const { toast } = useToast();

  // Placeholder user data - replace with actual data from context/API
  const [user, setUser] = useState({
    fullName: 'Nguyễn Thị Beauty',
    email: 'beauty.nguyen@example.com',
    phone: '0987654321',
    avatar: 'Chân dung một phụ nữ Việt Nam xinh đẹp, tóc dài, mỉm cười' 
  });
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    // Simulate API call to save profile
    console.log("Saving profile:", user);
    toast({ title: "Đã lưu thông tin!", description: "Thông tin cá nhân của bạn đã được cập nhật." });
    setIsEditing(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Thông tin cá nhân</h2>
      
      <div className="flex flex-col items-center sm:flex-row sm:items-start gap-6 mb-8">
        <div className="relative">
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-pink-200 shadow-md">
            <img  
              alt={user.fullName} 
              className="w-full h-full object-cover"
              src={`https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8${encodeURIComponent(user.avatar)}fGVufDB8fDB8fHww&auto=format&fit=crop&w=200&q=60`}
            />
          </div>
          {isEditing && (
            <Button size="sm" variant="outline" className="absolute bottom-0 right-0 bg-white rounded-full p-2 shadow">
              Đổi ảnh
            </Button>
          )}
        </div>
        <div className="text-center sm:text-left">
          <h3 className="text-xl font-bold text-pink-600">{user.fullName}</h3>
          <p className="text-gray-500">{user.email}</p>
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">Họ và tên</label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input type="text" name="fullName" id="fullName" value={user.fullName} onChange={handleChange} disabled={!isEditing} className="pl-10" />
          </div>
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input type="email" name="email" id="email" value={user.email} onChange={handleChange} disabled={!isEditing} className="pl-10" />
          </div>
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Số điện thoại</label>
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input type="tel" name="phone" id="phone" value={user.phone} onChange={handleChange} disabled={!isEditing} className="pl-10" />
          </div>
        </div>
      </div>

      <div className="mt-8 flex justify-end gap-3">
        {isEditing ? (
          <>
            <Button variant="outline" onClick={() => setIsEditing(false)}>Hủy</Button>
            <Button onClick={handleSave} className="bg-pink-600 hover:bg-pink-700">
              <Save className="mr-2 h-4 w-4" /> Lưu thay đổi
            </Button>
          </>
        ) : (
          <Button onClick={() => setIsEditing(true)} className="bg-pink-600 hover:bg-pink-700">
            Chỉnh sửa thông tin
          </Button>
        )}
      </div>
    </motion.div>
  );
};

export default ProfilePage;