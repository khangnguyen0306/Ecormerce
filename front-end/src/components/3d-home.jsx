"use client";
import { ThreeDMarquee } from "./ui/3d-background";

export function ThreeDMarqueeDemo() {
  const images = [
    "https://studiovietnam.com/wp-content/uploads/2022/10/concept-chup-anh-san-pham-04.jpg",
    "https://studiovietnam.com/wp-content/uploads/2022/10/concept-chup-anh-san-pham-04.jpg",
     "https://i5.walmartimages.com/seo/Prada-Tessuto-Gaufre-Nylon-Small-Black-Satchel-Handbag_d573a15b-bc6f-49f5-bdbd-4652b36493af.0524b9dfffd008ade310d45f738980d5.jpeg",
    "https://fragrancehouse.co.uk/wp-content/uploads/2022/08/Prada-Paradoxe-Eau-de-Parfum-Ad-6.jpg",
    "https://noithattruongsa.com/wp-content/uploads/2021/03/thiet-ke-shop-my-pham-nho-dep-17.jpg",
    "https://hthaostudio.com/wp-content/uploads/2022/10/Anh-my-pham-1.jpg",
    "https://chailolita.com/wp-content/uploads/2022/07/chai-nuoc-hoa-7.jpg",
    "https://cdn.tgdd.vn/Files/2020/12/19/1314793/10-lo-nuoc-hoa-duoc-chi-em-do-xo-nhau-rinh-ve-nam-2020-boi-huong-thom-qua-u-la-sang-chanh-202012191005113421.jpg",
    "https://www.chuphinhsanpham.com/public/responsive_filemanager/source/anh%20antopho/chup-anh-my-pham%20(3).jpg",
    "https://www.chuphinhsanpham.vn/wp-content/uploads/2019/06/chup-anh-my-pham-dep-2.jpg",
    "https://spicyfoodstudio.com/wp-content/uploads/2023/12/chup-anh-my-pham-01.jpg",
    
    "https://images.squarespace-cdn.com/content/v1/53883795e4b016c956b8d243/d0cb9a84-44b0-47ba-af91-354b53c9f6aa/La%2BRoche-Posay%2B1.jpg",
    "https://media.istockphoto.com/id/1418265792/vi/anh/%C4%91%E1%BB%93ng-h%E1%BB%93-m%E1%BB%B9-ph%E1%BA%A9m-%C4%91%C3%A0o-m%C3%A0u-be-%C4%91%E1%BB%8F-v%C3%A0-san-h%C3%B4-phong-c%C3%A1ch-m%E1%BB%B9-ph%E1%BA%A9m-phong-c%C3%A1ch-ph%E1%BA%B3ng-n%E1%BA%B1m-b%E1%BA%A3ng-m%C3%A0u-c%E1%BA%ADn.jpg?s=612x612&w=0&k=20&c=UoIEdrplo5TlAUuyCZuxoif0vIM4BzpNFi4F0eCcLJA=",
    "https://mediawinwin.vn/upload/images/sanpham/top-1-dich-vu-chup-anh-san-pham-my-pham-chuyen-nhiep-8.JPG",
    "https://studiovietnam.com/wp-content/uploads/2022/10/concept-chup-anh-san-pham-04.jpg",
    "https://cdn.vuahanghieu.com/unsafe/0x0/left/top/smart/filters:quality(90)/https://admin.vuahanghieu.com/upload/news/content/2021/05/nuoc-hoa-jean-paul-gaultier-scandal-by-night-edp-intense-80ml-jpg-1622449553-31052021152553.jpg",
    
    "https://img.pikbest.com/photo/20250104/luxurious-purple-perfume-bottle-with-pearls-and-flowers_11338632.jpg!w700wp",
    "https://pixnio.com/free-images/2021/09/11/2021-09-11-09-31-51-576x959.jpg",
    "https://cdn.tgdd.vn/Files/2020/12/19/1314793/10-lo-nuoc-hoa-duoc-chi-em-do-xo-nhau-rinh-ve-nam-2020-boi-huong-thom-qua-u-la-sang-chanh-202201171620199732.jpeg",

    "https://file.hstatic.net/1000025647/file/nuoc-hoa-tom-ford-oud-wood_41df2305bc77447fb094962eee0eea4f_1024x1024.jpg",
    "https://spicyfoodstudio.com/wp-content/uploads/2024/01/chup-anh-nuoc-hoa-07.jpeg",
    "https://lipstick.vn/wp-content/uploads/2020/10/son-chanel-67-steady.jpg",
    "https://file.hstatic.net/200000073977/article/son-chanel-ft_09a47536ed11406b87e78382b9a267b8.jpg",
    "https://bizweb.dktcdn.net/thumb/1024x1024/100/410/563/products/04903237-6bbd-413c-a81e-ee8b4c285d24.jpg?v=1653895866233",
    "https://cf.shopee.vn/file/e5d79b678432a2c43745740f27d5a283",
    "https://cdn.vuahanghieu.com/unsafe/0x0/left/top/smart/filters:quality(90)/https://admin.vuahanghieu.com/upload/news/content/2020/09/son-chanel-rouge-allure-114-epitome-velvet-extreme-do-mam-xoi-jpg-1600933462-24092020144422.jpg",
    "https://bizweb.dktcdn.net/100/375/006/files/z5974659241463-032dd6fe0fa36299a92e415a2d3761c2.jpg?v=1730100680567",
    "https://xomthom.vn/wp-content/uploads/2023/11/Gucci-Bloom-EDP.jpg",
    "https://i0.wp.com/tuixachhanghieu.com/wp-content/uploads/2023/08/1-19.jpg?resize=799%2C603&ssl=1",
    "https://img.vuahanghieu.com/unsafe/1200x0/left/top/smart/filters:quality(90)/https://admin.vuahanghieu.com/upload/news/2020/06/gia-son-chanel-chinh-hang-moi-nhat-va-top-20-mau-son-chanel-sang-chanh-20062020162036.jpg",
    "https://cdn.vuahanghieu.com/unsafe/0x0/left/top/smart/filters:quality(90)/https://admin.vuahanghieu.com/upload/news/content/2024/05/set-son-chanel-rouge-allure-velvet-2-mau-5-jpg-1715053319-07052024104159.jpg",

  ];
  return (
    <div
      className="mx-auto my-10 max-w-full rounded-3xl bg-gray-950/5 p-2 ring-1 ring-neutral-700/10 dark:bg-neutral-800">
      <ThreeDMarquee images={images} />
    </div>
  );
}
