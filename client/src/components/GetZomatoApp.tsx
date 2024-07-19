import getZomatoApp from "../assets/getZomatoApp.avif";
import TextFiled from "./Inputs/TextField";
import playStore from "../assets/playstore.webp";
import appStore from "../assets/appstore.webp";
import RadioField from "./Inputs/RadioField";

const GetZomatoApp = () => {
    return (
        <div className='max-w  flex items-center justify-evenly py-28 w-full'>
            <div className="w-1/4">
                <img src={getZomatoApp} alt="getZomatoApp" className="h-auto w-full" />
            </div>
            <div className="flex flex-col gap-5 w-1/2">
                <div className="text-4xl">Get the Zomato app</div>
                <div>We will send you a link, open it on your phone to download the app.</div>
                <div className="flex items-center gap-5">
                    <RadioField />
                    <RadioField />
                </div>
                <div className="flex items-center gap-5">
                    <TextFiled /><button className="bg-red px-10 py-3 w-fit  text-white rounded-xl">Share App Link</button>
                </div>
                <div>Download app from</div>
                <div className="flex items-center gap-5">
                    <img src={playStore} alt="playstore" className="h-[40px] w-[137px] cursor-pointer" />
                    <img src={appStore} alt="appstore" className="h-[40px] w-[137px] cursor-pointer" />
                </div>
            </div>
        </div>
    )
}
export default GetZomatoApp;
