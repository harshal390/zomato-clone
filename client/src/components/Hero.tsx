import { ImSearch } from 'react-icons/im';
import textImage from '../assets/zomatoText.avif';

const Hero = () => {
    return (
        <div className='h-[550px] w-full relative flex items-center justify-center overflow-clip'>
            <div className="flex flex-col gap-7 items-center">
                <img src={textImage} alt="zomato" className='relative z-10 w-[300px] h-[60px]' />
                <h1 className='text-4xl text-white'>Discover the best food & drinks in Ahmedabad.</h1>
                <div className="flex items-center gap-5 px-10 py-5 justify-between text-xl bg-white rounded-3xl w-[800px]">
                    <button className="searchIcon text-zinc-800 cursor-pointer">
                        <ImSearch className="h-6 w-6 hover:scale-110 duration-300" />
                    </button>
                    <input
                        type="search"
                        placeholder="Search for restaurant, cuisine or a dish"
                        className="outline-none bg-transparent text-black w-full"
                    />
                </div>
            </div>
        </div>
    )
}

export default Hero;