import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ShoppingBag, Package, Truck, CheckCircle, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';

// Sample order data - replace with actual data
const sampleOrders = [
  { 
    id: 'BG12345', date: '10/05/2025', total: 870000, status: 'Đã giao hàng', statusIcon: <CheckCircle className="text-green-500" />,
    items: [
      { name: 'Serum Vitamin C', quantity: 1, price: 590000, image: 'Lọ serum màu cam' },
      { name: 'Son môi lì matte', quantity: 1, price: 280000, image: 'Son môi màu đỏ' },
    ]
  },
  { 
    id: 'BG67890', date: '05/05/2025', total: 450000, status: 'Đang vận chuyển', statusIcon: <Truck className="text-blue-500" />,
    items: [
      { name: 'Kem dưỡng ẩm Hyaluronic', quantity: 1, price: 450000, image: 'Hũ kem dưỡng ẩm màu xanh' },
    ]
  },
  { 
    id: 'BG24680', date: '01/05/2025', total: 1200000, status: 'Đã hủy', statusIcon: <CheckCircle className="text-red-500" />,
    items: [
      { name: 'Phấn nước cushion', quantity: 2, price: 520000, image: 'Hộp phấn nước màu hồng' },
      { name: 'Mascara dài mi', quantity: 1, price: 160000, image: 'Mascara màu đen' },
    ]
  },
];

const formatPrice = (price) => new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);

const OrderHistoryPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Lịch sử đơn hàng</h2>
      
      {sampleOrders.length === 0 ? (
        <div className="text-center py-12">
          <ShoppingBag className="h-20 w-20 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-500">Bạn chưa có đơn hàng nào.</p>
          <Link to="/products">
            <Button className="mt-6 bg-pink-600 hover:bg-pink-700">Bắt đầu mua sắm</Button>
          </Link>
        </div>
      ) : (
        <div className="space-y-6">
          {sampleOrders.map((order) => (
            <motion.div 
              key={order.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-4 pb-4 border-b">
                <div>
                  <p className="font-semibold text-pink-600">Mã đơn hàng: {order.id}</p>
                  <p className="text-sm text-gray-500">Ngày đặt: {order.date}</p>
                </div>
                <div className="flex items-center mt-2 sm:mt-0">
                  {order.statusIcon}
                  <span className="ml-2 text-sm font-medium">{order.status}</span>
                </div>
              </div>

              <div className="space-y-3 mb-4">
                {order.items.map((item, index) => (
                  <div key={index} className="flex items-center text-sm">
                    <img  
                      alt={item.name} 
                      className="w-12 h-12 object-cover rounded mr-3"
                      src={`https://images.unsplash.com/photo-1591375462077-800a22f5fba4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8${encodeURIComponent(item.image)}fGVufDB8fDB8fHww&auto=format&fit=crop&w=50&q=60`}
                    />
                    <div className="flex-grow">
                      <p className="text-gray-700 line-clamp-1">{item.name}</p>
                      <p className="text-gray-500">Số lượng: {item.quantity}</p>
                    </div>
                    <p className="text-gray-800 font-medium">{formatPrice(item.price * item.quantity)}</p>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row justify-between sm:items-center pt-4 border-t">
                <p className="text-lg font-semibold text-gray-800 mb-2 sm:mb-0">Tổng cộng: {formatPrice(order.total)}</p>
                <Button variant="outline" size="sm">
                  <Eye className="mr-2 h-4 w-4" /> Xem chi tiết
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default OrderHistoryPage;