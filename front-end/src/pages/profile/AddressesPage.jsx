import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';
import { MapPin, PlusCircle, Edit3, Trash2, Home, Briefcase } from 'lucide-react';

// Sample address data - replace with actual data
const initialAddresses = [
  { id: 1, type: 'Nhà riêng', recipient: 'Nguyễn Thị Beauty', phone: '0987654321', address: '123 Đường Hoa Hồng, Phường 1, Quận Phú Nhuận', city: 'TP. Hồ Chí Minh', isDefault: true },
  { id: 2, type: 'Công ty', recipient: 'Nguyễn Thị Beauty', phone: '0987654321', address: 'Tòa nhà Bitexco, Số 2 Hải Triều, Phường Bến Nghé, Quận 1', city: 'TP. Hồ Chí Minh', isDefault: false },
];

const AddressForm = ({ address, onSave, onCancel }) => {
  const [formData, setFormData] = useState(address || { type: 'Nhà riêng', recipient: '', phone: '', address: '', city: '', isDefault: false });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <motion.form 
      onSubmit={handleSubmit} 
      className="space-y-4 bg-gray-50 p-6 rounded-lg"
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0, height: 0 }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="recipient" className="block text-sm font-medium text-gray-700 mb-1">Người nhận</label>
          <Input name="recipient" value={formData.recipient} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Số điện thoại</label>
          <Input name="phone" type="tel" value={formData.phone} onChange={handleChange} required />
        </div>
      </div>
      <div>
        <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">Địa chỉ</label>
        <Input name="address" value={formData.address} onChange={handleChange} required />
      </div>
      <div>
        <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">Tỉnh/Thành phố</label>
        <Input name="city" value={formData.city} onChange={handleChange} required />
      </div>
      <div>
        <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-1">Loại địa chỉ</label>
        <select name="type" value={formData.type} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500">
          <option>Nhà riêng</option>
          <option>Công ty</option>
        </select>
      </div>
      <div className="flex items-center">
        <input type="checkbox" name="isDefault" id="isDefault" checked={formData.isDefault} onChange={handleChange} className="h-4 w-4 text-pink-600 border-gray-300 rounded focus:ring-pink-500" />
        <label htmlFor="isDefault" className="ml-2 block text-sm text-gray-900">Đặt làm địa chỉ mặc định</label>
      </div>
      <div className="flex justify-end gap-3">
        <Button type="button" variant="outline" onClick={onCancel}>Hủy</Button>
        <Button type="submit" className="bg-pink-600 hover:bg-pink-700">Lưu địa chỉ</Button>
      </div>
    </motion.form>
  );
};


const AddressesPage = () => {
  const { toast } = useToast();
  const [addresses, setAddresses] = useState(initialAddresses);
  const [showForm, setShowForm] = useState(false);
  const [editingAddress, setEditingAddress] = useState(null);

  const handleAddNewAddress = () => {
    setEditingAddress(null);
    setShowForm(true);
  };

  const handleEditAddress = (address) => {
    setEditingAddress(address);
    setShowForm(true);
  };

  const handleDeleteAddress = (id) => {
    setAddresses(prev => prev.filter(addr => addr.id !== id));
    toast({ title: "Đã xóa địa chỉ", description: "Địa chỉ đã được xóa thành công." });
  };

  const handleSaveAddress = (addressData) => {
    if (editingAddress) {
      setAddresses(prev => prev.map(addr => addr.id === editingAddress.id ? { ...addr, ...addressData } : addr));
      toast({ title: "Đã cập nhật địa chỉ", description: "Địa chỉ đã được cập nhật." });
    } else {
      setAddresses(prev => [...prev, { ...addressData, id: Date.now() }]); // Simple ID generation
      toast({ title: "Đã thêm địa chỉ mới", description: "Địa chỉ mới đã được lưu." });
    }
    setShowForm(false);
    setEditingAddress(null);
  };
  
  const handleSetDefault = (id) => {
    setAddresses(prev => prev.map(addr => ({ ...addr, isDefault: addr.id === id })));
    toast({ title: "Đã đặt làm mặc định", description: "Địa chỉ đã được đặt làm mặc định." });
  };


  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">Sổ địa chỉ</h2>
        {!showForm && (
          <Button onClick={handleAddNewAddress} className="bg-pink-600 hover:bg-pink-700">
            <PlusCircle className="mr-2 h-5 w-5" /> Thêm địa chỉ mới
          </Button>
        )}
      </div>

      {showForm && (
        <AddressForm 
          address={editingAddress} 
          onSave={handleSaveAddress} 
          onCancel={() => { setShowForm(false); setEditingAddress(null); }} 
        />
      )}

      {!showForm && addresses.length === 0 && (
        <div className="text-center py-12">
          <MapPin className="h-20 w-20 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-500">Bạn chưa có địa chỉ nào được lưu.</p>
        </div>
      )}
      
      {!showForm && addresses.length > 0 && (
        <div className="space-y-6 mt-6">
          {addresses.map((addr) => (
            <motion.div 
              key={addr.id}
              layout
              initial={{ opacity: 0, y:10 }}
              animate={{ opacity: 1, y:0 }}
              exit={{ opacity: 0, y:-10 }}
              className="bg-gray-50 p-6 rounded-lg shadow-sm"
            >
              <div className="flex justify-between items-start">
                <div>
                  <div className="flex items-center mb-1">
                    {addr.type === 'Nhà riêng' ? <Home className="h-5 w-5 text-pink-600 mr-2" /> : <Briefcase className="h-5 w-5 text-blue-600 mr-2" />}
                    <p className="font-semibold text-gray-800">{addr.recipient} {addr.isDefault && <span className="ml-2 text-xs bg-pink-100 text-pink-700 px-2 py-0.5 rounded-full">Mặc định</span>}</p>
                  </div>
                  <p className="text-sm text-gray-600">{addr.phone}</p>
                  <p className="text-sm text-gray-600">{addr.address}, {addr.city}</p>
                </div>
                <div className="flex space-x-2 flex-shrink-0">
                  <Button variant="ghost" size="icon" onClick={() => handleEditAddress(addr)} className="text-gray-500 hover:text-blue-600">
                    <Edit3 className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" onClick={() => handleDeleteAddress(addr.id)} className="text-gray-500 hover:text-red-600">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              {!addr.isDefault && (
                <Button variant="link" size="sm" onClick={() => handleSetDefault(addr.id)} className="mt-2 p-0 text-pink-600 hover:text-pink-700">
                  Đặt làm mặc định
                </Button>
              )}
            </motion.div>
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default AddressesPage;