interface RESTAURANTS {
  id: number;
  gallery: {
    food: string[];
    ambience: string[];
  };
  title: string;
  address: string;
  city: string;
  cuisines: string[];
  timing: {
    day: string[];
    opening_hours: string[];
  };
  menu: string[];
  dishes: {
    title: string;
    cost: number;
    image: string;
    category: string;
  };
  placeKnownFor: string[];
  averageCost: number;
  moreInfo: string[];
  rating: {
    dining: {
      rate: number;
      total: number;
    };
    delivery: {
      rate: number;
      total: number;
    };
  };
  similarRestaurants: {
    title: string;
    img: string;
    rating: {
      dining: {
        rate: number;
        total: number;
      };
      delivery: {
        rate: number;
        total: number;
      };
    };
    address: string;
  }[];
  flatPercentage: number;
}

const Restaurants: RESTAURANTS[] = [];

export default Restaurants;
