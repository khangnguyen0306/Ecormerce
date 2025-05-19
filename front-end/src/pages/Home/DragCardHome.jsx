import React from "react";
import { DraggableCardBody, DraggableCardContainer } from "../../components/DraggableCard";


export function DraggableCardHome() {
  const items = [
    {
      title: "Hermes ",
      image:
        "https://cdn.coin68.com/uploads/2023/02/hermes-birkin.jpg",
      className: "absolute top-10 left-[20%] rotate-[-5deg]",
    },
    {
      title: "Versace",
      image:
        "https://kinperfume.com/wp-content/uploads/2019/05/Versace-Yellow-Diamond-EDT-90ml-2.jpg",
      className: "absolute top-40 left-[25%] rotate-[-7deg]",
    },
    {
      title: "CHANEL",
      image:
        "https://cdn.tgdd.vn/Files/2021/05/13/1351299/thuong-hieu-chanel-ba-hoang-trong-lang-my-pham-high-end-202105131949428872.jpg",
      className: "absolute top-5 left-[40%] rotate-[8deg]",
    },
    {
      title: "PRADA",
      image:
        "https://cdn.vnda.com.br/1200x/dolcevitaperfumes/2023/02/28/14_2_2_237_3614273760652203.jpg?v=1677604176",
      className: "absolute top-32 left-[55%] rotate-[10deg]",
    },
    {
      title: "Louis Vuitton",
      image:
        "https://kyluc.vn/Userfiles/Upload/images/Louis%20Vuitton%202.jpg",
      className: "absolute top-20 right-[35%] rotate-[2deg]",
    },
    {
      title: "Dior",
      image:
        "https://dwatchluxury.com/wp-content/uploads/2023/09/Tui-Dior-Lady-Hoa-Tiet-Tho-Cam-doc-dao.jpg",
      className: "absolute top-24 left-[45%] rotate-[-7deg]",
    },
    {
      title: "GUCCI",
      image:
        "https://www.ohmycream.vn/datafiles/userfiles/images/products/product_631_07360_900x900.jpg",
      className: "absolute top-8 left-[30%] rotate-[4deg]",
    },
  ];
  return (
    <DraggableCardContainer
      className="relative flex min-h-screen w-full items-center justify-center overflow-clip">
      <p
        className="absolute top-1/2 mx-auto max-w-md -translate-y-3/4 text-center text-2xl font-cormorant font-black text-neutral-400 md:text-4xl dark:text-neutral-800">
        Chỉ cần chọn món bạn thích An sẽ lo tất cả cho bạn ^^
      </p>
      {items.map((item) => (
        <DraggableCardBody className={item.className}>
          <img
            src={item.image}
            alt={item.title}
            className="pointer-events-none relative z-10 h-80 w-80 object-cover" />
          <h3
            className="mt-4 text-center text-2xl font-bold text-neutral-700 dark:text-neutral-300">
            {item.title}
          </h3>
        </DraggableCardBody>
      ))}
    </DraggableCardContainer>
  );
}
