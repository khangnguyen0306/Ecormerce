// src/data/sampleData.js

// Sample product data
export const sampleProducts = [
    {
        id: 1,
        name: 'Serum Vitamin C',
        description: 'Serum dưỡng sáng da với Vitamin C tinh khiết, giúp làm mờ vết thâm và đều màu da.',
        longDescription: 'Serum Vitamin C của chúng tôi được bào chế với công thức tiên tiến, kết hợp Vitamin C tinh khiết và các chất chống oxy hóa mạnh mẽ. Sản phẩm giúp bảo vệ da khỏi tác hại của gốc tự do, kích thích sản sinh collagen, làm mờ vết thâm nám và mang lại làn da tươi sáng, rạng rỡ. Thích hợp cho mọi loại da.',
        price: 590000,
        image: 'Lọ serum màu cam với thiết kế sang trọng, chứa dung dịch màu vàng nhạt',
        images: [
          'Lọ serum Vitamin C trên nền trắng',
          'Kết cấu serum Vitamin C trên da',
          'Người mẫu sử dụng serum Vitamin C'
        ],
        rating: 4.8,
        reviews: 120,
        category: 'skincare',
        tag: 'bestseller',
        ingredients: ['Vitamin C', 'Hyaluronic Acid', 'Vitamin E', 'Ferulic Acid'],
        howToUse: 'Sau khi làm sạch và cân bằng da, lấy một lượng vừa đủ serum thoa đều lên mặt và cổ. Vỗ nhẹ để serum thẩm thấu. Sử dụng buổi sáng và tối.'
      },
      {
        id: 2,
        name: 'Kem dưỡng ẩm Hyaluronic',
        description: 'Kem dưỡng ẩm sâu với Hyaluronic Acid, cung cấp độ ẩm tối ưu cho da.',
        longDescription: 'Kem dưỡng ẩm Hyaluronic Acid cung cấp độ ẩm chuyên sâu, giúp da luôn căng mọng và mềm mại. Công thức dịu nhẹ, không gây nhờn rít, phù hợp với mọi loại da, kể cả da nhạy cảm. Sử dụng hàng ngày để duy trì làn da khỏe mạnh và ẩm mượt.',
        price: 450000,
        image: 'Hũ kem dưỡng ẩm màu xanh dương nhạt với kết cấu mịn màng',
        images: [
          'Hũ kem dưỡng ẩm Hyaluronic trên nền trắng',
          'Kết cấu kem dưỡng ẩm Hyaluronic',
          'Người mẫu có làn da ẩm mượt sau khi dùng kem'
        ],
        rating: 4.7,
        reviews: 95,
        category: 'skincare',
        tag: 'new',
        ingredients: ['Hyaluronic Acid', 'Glycerin', 'Ceramides', 'Niacinamide'],
        howToUse: 'Sau bước serum, lấy một lượng kem vừa đủ thoa đều lên mặt và cổ. Massage nhẹ nhàng cho kem thẩm thấu. Sử dụng buổi sáng và tối.'
      },
      {
        id: 3,
        name: 'Son môi lì matte',
        description: 'Son môi lì với màu sắc bền màu suốt 24 giờ, không gây khô môi.',
        longDescription: 'Dòng son môi lì cao cấp mang đến màu sắc chuẩn nét, bền màu suốt cả ngày dài mà không gây cảm giác khô môi. Công thức độc đáo chứa các thành phần dưỡng ẩm giúp đôi môi luôn mềm mại và quyến rũ. Bảng màu đa dạng, phù hợp với mọi phong cách.',
        price: 320000,
        image: 'Son môi màu đỏ đậm trong hộp sang trọng màu đen',
        images: [
          'Thỏi son môi lì màu đỏ',
          'Swatch màu son trên tay',
          'Người mẫu với đôi môi quyến rũ'
        ],
        rating: 4.9,
        reviews: 250,
        category: 'makeup',
        tag: 'bestseller',
        ingredients: ['Sáp ong', 'Dầu Jojoba', 'Vitamin E', 'Bơ hạt mỡ'],
        howToUse: 'Thoa trực tiếp lên môi hoặc dùng cọ môi để có đường nét chính xác hơn. Có thể thoa nhiều lớp để tăng độ đậm của màu son.'
      },
      // Add more products as needed
    ];

// Sample article data
export const sampleArticles = [
  {
    id: 1,
    title: 'Article 1',
    content: 'Content for Article 1',
    author: 'Author 1',
    publishedDate: '2023-01-01',
  },
  {
    id: 2,
    title: 'Article 2',
    content: 'Content for Article 2',
    author: 'Author 2',
    publishedDate: '2023-02-01',
  },
  // Add more articles as needed
];