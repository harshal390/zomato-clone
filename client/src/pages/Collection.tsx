import BreadCrumb from "@/components/BreadCrumb";
import ExploreOptionNearMe from "@/components/ExploreOptionNearMe";
import Footer from "@/components/Footer";
import HandPickedCollection from "@/components/HandPickedCollection";
import Header2 from "@/components/Header2";
import SavedCollection from "@/components/SavedCollection";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Collection = () => {
    const navigate = useNavigate();
    const pathname = window.location.pathname;
    const activeTab = pathname.split("/").reverse()[0];
    const [tab, setTab] = useState(activeTab === "bookmarked" ? "bookmarked" : "featured");
    const selectTab = (tab: string) => {
        navigate(`/ahmedabad/collections/${tab}`);
        setTab(tab);
    };
    return (
        <div className="flex flex-col">
            <Header2></Header2>
            <div className="max-w flex flex-col gap-5">
                <BreadCrumb />
                <div>
                    <h1 className="heading">Collections</h1>
                    <p className="text-gray-800">Create and browse lists of the finest restaurants.</p>
                </div>
                <div className="flex w-full p-3 border-b border-gray-700 gap-5 text-center text-lg text-gray-700">
                    <button className={`cursor-pointer ${tab === "featured" && "text-red-600"}`} onClick={() => { selectTab("featured") }}>Handpicked</button>
                    <button className={`cursor-pointer ${tab === "bookmarked" && "text-red-600"}`} onClick={() => { selectTab("bookmarked") }}>Saved Collections</button>
                </div>
                {tab === "featured" && <HandPickedCollection />}
                {tab === "bookmarked" && <SavedCollection />}
                <ExploreOptionNearMe />
            </div>
            <div className="bg-light-pink my-10">
                <Footer />
            </div>
        </div>
    )
}

export default Collection;
