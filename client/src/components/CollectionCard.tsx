import { GoTriangleRight } from "react-icons/go";

interface CollectionCard {
    img: string,
    title: string,
    places: string
}


const CollectionCard = ({ img, title, places }: CollectionCard) => {
    return (
        <div className="prevent-select relative h-[320px] w-[268px] rounded-lg overflow-hidden cursor-pointer hover:scale-105 duration-300">
            <div className="dark-curve-inside-of-img"></div>
            <img src={img} alt={title} className="w-full h-full" />
            <div className="absolute bottom-0 flex flex-col gap-1 p-3 text-white">
                <span>{title}</span>
                <span className="flex items-center gap-3">{places} Places <GoTriangleRight /></span>
            </div>
        </div>
    )
}

export default CollectionCard;
