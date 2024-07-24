import  { CustomArrowProps } from "react-slick";
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";
import "@/styles/slick.css";


export const NextArrow = (props: CustomArrowProps) => {
    const { className, style, onClick } = props;
    return (
        <FaArrowCircleRight onClick={onClick} className={`${className} fill-black !bg-white !block mr-2 !z-10`} style={{ ...style }} />
    );
}

export const PrevArrow = (props: CustomArrowProps) => {
    const { className, style, onClick } = props;
    return (
        <FaArrowCircleLeft onClick={onClick} className={`${className} fill-black !bg-white !block ml-2 !z-10`} style={{ ...style }} />
    );
}