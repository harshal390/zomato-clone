import img1 from "@/assets/Restaurants/1.avif";
import img2 from "@/assets/Restaurants/2.avif";
import img3 from "@/assets/Restaurants/3.avif";
import img4 from "@/assets/Restaurants/4.avif";
import img5 from "@/assets/Restaurants/5.avif";
import img6 from "@/assets/Restaurants/6.avif";
import img7 from "@/assets/Restaurants/7.avif";
import img8 from "@/assets/Restaurants/8.avif";
import img9 from "@/assets/Restaurants/9.avif";
import img10 from "@/assets/Restaurants/10.avif";
import img11 from "@/assets/Restaurants/11.avif";
import img12 from "@/assets/Restaurants/12.avif";
import img13 from "@/assets/Restaurants/13.avif";
import img14 from "@/assets/Restaurants/14.avif";
import img15 from "@/assets/Restaurants/15.avif";
import img16 from "@/assets/Restaurants/16.avif";
import img17 from "@/assets/Restaurants/17.avif";
import img18 from "@/assets/Restaurants/18.avif";
import img19 from "@/assets/Restaurants/19.avif";
import img20 from "@/assets/Restaurants/20.avif";
import img21 from "@/assets/Restaurants/21.avif";
import img22 from "@/assets/Restaurants/22.avif";
import img23 from "@/assets/Restaurants/23.avif";
import img24 from "@/assets/Restaurants/24.avif";
import img25 from "@/assets/Restaurants/25.avif";
import img26 from "@/assets/Restaurants/26.avif";
import img27 from "@/assets/Restaurants/27.avif";
import img28 from "@/assets/Restaurants/28.avif";
import img29 from "@/assets/Restaurants/29.avif";
import img30 from "@/assets/Restaurants/30.avif";
import img31 from "@/assets/Restaurants/31.avif";
import img32 from "@/assets/Restaurants/32.avif";
import img33 from "@/assets/Restaurants/33.avif";
import img34 from "@/assets/Restaurants/34.avif";
import img35 from "@/assets/Restaurants/35.avif";
import img36 from "@/assets/Restaurants/36.avif";

interface RESTAURANTS {
  id: number;
  title: string;
  img: string;
  cuisines: string[];
  diningRating: number;
  averageCost: number;
  address: string;
  away: number;
  timing: {
    day: number[];
    opening_hours: string[];
  };
  flatPercentage: number;
}

const Restaurants: RESTAURANTS[] = [
  {
    id: 1,
    title: "Chili's Grill & Bar",
    img: img1,
    cuisines: ["Pizza", "Burger"],
    diningRating: 4.4,
    averageCost: 200,
    address: "Vastrapur, Ahmedabad",
    away: 3.8,
    timing: {
      day: [1, 2, 3, 4, 5, 6, 7], //sunday 1 to saturday 7
      opening_hours: ["11am – 12midnight"],
    },
    flatPercentage: 0,
  },
  {
    id: 2,
    title: "Nini's Kitchen",
    img: img2,
    cuisines: [
      "North Indian",
      "Italian",
      "Continental",
      "Shawarma",
      "Pasta",
      "Pizza",
      "Desserts",
      "Beverages",
    ],
    diningRating: 4.5,
    averageCost: 1400,
    address: "C G Road, Ahmedabad",
    away: 2.3,
    timing: {
      day: [1, 2, 3, 4, 5, 6, 7], //sunday 1 to saturday 7
      opening_hours: ["12noon – 11pm"],
    },
    flatPercentage: 0,
  },
  {
    id: 3,
    title: "The Square - Hotel Novotel",
    img: img3,
    cuisines: ["North Indian", "Continental", "Asian"],
    diningRating: 4,
    averageCost: 3000,
    address: "Novotel,Staellite, Ahmedabad",
    away: 3.8,
    timing: {
      day: [1, 2, 3, 4, 5, 6, 7], //sunday 1 to saturday 7
      opening_hours: ["7am – 11pm"],
    },
    flatPercentage: 25,
  },
  {
    id: 4,
    title: "Harmony Resto Cafe",
    img: img4,
    cuisines: [
      "North Indian",
      "Kathiyawadi",
      "Burger",
      "Chinese",
      "Panini",
      "Sandwich",
      "Gujarati",
      "Coffee",
    ],
    diningRating: 4.4,
    averageCost: 200,
    address: "Navrangpura, Ahmedabad",
    away: 4.1,
    timing: {
      day: [1, 2, 3, 4, 5, 6, 7], //sunday 1 to saturday 7
      opening_hours: ["11am – 12midnight"],
    },
    flatPercentage: 15,
  },
  {
    id: 5,
    title: "Tres Amigos",
    img: img5,
    cuisines: ["Mexican", "Continental", "Fast Food"],
    diningRating: 4.3,
    averageCost: 1200,
    address: "Thaltej, Ahmedabad",
    away: 4,
    timing: {
      day: [1, 2, 3, 4, 5, 6, 7], //sunday 1 to saturday 7
      opening_hours: ["11:15am – 3pm", "7pm - 11pm"],
    },
    flatPercentage: 0,
  },
  {
    id: 6,
    title: "Sam's Pizza",
    img: img6,
    cuisines: ["Pizza", "Fast Food"],
    diningRating: 4.0,
    averageCost: 200,
    address: "Navrangpura, Ahmedabad",
    away: 3.8,
    timing: {
      day: [1, 2, 3, 4, 5, 6, 7], //sunday 1 to saturday 7
      opening_hours: ["11am – 11pm"],
    },
    flatPercentage: 10,
  },
  {
    id: 7,
    title: "From The North",
    img: img7,
    cuisines: ["Asian", "North Indian", "Desserts", "Beverages"],
    diningRating: 4.4,
    averageCost: 1300,
    address: "C G Road, Ahmedabad",
    away: 4,
    timing: {
      day: [1, 2, 3, 4, 5, 6, 7], //sunday 1 to saturday 7
      opening_hours: ["11am – 3pm", "7pm - 11pm"],
    },
    flatPercentage: 0,
  },
  {
    id: 8,
    title: "Unlocked",
    img: img8,
    cuisines: ["Pizza", "Burger"],
    diningRating: 4.4,
    averageCost: 200,
    address: "Vastrapur, Ahmedabad",
    away: 3.8,
    timing: {
      day: [1, 2, 3, 4, 5, 6, 7], //sunday 1 to saturday 7
      opening_hours: ["11am – 12midnight"],
    },
    flatPercentage: 15,
  },
  {
    id: 9,
    title: "Angithi A Pure Veg Restaurant By Mirch Masala",
    img: img9,
    cuisines: ["Pizza", "Burger"],
    diningRating: 4.4,
    averageCost: 200,
    address: "Vastrapur, Ahmedabad",
    away: 3.8,
    timing: {
      day: [1, 2, 3, 4, 5, 6, 7], //sunday 1 to saturday 7
      opening_hours: ["11am – 12midnight"],
    },
    flatPercentage: 15,
  },
  {
    id: 10,
    title: "Niro By Nini's",
    img: img10,
    cuisines: ["Pizza", "Burger"],
    diningRating: 4.4,
    averageCost: 200,
    address: "Vastrapur, Ahmedabad",
    away: 3.8,
    timing: {
      day: [1, 2, 3, 4, 5, 6, 7], //sunday 1 to saturday 7
      opening_hours: ["11am – 12midnight"],
    },
    flatPercentage: 0,
  },
  {
    id: 11,
    title: "Kaffa Coffee Roasters",
    img: img11,
    cuisines: ["Pizza", "Burger"],
    diningRating: 4.4,
    averageCost: 200,
    address: "Vastrapur, Ahmedabad",
    away: 3.8,
    timing: {
      day: [1, 2, 3, 4, 5, 6, 7], //sunday 1 to saturday 7
      opening_hours: ["11am – 12midnight"],
    },
    flatPercentage: 0,
  },
  {
    id: 12,
    title: "1980 - A Royal Culinary Experience",
    img: img12,
    cuisines: ["Pizza", "Burger"],
    diningRating: 4.4,
    averageCost: 200,
    address: "Vastrapur, Ahmedabad",
    away: 3.8,
    timing: {
      day: [1, 2, 3, 4, 5, 6, 7], //sunday 1 to saturday 7
      opening_hours: ["11am – 12midnight"],
    },
    flatPercentage: 10,
  },
  {
    id: 13,
    title: "Pol 21 - Hotel Binori",
    img: img13,
    cuisines: ["Pizza", "Burger"],
    diningRating: 4.4,
    averageCost: 200,
    address: "Vastrapur, Ahmedabad",
    away: 3.8,
    timing: {
      day: [1, 2, 3, 4, 5, 6, 7], //sunday 1 to saturday 7
      opening_hours: ["11am – 12midnight"],
    },
    flatPercentage: 25,
  },
  {
    id: 14,
    title: "Topspin",
    img: img14,
    cuisines: ["Pizza", "Burger"],
    diningRating: 4.4,
    averageCost: 200,
    address: "Vastrapur, Ahmedabad",
    away: 3.8,
    timing: {
      day: [1, 2, 3, 4, 5, 6, 7], //sunday 1 to saturday 7
      opening_hours: ["11am – 12midnight"],
    },
    flatPercentage: 15,
  },
  {
    id: 15,
    title: "Table Tales",
    img: img15,
    cuisines: ["Pizza", "Burger"],
    diningRating: 4.4,
    averageCost: 200,
    address: "Vastrapur, Ahmedabad",
    away: 3.8,
    timing: {
      day: [1, 2, 3, 4, 5, 6, 7], //sunday 1 to saturday 7
      opening_hours: ["11am – 12midnight"],
    },
    flatPercentage: 0,
  },
  {
    id: 16,
    title: "Ishaara",
    img: img16,
    cuisines: ["Pizza", "Burger"],
    diningRating: 4.4,
    averageCost: 200,
    address: "Vastrapur, Ahmedabad",
    away: 3.8,
    timing: {
      day: [1, 2, 3, 4, 5, 6, 7], //sunday 1 to saturday 7
      opening_hours: ["11am – 12midnight"],
    },
    flatPercentage: 10,
  },
  {
    id: 17,
    title: "Mrs Mage - Hyatt Ahmedabad",
    img: img17,
    cuisines: ["Pizza", "Burger"],
    diningRating: 4.4,
    averageCost: 200,
    address: "Vastrapur, Ahmedabad",
    away: 3.8,
    timing: {
      day: [1, 2, 3, 4, 5, 6, 7], //sunday 1 to saturday 7
      opening_hours: ["11am – 12midnight"],
    },
    flatPercentage: 15,
  },
  {
    id: 18,
    title: "The Messy Door Cafe",
    img: img18,
    cuisines: ["Pizza", "Burger"],
    diningRating: 4.4,
    averageCost: 200,
    address: "Vastrapur, Ahmedabad",
    away: 3.8,
    timing: {
      day: [1, 2, 3, 4, 5, 6, 7], //sunday 1 to saturday 7
      opening_hours: ["11am – 12midnight"],
    },
    flatPercentage: 0,
  },
  {
    id: 19,
    title: "R Kitchen - Renaissance Hotel",
    img: img19,
    cuisines: ["Pizza", "Burger"],
    diningRating: 4.4,
    averageCost: 200,
    address: "Vastrapur, Ahmedabad",
    away: 3.8,
    timing: {
      day: [1, 2, 3, 4, 5, 6, 7], //sunday 1 to saturday 7
      opening_hours: ["11am – 12midnight"],
    },
    flatPercentage: 30,
  },
  {
    id: 20,
    title: "The Fountain",
    img: img20,
    cuisines: ["Pizza", "Burger"],
    diningRating: 4.4,
    averageCost: 200,
    address: "Vastrapur, Ahmedabad",
    away: 3.8,
    timing: {
      day: [1, 2, 3, 4, 5, 6, 7], //sunday 1 to saturday 7
      opening_hours: ["11am – 12midnight"],
    },
    flatPercentage: 0,
  },
  {
    id: 21,
    title: "Bellasen Bistro",
    img: img21,
    cuisines: ["Pizza", "Burger"],
    diningRating: 4.4,
    averageCost: 200,
    address: "Vastrapur, Ahmedabad",
    away: 3.8,
    timing: {
      day: [1, 2, 3, 4, 5, 6, 7], //sunday 1 to saturday 7
      opening_hours: ["11am – 12midnight"],
    },
    flatPercentage: 10,
  },
  {
    id: 22,
    title: "Rustic Spices",
    img: img22,
    cuisines: ["Pizza", "Burger"],
    diningRating: 4.4,
    averageCost: 200,
    address: "Vastrapur, Ahmedabad",
    away: 3.8,
    timing: {
      day: [1, 2, 3, 4, 5, 6, 7], //sunday 1 to saturday 7
      opening_hours: ["11am – 12midnight"],
    },
    flatPercentage: 15,
  },
  {
    id: 23,
    title: "Scoby's",
    img: img23,
    cuisines: ["Pizza", "Burger"],
    diningRating: 4.4,
    averageCost: 200,
    address: "Vastrapur, Ahmedabad",
    away: 3.8,
    timing: {
      day: [1, 2, 3, 4, 5, 6, 7], //sunday 1 to saturday 7
      opening_hours: ["11am – 12midnight"],
    },
    flatPercentage: 10,
  },
  {
    id: 24,
    title: "Sazzy Sizzlers",
    img: img24,
    cuisines: ["Pizza", "Burger"],
    diningRating: 4.4,
    averageCost: 200,
    address: "Vastrapur, Ahmedabad",
    away: 3.8,
    timing: {
      day: [1, 2, 3, 4, 5, 6, 7], //sunday 1 to saturday 7
      opening_hours: ["11am – 12midnight"],
    },
    flatPercentage: 10,
  },
  {
    id: 25,
    title: "Welcomcafe Ikkat",
    img: img25,
    cuisines: ["Pizza", "Burger"],
    diningRating: 4.4,
    averageCost: 200,
    address: "Vastrapur, Ahmedabad",
    away: 3.8,
    timing: {
      day: [1, 2, 3, 4, 5, 6, 7], //sunday 1 to saturday 7
      opening_hours: ["11am – 12midnight"],
    },
    flatPercentage: 10,
  },
  {
    id: 26,
    title: "The Barnyard Co",
    img: img26,
    cuisines: ["Pizza", "Burger"],
    diningRating: 4.4,
    averageCost: 200,
    address: "Vastrapur, Ahmedabad",
    away: 3.8,
    timing: {
      day: [1, 2, 3, 4, 5, 6, 7], //sunday 1 to saturday 7
      opening_hours: ["11am – 12midnight"],
    },
    flatPercentage: 10,
  },
  {
    id: 27,
    title: "Food Stories By The Westend",
    img: img27,
    cuisines: ["Pizza", "Burger"],
    diningRating: 4.4,
    averageCost: 200,
    address: "Vastrapur, Ahmedabad",
    away: 3.8,
    timing: {
      day: [1, 2, 3, 4, 5, 6, 7], //sunday 1 to saturday 7
      opening_hours: ["11am – 12midnight"],
    },
    flatPercentage: 10,
  },
  {
    id: 28,
    title: "Tim Tim Brew House",
    img: img28,
    cuisines: ["Pizza", "Burger"],
    diningRating: 4.4,
    averageCost: 200,
    address: "Vastrapur, Ahmedabad",
    away: 3.8,
    timing: {
      day: [1, 2, 3, 4, 5, 6, 7], //sunday 1 to saturday 7
      opening_hours: ["11am – 12midnight"],
    },
    flatPercentage: 10,
  },
  {
    id: 29,
    title: "Pizza Don",
    img: img29,
    cuisines: ["Pizza", "Burger"],
    diningRating: 4.4,
    averageCost: 200,
    address: "Vastrapur, Ahmedabad",
    away: 3.8,
    timing: {
      day: [1, 2, 3, 4, 5, 6, 7], //sunday 1 to saturday 7
      opening_hours: ["11am – 12midnight"],
    },
    flatPercentage: 10,
  },
  {
    id: 30,
    title: "Amritsar Haveli",
    img: img30,
    cuisines: ["Pizza", "Burger"],
    diningRating: 4.4,
    averageCost: 200,
    address: "Vastrapur, Ahmedabad",
    away: 3.8,
    timing: {
      day: [1, 2, 3, 4, 5, 6, 7], //sunday 1 to saturday 7
      opening_hours: ["11am – 12midnight"],
    },
    flatPercentage: 10,
  },
  {
    id: 31,
    title: "Roastery Cultur - The Coffee Company",
    img: img31,
    cuisines: ["Pizza", "Burger"],
    diningRating: 4.4,
    averageCost: 200,
    address: "Vastrapur, Ahmedabad",
    away: 3.8,
    timing: {
      day: [1, 2, 3, 4, 5, 6, 7], //sunday 1 to saturday 7
      opening_hours: ["11am – 12midnight"],
    },
    flatPercentage: 0,
  },
  {
    id: 32,
    title: "Punjab Grill",
    img: img32,
    cuisines: ["Pizza", "Burger"],
    diningRating: 4.4,
    averageCost: 200,
    address: "Vastrapur, Ahmedabad",
    away: 3.8,
    timing: {
      day: [1, 2, 3, 4, 5, 6, 7], //sunday 1 to saturday 7
      opening_hours: ["11am – 12midnight"],
    },
    flatPercentage: 20,
  },
  {
    id: 33,
    title: "Pizzaiiolo - The Wood Fired Pizza",
    img: img33,
    cuisines: ["Pizza", "Burger"],
    diningRating: 4.4,
    averageCost: 200,
    address: "Vastrapur, Ahmedabad",
    away: 3.8,
    timing: {
      day: [1, 2, 3, 4, 5, 6, 7], //sunday 1 to saturday 7
      opening_hours: ["11am – 12midnight"],
    },
    flatPercentage: 15,
  },
  {
    id: 34,
    title: "Citrus Junction- The Leela",
    img: img34,
    cuisines: ["Pizza", "Burger"],
    diningRating: 4.4,
    averageCost: 200,
    address: "Vastrapur, Ahmedabad",
    away: 3.8,
    timing: {
      day: [1, 2, 3, 4, 5, 6, 7], //sunday 1 to saturday 7
      opening_hours: ["11am – 12midnight"],
    },
    flatPercentage: 10,
  },
  {
    id: 35,
    title: "Dakshin Bhojnam",
    img: img35,
    cuisines: ["Pizza", "Burger"],
    diningRating: 4.4,
    averageCost: 200,
    address: "Vastrapur, Ahmedabad",
    away: 3.8,
    timing: {
      day: [1, 2, 3, 4, 5, 6, 7], //sunday 1 to saturday 7
      opening_hours: ["11am – 12midnight"],
    },
    flatPercentage: 0,
  },
  {
    id: 36,
    title: "Mahamahal",
    img: img36,
    cuisines: ["Pizza", "Burger"],
    diningRating: 4.4,
    averageCost: 200,
    address: "Vastrapur, Ahmedabad",
    away: 3.8,
    timing: {
      day: [1, 2, 3, 4, 5, 6, 7], //sunday 1 to saturday 7
      opening_hours: ["11am – 12midnight"],
    },
    flatPercentage: 0,
  },
];

export default Restaurants;
