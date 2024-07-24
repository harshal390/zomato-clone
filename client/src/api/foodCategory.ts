import thali from "@/assets/FoodCategory/1.avif";
import pizza from "@/assets/FoodCategory/2.avif";
import biryani from "@/assets/FoodCategory/3.avif";
import burger from "@/assets/FoodCategory/4.avif";
import sandwich from "@/assets/FoodCategory/5.avif";
import cake from "@/assets/FoodCategory/6.avif";
import rolls from "@/assets/FoodCategory/7.avif";
import northIndian from "@/assets/FoodCategory/8.avif";
import chicken from "@/assets/FoodCategory/9.avif";
import paratha from "@/assets/FoodCategory/10.avif";
import dosa from "@/assets/FoodCategory/11.avif";
import paneer from "@/assets/FoodCategory/12.avif";

interface FOODCATEGORY {
  id: number;
  img: string;
  name: string;
}

const foodCategory: FOODCATEGORY[] = [
  {
    id: 1,
    img: thali,
    name: "Thali",
  },
  {
    id: 2,
    img: pizza,
    name: "Pizza",
  },
  {
    id: 3,
    img: biryani,
    name: "Biryani",
  },
  {
    id: 4,
    img: burger,
    name: "Burger",
  },
  {
    id: 5,
    img: sandwich,
    name: "Sandwich",
  },
  {
    id: 6,
    img: cake,
    name: "Cake",
  },
  {
    id: 7,
    img: rolls,
    name: "Rolls",
  },
  {
    id: 8,
    img: northIndian,
    name: "North Indian",
  },
  {
    id: 9,
    img: chicken,
    name: "Chicken",
  },
  {
    id: 10,
    img: paratha,
    name: "Paratha",
  },
  {
    id: 11,
    img: dosa,
    name: "Dosa",
  },
  {
    id: 12,
    img: paneer,
    name: "Paneer",
  },
];

export default foodCategory;
