import { MdKeyboardArrowRight } from "react-icons/md";

interface popularLocalities {
    location: string,
    places: string,
}

const PopularLocalities = ({ location, places }: popularLocalities) => {
    return (
        <div className="w-full flex items-center justify-between hover:shadow duration-300 p-3 border rounded-lg cursor-pointer">
            <div className="flex flex-col text-zinc-800">
                <div className="text-xl text-zinc-900">{location}</div>
                <div>{places} places</div>
            </div>
            <div>
                <MdKeyboardArrowRight />
            </div>
        </div>
    )
}

export default PopularLocalities;
