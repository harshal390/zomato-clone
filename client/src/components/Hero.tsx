import textImage from '../assets/zomatoText.avif';
import SearchBox from './SearchBox';

const Hero = () => {
    return (
        <div className='h-[550px] w-full relative flex items-center justify-center overflow-clip'>
            <div className="flex flex-col gap-7 items-center">
                <img src={textImage} alt="zomato" className='relative z-10 w-[300px] h-[60px]' />
                <h1 className='text-4xl text-white'>Discover the best food & drinks in Ahmedabad.</h1>
                <SearchBox />
            </div>
        </div>
    )
}

export default Hero;