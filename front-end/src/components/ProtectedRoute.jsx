import React, { useEffect, useRef } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/components/ui/use-toast';

const ProtectedRoute = ({ allowedRoles }) => {
  const { user } = useAuth();
  const location = useLocation();
  const { toast } = useToast();
  const hasShownToast = useRef(false); // Ref to track if toast has been shown

  useEffect(() => {
    if (!user || !user.role) {
      if (!hasShownToast.current) {
        hasShownToast.current = true; // Set to true to prevent further toasts
        toast({
          title: "Lỗi xác thực",
          description: "Không thể xác định vai trò người dùng. Vui lòng đăng nhập.",
          variant: "destructive",
        });
      }
    }
  }, [user, toast]);

  // Allow access if user's role is in the allowedRoles array OR if user is guest and allowedRoles includes 'guest'
  const isAllowed = allowedRoles ? allowedRoles.includes(user?.role) : user.role !== 'guest';

  // useEffect(() => {
  //   if (!isAllowed && !hasShownToast.current) {
  //     hasShownToast.current = true; // Set to true to prevent further toasts
  //     toast({
  //       title: "Truy cập bị từ chối",
  //       description: "Bạn không có quyền truy cập trang này.",
  //       variant: "destructive",
  //     });
  //   }
  // }, [isAllowed, toast]);

  if (!isAllowed) {
    // If user is logged in but not authorized, redirect to home or a specific 'unauthorized' page
    // If user is a guest trying to access a non-guest page, redirect to login
    return <Navigate to={user?.role === 'guest' ? "/login" : "/"} state={{ from: location }} replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;