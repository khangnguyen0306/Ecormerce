import React from 'react';
import { motion } from 'framer-motion';
import { X, ShoppingCart, Plus, Minus, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CartSidebar = ({ cart, setIsCartOpen, removeFromCart, updateQuantity, cartTotal }) => {
  const formatPrice = (price) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    }).format(price);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 bg-black bg-opacity-50 z-[60]"
        onClick={() => setIsCartOpen(false)}
      />

      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', damping: 30, stiffness: 300 }}
        className="fixed top-0 right-0 h-full w-full sm:w-96 bg-[#fefbf4] shadow-xl z-[70] overflow-hidden flex flex-col"
      >
        <div className="p-4 border-b flex items-center justify-between">
          <div className="flex items-center">
            <ShoppingCart className="h-6 w-6 mr-4" />
            <h2 className="text-xl mt-1 font-nunito">Giỏ hàng của bạn</h2>
          </div>
          <motion.div
            whileHover={{ rotate: 90 }} // Rotate 180 degrees on hover
            transition={{ type: 'spring', stiffness: 200 }}
          >
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-1 rounded-full hover:bg-white/20 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          </motion.div>
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingCart className="h-16 w-16 text-gray-300 mb-4" />
              <p className="text-gray-500 mb-6">Giỏ hàng của bạn đang trống</p>
              <Button
                onClick={() => {
                  setIsCartOpen(false);
                }}
                className="bg-pink-600 hover:bg-pink-700"
              >
                Tiếp tục mua sắm
              </Button>
            </div>
          ) : (
            <ul className="space-y-4">
              {cart.map((item) => (
                <motion.li
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, x: -50, transition: { duration: 0.2 } }}
                  className="flex items-start border-b pb-4"
                >
                  <div className="h-20 w-20 rounded-lg overflow-hidden flex-shrink-0 bg-gray-100">
                    <img
                      alt={item.name}
                      className="w-full h-full object-cover"
                      src={`https://images.unsplash.com/photo-1485531865381-286666aa80a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8${encodeURIComponent(item.image)}fGVufDB8fDB8fHww&auto=format&fit=crop&w=100&q=60`} />
                  </div>

                  <div className="ml-4 flex-1">
                    <div className="flex justify-between">
                      <h3 className="font-medium text-gray-800 line-clamp-1">{item.name}</h3>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-gray-400 hover:text-red-500 transition-colors"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>

                    <p className="text-sm text-gray-500 mb-2">{formatPrice(item.price)}</p>

                    <div className="flex items-center">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-1 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors"
                        disabled={item.quantity <= 1 && cart.find(ci => ci.id === item.id)?.quantity <= 1}
                      >
                        <Minus className="h-3 w-3" />
                      </button>
                      <span className="mx-3 text-sm font-medium">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-1 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors"
                      >
                        <Plus className="h-3 w-3" />
                      </button>

                      <span className="ml-auto font-medium text-pink-600">
                        {formatPrice(item.price * item.quantity)}
                      </span>
                    </div>
                  </div>
                </motion.li>
              ))}
            </ul>
          )}
        </div>

        {cart.length > 0 && (
          <div className="p-4 border-t bg-gray-50">
            <div className="flex justify-between mb-4">
              <span className="text-gray-600">Tổng cộng</span>
              <span className="font-bold text-lg text-pink-600">{formatPrice(cartTotal)}</span>
            </div>

            <Link to="/checkout" onClick={() => setIsCartOpen(false)} className="w-full">
              <Button className="w-full bg-pink-600 hover:bg-pink-700 py-3 text-md btn-hover-effect">
                Tiến hành thanh toán
              </Button>
            </Link>
          </div>
        )}
      </motion.div>
    </>
  );
};

export default CartSidebar;