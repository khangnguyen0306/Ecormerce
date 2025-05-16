import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BarChart2, ShoppingBag, Package, Users, Settings, Edit3, Trash2, PlusCircle, Eye, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';

const StatCard = ({ title, value, icon, color }) => (
  <motion.div 
    className={`p-6 rounded-xl shadow-lg flex items-center space-x-4 bg-gradient-to-br ${color}`}
    whileHover={{ scale: 1.03 }}
  >
    <div className="p-3 bg-white/30 rounded-full">{icon}</div>
    <div>
      <p className="text-sm text-white/80">{title}</p>
      <p className="text-2xl font-bold text-white">{value}</p>
    </div>
  </motion.div>
);

const ProductForm = ({ product, onSave, onCancel }) => {
  const [formData, setFormData] = useState(product || { name: '', description: '', price: '', category: '', image: 'Mô tả hình ảnh sản phẩm mới' });
  const { toast } = useToast();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.price || !formData.category) {
      toast({ title: "Lỗi", description: "Vui lòng điền tên, giá và danh mục sản phẩm.", variant: "destructive" });
      return;
    }
    onSave({ ...formData, id: product?.id || Date.now(), rating: product?.rating || 0, reviews: product?.reviews || 0 });
  };

  return (
    <motion.form 
      onSubmit={handleSubmit} 
      className="space-y-4 bg-white p-6 rounded-lg shadow-md mt-6"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <h3 className="text-xl font-semibold mb-4">{product ? 'Chỉnh sửa sản phẩm' : 'Thêm sản phẩm mới'}</h3>
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Tên sản phẩm</label>
        <Input name="name" value={formData.name} onChange={handleChange} required />
      </div>
      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">Mô tả</label>
        <Textarea name="description" value={formData.description} onChange={handleChange} rows={3} />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">Giá (VND)</label>
          <Input name="price" type="number" value={formData.price} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">Danh mục</label>
          <Input name="category" value={formData.category} onChange={handleChange} placeholder="VD: skincare, makeup" required />
        </div>
      </div>
      <div className="flex justify-end gap-3">
        <Button type="button" variant="outline" onClick={onCancel}>Hủy</Button>
        <Button type="submit" className="bg-pink-600 hover:bg-pink-700">Lưu sản phẩm</Button>
      </div>
    </motion.form>
  );
};


const SellerDashboardPage = ({ products: initialProducts }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [products, setProducts] = useState(initialProducts);
  const [showProductForm, setShowProductForm] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const { toast } = useToast();

  const formatPrice = (price) => new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);

  const handleSaveProduct = (productData) => {
    if (editingProduct) {
      setProducts(prev => prev.map(p => p.id === editingProduct.id ? productData : p));
      toast({ title: "Đã cập nhật sản phẩm!" });
    } else {
      setProducts(prev => [productData, ...prev]);
      toast({ title: "Đã thêm sản phẩm mới!" });
    }
    setShowProductForm(false);
    setEditingProduct(null);
  };

  const handleDeleteProduct = (productId) => {
    setProducts(prev => prev.filter(p => p.id !== productId));
    toast({ title: "Đã xóa sản phẩm!" });
  };
  
  const tabs = [
    { id: 'overview', name: 'Tổng quan', icon: <BarChart2 className="h-5 w-5" /> },
    { id: 'products', name: 'Sản phẩm', icon: <Package className="h-5 w-5" /> },
    { id: 'orders', name: 'Đơn hàng', icon: <ShoppingBag className="h-5 w-5" /> },
    { id: 'customers', name: 'Khách hàng', icon: <Users className="h-5 w-5" /> },
    { id: 'settings', name: 'Cài đặt', icon: <Settings className="h-5 w-5" /> },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <StatCard title="Tổng doanh thu" value={formatPrice(12580000)} icon={<DollarSign className="h-8 w-8 text-white" />} color="from-green-400 to-green-600" />
            <StatCard title="Đơn hàng mới" value="32" icon={<ShoppingBag className="h-8 w-8 text-white" />} color="from-blue-400 to-blue-600" />
            <StatCard title="Tổng sản phẩm" value={products.length} icon={<Package className="h-8 w-8 text-white" />} color="from-purple-400 to-purple-600" />
          </div>
        );
      case 'products':
        return (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold">Danh sách sản phẩm ({products.length})</h3>
              <Button onClick={() => { setEditingProduct(null); setShowProductForm(true); }} className="bg-pink-600 hover:bg-pink-700">
                <PlusCircle className="mr-2 h-4 w-4" /> Thêm sản phẩm
              </Button>
            </div>
            {showProductForm && <ProductForm product={editingProduct} onSave={handleSaveProduct} onCancel={() => setShowProductForm(false)} />}
            
            <div className="mt-6 bg-white shadow-md rounded-lg overflow-x-auto">
              <table className="w-full min-w-max">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="p-3 text-left text-sm font-semibold text-gray-600">Hình ảnh</th>
                    <th className="p-3 text-left text-sm font-semibold text-gray-600">Tên sản phẩm</th>
                    <th className="p-3 text-left text-sm font-semibold text-gray-600">Giá</th>
                    <th className="p-3 text-left text-sm font-semibold text-gray-600">Danh mục</th>
                    <th className="p-3 text-left text-sm font-semibold text-gray-600">Hành động</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map(p => (
                    <tr key={p.id} className="border-b hover:bg-gray-50">
                      <td className="p-3">
                        <img  alt={p.name} src={`https://images.unsplash.com/photo-1591375462077-800a22f5fba4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8${encodeURIComponent(p.image)}fGVufDB8fDB8fHww&auto=format&fit=crop&w=50&q=60`} className="w-12 h-12 object-cover rounded" />
                      </td>
                      <td className="p-3 text-sm text-gray-700">{p.name}</td>
                      <td className="p-3 text-sm text-gray-700">{formatPrice(p.price)}</td>
                      <td className="p-3 text-sm text-gray-500">{p.category}</td>
                      <td className="p-3">
                        <div className="flex space-x-2">
                          <Button variant="ghost" size="icon" onClick={() => { setEditingProduct(p); setShowProductForm(true); }} className="text-blue-600 hover:text-blue-700"><Edit3 className="h-4 w-4" /></Button>
                          <Button variant="ghost" size="icon" onClick={() => handleDeleteProduct(p.id)} className="text-red-600 hover:text-red-700"><Trash2 className="h-4 w-4" /></Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );
      case 'orders':
        return <p className="text-gray-600">Quản lý đơn hàng sẽ được hiển thị ở đây.</p>;
      case 'customers':
        return <p className="text-gray-600">Thông tin khách hàng sẽ được hiển thị ở đây.</p>;
      case 'settings':
        return <p className="text-gray-600">Cài đặt cửa hàng sẽ được hiển thị ở đây.</p>;
      default:
        return null;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-4 py-12"
    >
      <motion.h1 
        initial={{ opacity:0, y: -20 }} animate={{ opacity:1, y: 0 }}
        className="text-3xl md:text-4xl font-bold mb-8 text-pink-600"
      >
        Trang quản lý người bán
      </motion.h1>

      <div className="flex flex-col md:flex-row gap-8">
        <aside className="md:w-1/5">
          <nav className="space-y-1 bg-white p-4 rounded-lg shadow-md sticky top-24">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center px-3 py-2.5 rounded-md text-sm font-medium transition-colors
                  ${activeTab === tab.id ? 'bg-pink-100 text-pink-700' : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'}`}
              >
                {tab.icon}
                <span className="ml-3">{tab.name}</span>
              </button>
            ))}
          </nav>
        </aside>
        <main className="md:w-4/5">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {renderContent()}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </motion.div>
  );
};

export default SellerDashboardPage;