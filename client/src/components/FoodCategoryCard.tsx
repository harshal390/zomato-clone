
interface FOODCATEGORY {
    id: number;
    img: string;
    name: string;
    time?: number;
}

const FoodCategoryCard = (category: FOODCATEGORY) => {
    const { name, img, time } = { ...category }
    return (
        <div className="flex items-center flex-col gap-3 h-full w-[188px] cursor-pointer">
            <img src={img} alt={name} className="w-[150px] h-[150px] rounded-full" />
            <span className="text-xl font-semibold text-center">{name}</span>
            {time && <span className="text-sm text-gray-600">{time} Min</span>}
        </div>
    )
}

export default FoodCategoryCard;
