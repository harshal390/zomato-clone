import { GoTriangleRight } from "react-icons/go";
import collectionApi from "../api/collections";
import CollectionCard from "./CollectionCard";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider, {  Settings } from "react-slick";
import { NextArrow, PrevArrow } from "./react-slick/arrows";


const Collections = () => {
    const settings: Settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };
    return (
        <div className='component-class'>
            <h1 className="heading">Collections</h1>
            <div className="flex items-center justify-between w-full">
                <p className="text-zinc-900">Explore curated lists of top restaurants, cafes, pubs, and bars in Ahmedabad, based on trends</p>
                <Link to={`/ahmedabad/collections`} className="flex items-center gap-1 cursor-pointer text-orange-600">All collections in Ahmedabad. <GoTriangleRight /></Link>
            </div>
            <Slider {...settings}>
                {
                    collectionApi.map((el) => {
                        return <CollectionCard key={el.id} {...el} />
                    })
                }
            </Slider>
        </div>
    )
}

export default Collections;
