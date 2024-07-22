import BreadCrumb from "@/components/BreadCrumb";
import Footer from "@/components/Footer";
import Header2 from "@/components/Header2";
import DeliveryImage from "@/assets/delivery.webp";
import DiningOutImage from "@/assets/dining-out.avif";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Collections from "@/components/Collections";

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
            <div className="bg-light-pink my-10">
                <Footer />
            </div>
        </div>
    )
}

export default DineOut;
