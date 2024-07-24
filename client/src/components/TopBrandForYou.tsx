import topBrandsApi from '@/api/topBrands';
import { NextArrow, PrevArrow } from './react-slick/arrows';
import Slider, { Settings } from 'react-slick';
import FoodCategoryCard from './FoodCategoryCard';

const TopBrandForYou = () => {
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
                    topBrandsApi.map((brand) => {
                        return <FoodCategoryCard key={brand.id} {...brand} />
                    })
                }
            </Slider>
        </div>
    )
}

export default TopBrandForYou
