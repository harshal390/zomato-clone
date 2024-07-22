import { Link } from "react-router-dom";
import textImage from "../assets/zomatoText.avif";
import SearchBox from "./SearchBox";

const Header2 = () => {
    return (
        <div className='w-full border-b'>
            <div className="max-w h-[5rem] flex items-center justify-between text-lg">
                <Link to={"/"}>
                    <img src={textImage} alt="zomato" className='cursor-pointer relative z-10 w-[132px] h-[28px] invert' />
                </Link>
                <SearchBox />
                <div className="flex items-center gap-10">
                    <span className="cursor-pointer text-gray-800 hover:text-black">Log in</span>
                    <span className="cursor-pointer text-gray-800 hover:text-black">Sign up</span>
                </div>
            </div>
        </div>
    )
}

export default Header2;
