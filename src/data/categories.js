import {
  RiBikeLine,
  RiHeart2Line,
  RiHomeHeartLine,
  RiMedicineBottleLine,
  RiMenLine,
  RiPingPongLine,
  RiStore2Line,
  RiWaterFlashLine,
  RiWomenLine,
} from "@remixicon/react";

export const categories = [
  {
    id: 1,
    name: "Woman’s Fashion",
    children: [
      {
        id: 11,
        name: "Coats",
        children: [
          { id: 111, name: "Zara Coat Woman" },
          { id: 112, name: "Zoya Coat Woman" },
        ],
      },
      {
        id: 12,
        name: "Smart Watch",
        children: [
          { id: 121, name: "Apple" },
          { id: 122, name: "Samsung" },
        ],
      },
    ],
    icon: RiMenLine,
  },
  {
    id: 2,
    name: "Men’s Fashion",
    children: [
      { id: 21, name: "Shirt" },
      { id: 22, name: "Hoodies" },
    ],
    icon: RiWomenLine,
  },
  {
    id: 3,
    name: "Electronics",
    icon: RiWaterFlashLine,
  },
  {
    id: 4,
    name: "Home & Lifestyle",
    icon: RiHomeHeartLine,
  },
  {
    id: 5,
    name: "Medicine",
    icon: RiMedicineBottleLine,
  },
  {
    id: 6,
    name: "Sports & Outdoor",
    icon: RiBikeLine,
  },
  {
    id: 7,
    name: "Baby’s & Toys",
    icon: RiPingPongLine,
  },
  {
    id: 8,
    name: "Groceries & Pets",
    icon: RiStore2Line,
  },
  {
    id: 9,
    name: "Health & Beauty",
    icon: RiHeart2Line,
  },
];
