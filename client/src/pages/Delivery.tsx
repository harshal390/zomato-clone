import BreadCrumb from "@/components/BreadCrumb";
import Footer from "@/components/Footer";
import Header2 from "@/components/Header2";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DeliveryImage from "@/assets/delivery.webp";
import DiningOutImage from "@/assets/dining-out.avif";
import { IoFilterOutline } from "react-icons/io5";
import EatWhatYouMakeHappy from "@/components/EatWhatYouMakeHappy";
import TopBrandForYou from "@/components/TopBrandForYou";
import Restaurants from "@/api/restaurant";
import RestaurantCard from "@/components/RestaurantCard";
import useScrollToTop from "@/hooks/useScrollToTop";
import { IoIosArrowUp } from "react-icons/io";
import ExploreOptionNearMe from "@/components/ExploreOptionNearMe";

const Delivery = () => {
    const navigate = useNavigate();
    const pathname = window.location.pathname;
    const activeTab = pathname.split("/").reverse()[0];
    const [tab, setTab] = useState(activeTab === "delivery" ? "delivery" : "dine-out");
    const { showButton, goToTop } = useScrollToTop();


    const selectTab = (tab: string) => {
        navigate(`/ahmedabad/${tab}`);
        setTab(tab);
    };
    return (
        <div className="flex flex-col gap-5 relative">
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
                <div className="max-w flex flex-col gap-5 py-5">
                    <div className="flex items-center gap-5 text-gray-500">
                        <button className="flex items-center gap-2 p-2 border rounded-lg"><IoFilterOutline />Filters</button>
                        <button className="flex items-center gap-2 p-2 border rounded-lg">Pure Veg</button>
                        <button className="flex items-center gap-2 p-2 border rounded-lg">Rating: 4.0+</button>
                        <button className="flex items-center gap-2 p-2 border rounded-lg">Cuisines</button>
                    </div>
                </div>
            </div>
            <div className="flex items-center bg-light-pink h-full">
                <div className="max-w my-10">
                    <EatWhatYouMakeHappy />
                </div>
            </div>
            <TopBrandForYou />
            <div className="max-w flex flex-col gap-5">
                <div className="flex flex-col gap-5">
                    <h1 className="heading">Food Delivery Restaurants in Ahmedabad</h1>
                    <div className="grid grid-cols-3 gap-5 justify-between">
                        {
                            Restaurants.map((restaurant) => {
                                return <RestaurantCard key={restaurant.id} {...restaurant} />
                            })
                        }
                    </div>
                </div>
            </div>
            <ExploreOptionNearMe />
            <div className="bg-light-pink my-10">
                <Footer />
            </div>

            {showButton && <button className="fixed right-5 bottom-5 text-white flex items-center p-5 rounded-full text-3xl bg-red" onClick={() => { goToTop() }}><IoIosArrowUp /></button>}
        </div>
    )
}

export default Delivery;