import BreadCrumb from "@/components/BreadCrumb";
import Footer from "@/components/Footer";
import Header2 from "@/components/Header2";
import DeliveryImage from "@/assets/delivery.webp";
import DiningOutImage from "@/assets/dining-out.avif";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Collections from "@/components/Collections";
import { IoFilterOutline } from "react-icons/io5";
import getUpTo50Off from "@/assets/getUpTo50_Off.avif"
import Restaurants from "@/api/restaurant";
import RestaurantCard from "@/components/RestaurantCard";
import ExploreOptionNearMe from "@/components/ExploreOptionNearMe";

const DineOut = () => {
    const navigate = useNavigate();
    const pathname = window.location.pathname;
    const activeTab = pathname.split("/").reverse()[0];
    const [tab, setTab] = useState(activeTab === "delivery" ? "delivery" : "dine-out");
    const selectTab = (tab: string) => {
        console.log(tab);
        navigate(`/ahmedabad/${tab}`);
        setTab(tab);
    };

    return (
        <div className="flex flex-col">
            <Header2></Header2>
            <div className="max-w flex flex-col gap-5">
                <BreadCrumb />
                <div className="flex w-full p-3 border-b border-gray-700 gap-5 text-center text-lg text-gray-700">
                    <button className={`flex items-center gap-5 cursor-pointer ${tab === "dine-out" && "text-red-600"}`} onClick={() => { selectTab("dine-out") }}>
                        <div className={`grayscale ${tab === "dine-out" && "grayscale-0"} w-[60px] h-[60px] flex items-center justify-center bg-pink-100 rounded-full`}>
                            <img src={DiningOutImage} alt="" className="h-[30px] w-[30px]" />
                        </div>
                        <span>Dining Out</span>
                    </button>
                    <button className={`flex items-center gap-5 cursor-pointer ${tab === "delivery" && "text-red-600"}`} onClick={() => { selectTab("delivery") }}>
                        <div className={`grayscale ${tab === "delivery" && "grayscale-0"} w-[60px] h-[60px] flex items-center justify-center bg-blue-100 rounded-full`}>
                            <img src={DeliveryImage} alt="" className="h-[30px] w-[30px]" />
                        </div>
                        <span>Delivery</span>
                    </button>
                </div>
            </div>
            <div className="flex items-center bg-light-pink">
                <div className="max-w my-10">
                    <Collections />
                </div>
            </div>
            <div className="max-w flex flex-col gap-5 py-5">
                <div className="flex items-center gap-5 text-gray-500">
                    <button className="flex items-center gap-2 p-2 border rounded-lg"><IoFilterOutline />Filters</button>
                    <button className="flex items-center gap-2 p-2 border rounded-lg">Offers</button>
                    <button className="flex items-center gap-2 p-2 border rounded-lg">Rating: 4.0+</button>
                    <button className="flex items-center gap-2 p-2 border rounded-lg">Pet Friendly</button>
                    <button className="flex items-center gap-2 p-2 border rounded-lg">Outdoor Seating</button>
                    <button className="flex items-center gap-2 p-2 border rounded-lg">Open Now</button>
                </div>
                <div>
                    <img src={getUpTo50Off} alt={getUpTo50Off} className="w-[1100px] h-[252px] cursor-pointer rounded-lg" />
                </div>
                <div className="flex flex-col gap-5">
                    <h1 className="heading">Trending dining out restaurants in Ahmedabad.</h1>

                    <div className="grid grid-cols-3 gap-5 justify-between">
                        {
                            Restaurants.map((restaurant) => {
                                return <RestaurantCard key={restaurant.id} {...restaurant} />
                            })
                        }
                    </div>
                </div>
                <ExploreOptionNearMe />
                
            </div>
            <div className="bg-light-pink my-10">
                <Footer />
            </div>
        </div>
    )
}

export default DineOut;
