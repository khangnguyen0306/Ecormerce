import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { CreditCard, Truck, Package, DollarSign, CheckCircle, ArrowLeft } from 'lucide-react';

const paymentMethods = [
  { id: 'cod', name: 'Thanh toán khi nhận hàng (COD)', icon: <DollarSign className="h-6 w-6 text-green-500" /> },
  { id: 'stripe', name: 'Thẻ tín dụng/ghi nợ (Stripe)', icon: <CreditCard className="h-6 w-6 text-blue-500" /> },
  { id: 'zalopay', name: 'ZaloPay', icon: <img  alt="ZaloPay logo" className="h-6 w-6" src="https://images.unsplash.com/photo-1508938255445-041651dfe0c3" /> },
];

const CheckoutPage = ({ cart, cartTotal, clearCart }) => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '', email: '', phone: '', address: '', city: '', note: ''
  });
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('cod');
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);

  const shippingFee = cartTotal > 500000 ? 0 : 30000;
  const finalTotal = cartTotal + shippingFee;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmitOrder = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.phone || !formData.address || !formData.city) {
      toast({ title: "Lỗi", description: "Vui lòng điền đầy đủ thông tin giao hàng.", variant: "destructive" });
      return;
    }

    if (selectedPaymentMethod === 'stripe') {
      toast({ title: "Thông báo", description: "Chức năng thanh toán Stripe sẽ được tích hợp sớm. Vui lòng chọn phương thức khác." });
      return;
    }
    if (selectedPaymentMethod === 'zalopay') {
      toast({ title: "Thông báo", description: "Chức năng thanh toán ZaloPay sẽ được tích hợp sớm. Vui lòng chọn phương thức khác." });
      return;
    }
    
    console.log("Đơn hàng đã đặt:", { ...formData, cart, cartTotal, shippingFee, finalTotal, paymentMethod: selectedPaymentMethod });
    
    setIsOrderPlaced(true);
    clearCart(); // Clear cart after successful order
    
    // Simulate API call and redirect
    setTimeout(() => {
      toast({ title: "Đặt hàng thành công!", description: "Cảm ơn bạn đã mua hàng. Đơn hàng của bạn đang được xử lý." });
    }, 500);
  };

  const formatPrice = (price) => new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);

  if (isOrderPlaced) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="container mx-auto px-4 py-12 text-center min-h-[calc(100vh-10rem)] flex flex-col justify-center items-center"
      >
        <CheckCircle className="h-24 w-24 text-green-500 mb-6" />
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Đặt hàng thành công!</h1>
        <p className="text-gray-600 mb-8 max-w-md">
          Cảm ơn bạn đã tin tưởng và mua sắm tại BeautyGlow. Đơn hàng của bạn đã được ghi nhận và đang được xử lý. Chúng tôi sẽ thông báo cho bạn khi đơn hàng được vận chuyển.
        </p>
        <Link to="/">
          <Button className="bg-pink-600 hover:bg-pink-700 text-lg px-8 py-3">
            Tiếp tục mua sắm
          </Button>
        </Link>
      </motion.div>
    );
  }
  
  if (cart.length === 0 && !isOrderPlaced) {
     return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="container mx-auto px-4 py-12 text-center min-h-[calc(100vh-10rem)] flex flex-col justify-center items-center"
      >
        <Package className="h-24 w-24 text-gray-400 mb-6" />
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Giỏ hàng của bạn trống</h1>
        <p className="text-gray-600 mb-8 max-w-md">
          Hiện tại không có sản phẩm nào trong giỏ hàng của bạn. Hãy khám phá thêm các sản phẩm tuyệt vời của chúng tôi!
        </p>
        <Link to="/products">
          <Button className="bg-pink-600 hover:bg-pink-700 text-lg px-8 py-3">
            Khám phá sản phẩm
          </Button>
        </Link>
      </motion.div>
    );
  }


  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-4 py-8"
    >
      <div className="mb-6">
        <Link to="/products" className="flex items-center text-pink-600 hover:text-pink-700 transition-colors">
          <ArrowLeft className="mr-2 h-5 w-5" />
          Quay lại mua sắm
        </Link>
      </div>
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-10 text-pink-600">Thanh toán</h1>
      
      <form onSubmit={handleSubmitOrder} className="grid md:grid-cols-3 gap-8">
        {/* Shipping Information */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}
          className="md:col-span-2 bg-white p-6 rounded-xl shadow-lg"
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Thông tin giao hàng</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">Họ và tên</label>
              <Input type="text" name="fullName" id="fullName" value={formData.fullName} onChange={handleChange} required />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Số điện thoại</label>
              <Input type="tel" name="phone" id="phone" value={formData.phone} onChange={handleChange} required />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <Input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">Địa chỉ</label>
              <Input type="text" name="address" id="address" value={formData.address} onChange={handleChange} required />
            </div>
            <div>
              <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">Tỉnh/Thành phố</label>
              <Input type="text" name="city" id="city" value={formData.city} onChange={handleChange} required />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="note" className="block text-sm font-medium text-gray-700 mb-1">Ghi chú (tùy chọn)</label>
              <Textarea name="note" id="note" value={formData.note} onChange={handleChange} rows={3} />
            </div>
          </div>
          
          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-6">Phương thức thanh toán</h2>
          <div className="space-y-3">
            {paymentMethods.map(method => (
              <label key={method.id} htmlFor={`payment-${method.id}`}
                className={`flex items-center p-4 border rounded-lg cursor-pointer transition-all ${selectedPaymentMethod === method.id ? 'border-pink-500 ring-2 ring-pink-200 bg-pink-50' : 'border-gray-300 hover:border-gray-400'}`}
              >
                <input type="radio" name="paymentMethod" id={`payment-${method.id}`} value={method.id}
                  checked={selectedPaymentMethod === method.id}
                  onChange={(e) => setSelectedPaymentMethod(e.target.value)}
                  className="mr-3 h-4 w-4 text-pink-600 focus:ring-pink-500 border-gray-300"
                />
                <span className="mr-3">{method.icon}</span>
                <span className="font-medium text-gray-700">{method.name}</span>
              </label>
            ))}
          </div>
        </motion.div>

        {/* Order Summary */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}
          className="md:col-span-1 bg-white p-6 rounded-xl shadow-lg h-fit sticky top-24"
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Tóm tắt đơn hàng</h2>
          <div className="space-y-3 mb-6">
            {cart.map(item => (
              <div key={item.id} className="flex justify-between items-center text-sm">
                <div className="flex items-center">
                  <img  alt={item.name} src={`https://images.unsplash.com/photo-1485531865381-286666aa80a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8${encodeURIComponent(item.image)}fGVufDB8fDB8fHww&auto=format&fit=crop&w=50&q=60`} className="w-10 h-10 object-cover rounded mr-2" />
                  <div>
                    <p className="text-gray-700 line-clamp-1">{item.name}</p>
                    <p className="text-gray-500">x {item.quantity}</p>
                  </div>
                </div>
                <p className="text-gray-800 font-medium">{formatPrice(item.price * item.quantity)}</p>
              </div>
            ))}
          </div>
          <div className="border-t pt-4 space-y-2">
            <div className="flex justify-between text-gray-600">
              <span>Tạm tính:</span>
              <span>{formatPrice(cartTotal)}</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Phí vận chuyển:</span>
              <span>{shippingFee === 0 ? 'Miễn phí' : formatPrice(shippingFee)}</span>
            </div>
            <div className="flex justify-between text-xl font-bold text-pink-600">
              <span>Tổng cộng:</span>
              <span>{formatPrice(finalTotal)}</span>
            </div>
          </div>
          <Button type="submit" size="lg" className="w-full mt-8 bg-pink-600 hover:bg-pink-700 text-lg py-3 btn-hover-effect">
            Đặt hàng
          </Button>
        </motion.div>
      </form>
    </motion.div>
  );
};

export default CheckoutPage;