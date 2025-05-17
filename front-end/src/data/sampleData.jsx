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
          'https://hthaostudio.com/wp-content/uploads/2022/10/Anh-my-pham-1.jpg',
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
          'https://chailolita.com/wp-content/uploads/2022/07/chai-nuoc-hoa-7.jpg',
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
          'https://cdn.tgdd.vn/Files/2020/12/19/1314793/10-lo-nuoc-hoa-duoc-chi-em-do-xo-nhau-rinh-ve-nam-2020-boi-huong-thom-qua-u-la-sang-chanh-202012191005113421.jpg',
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
      {
        id: 4,
        name: 'Mặt nạ ngủ',
        description: 'Mặt nạ ngủ giúp cấp ẩm và làm sáng da qua đêm.',
        price: 350000,
        images: [
            'https://images.squarespace-cdn.com/content/v1/53883795e4b016c956b8d243/d0cb9a84-44b0-47ba-af91-354b53c9f6aa/La%2BRoche-Posay%2B1.jpg',
        ],
        rating: 4.5,
    },
    {
        id: 5,
        name: 'Sữa rửa mặt trà xanh',
        description: 'Sữa rửa mặt chiết xuất trà xanh giúp làm sạch và dịu nhẹ cho da.',
        price: 250000,
        images: [
            'https://media.istockphoto.com/id/1418265792/vi/anh/%C4%91%E1%BB%93ng-h%E1%BB%93-m%E1%BB%B9-ph%E1%BA%A9m-%C4%91%C3%A0o-m%C3%A0u-be-%C4%91%E1%BB%8F-v%C3%A0-san-h%C3%B4-phong-c%C3%A1ch-m%E1%BB%B9-ph%E1%BA%A9m-phong-c%C3%A1ch-ph%E1%BA%B3ng-n%E1%BA%B1m-b%E1%BA%A3ng-m%C3%A0u-c%E1%BA%ADn.jpg?s=612x612&w=0&k=20&c=UoIEdrplo5TlAUuyCZuxoif0vIM4BzpNFi4F0eCcLJA=',
            'Kết cấu sữa rửa mặt',
            'Người mẫu sử dụng sữa rửa mặt'
        ],
        rating: 4.6,
    },
    {
        id: 6,
        name: 'Kem chống nắng SPF 50',
        description: 'Kem chống nắng bảo vệ da khỏi tác hại của tia UV.',
        price: 400000,
        images: [
            'https://mediawinwin.vn/upload/images/sanpham/top-1-dich-vu-chup-anh-san-pham-my-pham-chuyen-nhiep-8.JPG',
            'Kết cấu kem chống nắng',
            'Người mẫu sử dụng kem chống nắng'
        ],
        rating: 4.8,
    },
    {
        id: 7,
        name: 'Toner hoa hồng',
        description: 'Toner chiết xuất hoa hồng giúp cân bằng độ pH cho da.',
        price: 220000,
        images: [
            'https://studiovietnam.com/wp-content/uploads/2022/10/concept-chup-anh-san-pham-04.jpg',
            'Kết cấu toner',
            'Người mẫu sử dụng toner'
        ],
        rating: 4.7,
    },
    {
        id: 8,
        name: 'Dầu gội chiết xuất thiên nhiên',
        description: 'Dầu gội giúp nuôi dưỡng tóc từ gốc đến ngọn.',
        price: 300000,
        images: [
            'https://cdn.vuahanghieu.com/unsafe/0x0/left/top/smart/filters:quality(90)/https://admin.vuahanghieu.com/upload/news/content/2021/05/nuoc-hoa-jean-paul-gaultier-scandal-by-night-edp-intense-80ml-jpg-1622449553-31052021152553.jpg',
            'Kết cấu dầu gội',
            'Người mẫu sử dụng dầu gội'
        ],
        rating: 4.5,
    },
    {
        id: 9,
        name: 'Dầu xả chiết xuất thiên nhiên',
        description: 'Dầu xả giúp tóc mềm mượt và dễ chải.',
        price: 320000,
        images: [
            'https://img.pikbest.com/photo/20250104/luxurious-purple-perfume-bottle-with-pearls-and-flowers_11338632.jpg!w700wp',
            'Kết cấu dầu xả',
            'Người mẫu sử dụng dầu xả'
        ],
        rating: 4.6,
    },
    {
        id: 10,
        name: 'Son dưỡng môi',
        description: 'Son dưỡng môi giúp giữ ẩm và làm mềm môi.',
        price: 150000,
        images: [
            'https://example.com/lipbalm1.jpg',
            'Kết cấu son dưỡng môi',
            'Người mẫu sử dụng son dưỡng môi'
        ],
        rating: 4.8,
    },
    {
        id: 11,
        name: 'Nước hoa hồng',
        description: 'Nước hoa hồng giúp làm sạch và se khít lỗ chân lông.',
        price: 280000,
        images: [
            'https://example.com/rosewater1.jpg',
            'Kết cấu nước hoa hồng',
            'Người mẫu sử dụng nước hoa hồng'
        ],
        rating: 4.7,
    },
    {
        id: 12,
        name: 'Kem trị mụn',
        description: 'Kem trị mụn hiệu quả, giúp làm giảm mụn nhanh chóng.',
        price: 350000,
        images: [
            'https://example.com/acnecream1.jpg',
            'Kết cấu kem trị mụn',
            'Người mẫu sử dụng kem trị mụn'
        ],
        rating: 4.6,
    },
    {
        id: 13,
        name: 'Bộ chăm sóc da mặt',
        description: 'Bộ sản phẩm chăm sóc da mặt đầy đủ cho mọi loại da.',
        price: 1200000,
        images: [
            'https://example.com/skincarekit1.jpg',
            'Kết cấu bộ sản phẩm',
            'Người mẫu sử dụng bộ sản phẩm'
        ],
        rating: 4.9,
    },
    {
        id: 14,
        name: 'Mặt nạ giấy',
        description: 'Mặt nạ giấy giúp cấp ẩm và làm sáng da.',
        price: 150000,
        images: [
            'https://example.com/papermask1.jpg',
            'Kết cấu mặt nạ giấy',
            'Người mẫu sử dụng mặt nạ giấy'
        ],
        rating: 4.5,
    },
    {
        id: 15,
        name: 'Kem dưỡng trắng da',
        description: 'Kem dưỡng trắng da giúp làm sáng và đều màu da.',
        price: 600000,
        images: [
            'https://example.com/whiteningcream1.jpg',
            'Kết cấu kem dưỡng trắng da',
            'Người mẫu sử dụng kem dưỡng trắng da'
        ],
        rating: 4.8,
    },
    {
        id: 16,
        name: 'Serum cấp nước',
        description: 'Serum cấp nước giúp da luôn ẩm mượt.',
        price: 500000,
        images: [
            'https://example.com/hydratingserum1.jpg',
            'Kết cấu serum cấp nước',
            'Người mẫu sử dụng serum cấp nước'
        ],
        rating: 4.7,
    },
    {
        id: 17,
        name: 'Kem chống lão hóa',
        description: 'Kem chống lão hóa giúp làm giảm nếp nhăn và tăng độ đàn hồi cho da.',
        price: 800000,
        images: [
            'https://example.com/antiagingcream1.jpg',
            'Kết cấu kem chống lão hóa',
            'Người mẫu sử dụng kem chống lão hóa'
        ],
        rating: 4.9,
    },
    {
        id: 18,
        name: 'Gel lột mụn đầu đen',
        description: 'Gel lột mụn đầu đen giúp làm sạch lỗ chân lông.',
        price: 300000,
        images: [
            'https://example.com/blackheadgel1.jpg',
            'Kết cấu gel lột mụn',
            'Người mẫu sử dụng gel lột mụn'
        ],
        rating: 4.6,
    },
    {
        id: 19,
        name: 'Bộ sản phẩm trang điểm',
        description: 'Bộ sản phẩm trang điểm đầy đủ cho mọi phong cách.',
        price: 1500000,
        images: [
            'https://example.com/makeupkit1.jpg',
            'Kết cấu bộ sản phẩm trang điểm',
            'Người mẫu sử dụng bộ sản phẩm trang điểm'
        ],
        rating: 4.8,
    },
    {
        id: 20,
        name: 'Nước tẩy trang',
        description: 'Nước tẩy trang giúp làm sạch lớp trang điểm hiệu quả.',
        price: 250000,
        images: [
            'https://example.com/makeupremover1.jpg',
            'Kết cấu nước tẩy trang',
            'Người mẫu sử dụng nước tẩy trang'
        ],
        rating: 4.7,
    },
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