import img1 from "@/assets/TopBrands/1.avif";
import img2 from "@/assets/TopBrands/2.avif";
import img3 from "@/assets/TopBrands/3.avif";
import img4 from "@/assets/TopBrands/4.avif";
import img5 from "@/assets/TopBrands/5.avif";
import img6 from "@/assets/TopBrands/6.avif";
import img7 from "@/assets/TopBrands/7.avif";
import img8 from "@/assets/TopBrands/8.avif";
import img9 from "@/assets/TopBrands/9.avif";
import img10 from "@/assets/TopBrands/10.avif";

interface TOPBRAND {
  id: number;
  img: string;
  name: string;
  time: number;
}

const topBrandsApi: TOPBRAND[] = [
  {
    id: 1,
    img: img1,
    name: "McDonald's",
    time: 20,
  },
  {
    id: 2,
    img: img2,
    name: "La Pino'z Pizza",
    time: 20,
  },
  {
    id: 3,
    img: img3,
    name: "Gwalia Sweets & Fast Food",
    time: 20,
  },
  {
    id: 4,
    img: img4,
    name: "Subway",
    time: 20,
  },
  {
    id: 5,
    img: img5,
    name: "Honest",
    time: 20,
  },
  {
    id: 6,
    img: img6,
    name: "Shakti - The Sandwich Shop",
    time: 20,
  },
  {
    id: 7,
    img: img7,
    name: "Burger King",
    time: 20,
  },
  {
    id: 8,
    img: img8,
    name: "1944 -The HOCCO Kitchen",
    time: 20,
  },
  {
    id: 9,
    img: img9,
    name: "La Milano Pizzeria",
    time: 20,
  },
  {
    id: 10,
    img: img10,
    name: "Jay Bhavani Vadapav",
    time: 20,
  },
];

export default topBrandsApi;
