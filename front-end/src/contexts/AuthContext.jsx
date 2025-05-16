import React, { createContext, useState, useContext, useEffect } from 'react';
import { useToast } from '@/components/ui/use-toast';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // user: { email: string, role: 'guest' | 'customer' | 'seller' | 'admin', ...otherData }
  const { toast } = useToast();

  useEffect(() => {
    // Attempt to load user from localStorage on initial load
    const storedUser = localStorage.getItem('authUser');
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        // Basic validation of stored user object
        if (parsedUser && parsedUser.email && parsedUser.role) {
           setUser(parsedUser);
        } else {
          localStorage.removeItem('authUser'); // Clear invalid stored user
        }
      } catch (error) {
        console.error("Failed to parse stored user:", error);
        localStorage.removeItem('authUser');
      }
    } else {
      // Default to guest if no user is stored
      setUser({ role: 'guest' });
    }
  }, []);

  const login = async (email, password) => {
    // IMPORTANT: This is a mock login. Replace with actual Supabase/backend authentication.
    // Supabase integration is NOT YET COMPLETE.
    console.log("Attempting login for:", email);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    if (email === 'admin@example.com' && password === 'admin123') {
      const adminUser = { email, role: 'admin', fullName: 'Admin User' };
      setUser(adminUser);
      localStorage.setItem('authUser', JSON.stringify(adminUser));
      toast({ title: "Đăng nhập thành công", description: "Chào mừng Admin!" });
      return adminUser;
    } else if (email === 'seller@example.com' && password === 'seller123') {
      const sellerUser = { email, role: 'seller', fullName: 'Seller User' };
      setUser(sellerUser);
      localStorage.setItem('authUser', JSON.stringify(sellerUser));
      toast({ title: "Đăng nhập thành công", description: "Chào mừng Người Bán!" });
      return sellerUser;
    } else if (email === 'customer@example.com' && password === 'customer123') {
      const customerUser = { email, role: 'customer', fullName: 'Customer User' };
      setUser(customerUser);
      localStorage.setItem('authUser', JSON.stringify(customerUser));
      toast({ title: "Đăng nhập thành công", description: "Chào mừng bạn!" });
      return customerUser;
    } else {
      toast({ title: "Đăng nhập thất bại", description: "Email hoặc mật khẩu không chính xác.", variant: "destructive" });
      throw new Error("Invalid credentials");
    }
  };

  const register = async (fullName, email, password) => {
    // IMPORTANT: This is a mock registration. Replace with actual Supabase/backend.
    console.log("Attempting registration for:", email, fullName);
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Simulate successful registration, default role to 'customer'
    const newUser = { email, role: 'customer', fullName };
    // In a real app, you might not log them in immediately or send a verification email.
    // For this mock, we'll "log them in" by setting them as user.
    setUser(newUser); 
    localStorage.setItem('authUser', JSON.stringify(newUser));
    toast({ title: "Đăng ký thành công", description: `Chào mừng ${fullName}! Tài khoản của bạn đã được tạo.` });
    return newUser;
  };

  const logout = () => {
    setUser({ role: 'guest' }); // Set to guest on logout
    localStorage.removeItem('authUser');
    toast({ title: "Đã đăng xuất", description: "Bạn đã đăng xuất thành công." });
  };
  
  const sendPasswordResetEmail = async (email) => {
    // IMPORTANT: Mock function. Replace with Supabase/backend.
    console.log("Sending password reset email to:", email);
    await new Promise(resolve => setTimeout(resolve, 1000));
    toast({ title: "Yêu cầu đã được gửi", description: "Nếu email tồn tại, một liên kết đặt lại mật khẩu đã được gửi." });
    return true;
  };


  const value = {
    user,
    login,
    register,
    logout,
    sendPasswordResetEmail,
    setUser // Allow manual user setting if needed, e.g., after OAuth
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};