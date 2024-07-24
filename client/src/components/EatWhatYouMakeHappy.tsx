import foodCategory from "@/api/foodCategory";
import FoodCategoryCard from "./FoodCategoryCard";
import Slider, { Settings } from "react-slick";
import { NextArrow, PrevArrow } from "./react-slick/arrows";

const EatWhatYouMakeHappy = () => {
    const settings: Settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };
    return (
        <div className="max-w flex flex-col gap-10">
            <h1 className="heading">Eat what makes you happy</h1>
            <Slider {...settings}>
                {
                    foodCategory.map((category) => {
                        return <FoodCategoryCard key={category.id} {...category} />
                    })
                }
            </Slider>
        </div>
    )
}

export default EatWhatYouMakeHappy;
