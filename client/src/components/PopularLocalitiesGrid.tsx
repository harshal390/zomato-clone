import { useState } from "react";
import popularLocalitiesApi from "../api/popularLocalties";
import PopularLocalities from "./PopularLocalities";
import { MdKeyboardArrowUp } from "react-icons/md";

const PopularLocalitiesGrid = () => {
    const [seeMore, setSeeMore] = useState(false);
    const toggle = () => {
        return setSeeMore(!seeMore);
    }
    return (
        <div className='component-class'>
            <h1 className="heading">Popular localities in and around Ahmedabad.</h1>
            <div className="grid grid-cols-3 w-full gap-5">
                {popularLocalitiesApi.slice(0, seeMore ? popularLocalitiesApi.length : 8).map((el) => <PopularLocalities key={el.id} {...el} />)}
                <button onClick={() => { toggle() }} className={`flex items-center justify-center gap-4 border cursor-pointer `}>
                    See {seeMore ? "Less" : "More"} <MdKeyboardArrowUp className={`${!seeMore && 'rotate-180'} duration-300`} />
                </button>
            </div>
        </div>
    )
}

export default PopularLocalitiesGrid;
