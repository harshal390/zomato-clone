import { trimText } from '@/utils';
import { FaStar,FaPercentage } from 'react-icons/fa';

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

const RestaurantCard = (restaurant: RESTAURANTS) => {
    const { title, img, cuisines, averageCost, address, away, flatPercentage } = { ...restaurant };
    return (
        <div className="cursor-pointer p-3.5 rounded-xl hover:shadow-xl duration-300 h-[372px] w-[350px] flex flex-col gap-1.5" draggable="true">
            <div className='h-2/3 w-full rounded-xl overflow-clip relative' >
                <img src={img} alt={title} className="object-cover w-full h-full" />
                {flatPercentage > 0 && <div className='flat-percentage-off text-md w-1/2 text-white absolute flex gap-1 bottom-4 left-0 px-5 py-1'>
                    <span className='flex items-center gap-1'><FaPercentage />Flat</span><span className='font-semibold'>{flatPercentage}% Off</span>
                </div>}
            </div>
            <div className="flex items-center gap-5 justify-between">
                <div className="font-semibold text-xl text-nowrap">{trimText(title, 20)}</div>
                <div className="flex items-center gap-1 bg-green-600 rounded-lg text-white fill-white text-xs py-1 px-2">{restaurant.diningRating}<FaStar /></div>
            </div>
            <div className="flex items-center gap-5 justify-between text-sm text-gray-600 flex-nowrap">
                <div className="text-nowrap">{trimText(cuisines.join(","), 30)}</div>
                <div className="text-nowrap">&#8377;{averageCost} for both </div>
            </div>
            <div className="text-sm text-gray-400">{address}</div>
            <div className="flex items-center gap-5 justify-between text-sm">
                <div className="text-red-500">Opens at 11am</div>
                <div>{away} km</div>
            </div>
        </div>
    )
}

export default RestaurantCard;
