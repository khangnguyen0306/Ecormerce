import asyncHandler from 'express-async-handler';
import Auth from '../models/Auth.model.js';
import generateToken from '../utils/GenerateToken.js';
import bcrypt from 'bcryptjs';
import transporter from '../utils/MailserVices.js';

// @desc    Auth user & get token
// @route   POST /api/users/login
// @access  Public
const authUser = asyncHandler(async (req, res) => {
  const { usernameOrEmail, password } = req.body;
  // Tìm user theo username hoặc phoneNumber
  const user = await Auth.findOne({
    $or: [
      { username: usernameOrEmail },
      { email: usernameOrEmail }
    ]
  });
  if (user && (await user.matchPassword(password))) {
    res.json({
      success: true,
      data: {
        _id: user._id,
        username: user.username,
        email: user.email,
        role: user.role,
        isEmailVerified: user.isEmailVerified,
        token: generateToken(user._id),
      }
    });
  } else {
    res.status(401);
    throw new Error('Sai tài khoản hoặc mật khẩu vui lòng thử lại !');
  }
});

// @desc    Register new user
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;
  const userExists = await Auth.findOne({
    $or: [
      { username },
      { email }
    ]
  });
  if (userExists) {
    res.status(400);
    throw new Error('User already exists');
  }
  const user = await Auth.create({ username, email, passwordHash: password });
  if (user) {
    res.status(201).json({
      success: true,
      data: {
        _id: user._id,
        username: user.username,
        email: user.email,
        role: user.role,
        isEmailVerified: user.isEmailVerified,
        token: generateToken(user._id),
      }
    });
  } else {
    res.status(400);
    throw new Error('Invalid user data');
  }
});

// @desc    Forgot password
// @route   POST /api/users/forgot-password
// @access  Public
const forgotPassword = asyncHandler(async (req, res) => {
  const { email } = req.body;
  const user = await Auth.findOne({ email });

  if (!user) {
    res.status(404);
    throw new Error('User not found');
  }

  // Tạo mã xác thực 6 số ngẫu nhiên
  const verificationCode = Math.floor(100000 + Math.random() * 900000).toString();

  // Lưu mã xác thực và thời gian hết hạn (1 phút)
  user.verificationCode = verificationCode;
  user.verificationCodeExpires = Date.now() + 120000; // 2 phút
  await user.save();


  const mailOptions = {
    to: email,
    subject: 'Password Reset Verification Code',
    text: `Your verification code is: ${verificationCode}\n\n` +
          `This code will expire in 1 minute. Please use it to reset your password.`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).json({ message: 'Verification code sent to your email' });
  });
});

// @desc    Verify code for password reset
// @route   POST /api/users/verify-code
// @access  Public
const verifyCode = asyncHandler(async (req, res) => {
  const { email, code } = req.body;
  const user = await Auth.findOne({ email });

  if (!user || user.verificationCode !== code || Date.now() > user.verificationCodeExpires) {
    res.status(400);
    throw new Error('Invalid or expired verification code');
  }

  res.status(200).json({ message: 'Verification code is valid' });
});

// @desc    Reset password
// @route   POST /api/users/reset-password
// @access  Public
const resetPassword = asyncHandler(async (req, res) => {
  const { email, newPassword, verificationCode } = req.body;
  const user = await Auth.findOne({ email });

  if (!user) {
    res.status(404);
    throw new Error('User not found');
  }

  // Kiểm tra mã xác thực và thời gian hết hạn
  if (user.verificationCode !== verificationCode || Date.now() > user.verificationCodeExpires) {
    res.status(400);
    throw new Error('Invalid or expired verification code');
  }

  // Hash mật khẩu mới
//   const salt = await bcrypt.genSalt(10);
  user.passwordHash = newPassword;
  
  // Xóa mã xác thực sau khi đặt lại mật khẩu
  user.verificationCode = undefined;
  user.verificationCodeExpires = undefined;

  await user.save();

  res.status(200).json({ message: 'Password has been reset successfully' });
});

// @desc    Change password
// @route   POST /api/users/change-password
// @access  Private (cần xác thực)
const changePassword = asyncHandler(async (req, res) => {
  const { email, oldPassword, newPassword } = req.body;
  const user = await Auth.findOne({ email });

  if (!user) {
    res.status(404);
    throw new Error('User not found');
  }

  // Kiểm tra mật khẩu cũ
  if (!(await user.matchPassword(oldPassword))) {
    res.status(401);
    throw new Error('Old password is incorrect');
  }

  // Hash mật khẩu mới
  const salt = await bcrypt.genSalt(10);
  user.passwordHash = await bcrypt.hash(newPassword, salt);

  await user.save();

  res.status(200).json({ message: 'Password has been changed successfully' });
});

export { authUser, registerUser, forgotPassword, verifyCode, resetPassword, changePassword };


