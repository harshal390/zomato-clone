import FooterApi from "@/api/footer";
import textImage from "../assets/zomatoText.avif";
import playStore from "../assets/playstore.webp";
import appStore from "../assets/appstore.webp";


const Footer = () => {
    return (
        <div className="max-w flex flex-col gap-10 items-center w-full pt-14">
            <div className="flex justify-between w-full">
                <div>
                    <img src={textImage} alt="zomato" className='relative z-10 w-[132px] h-[28px] invert' />
                </div>
                <div className="flex items-center gap-5">
                    <select name="country" className="p-3 rounded-lg cursor-pointer">
                        <option value="IN">India 🇮🇳</option>
                        <option value="UAE">UAE 🇦🇪</option>
                    </select>
                    <select name="language" className="p-3 rounded-lg cursor-pointer">
                        <option value="english">English</option>
                        <option value="turkce">Türkçe</option>
                        <option value="hindi">हिंदी</option>
                        <option value="portugues_br">Português (BR)</option>
                        <option value="indonesian">Indonesian</option>
                        <option value="portugues_pt">Português (PT)</option>
                        <option value="espanol">Español</option>
                        <option value="cestina">Čeština</option>
                        <option value="slovencina">Slovenčina</option>
                        <option value="polish">Polish</option>
                        <option value="italian">Italian</option>
                        <option value="vietnamese">Vietnamese</option>
                    </select>
                </div>
            </div>
            <div className="flex justify-between w-full gap-5">
                {
                    FooterApi.content.map((content) => {
                        return <div key={content.id} className="flex flex-col gap-5">
                            <div className="text-xl font-semibold text-black">{content.title}</div>
                            <div className="flex flex-col gap-1">
                                {
                                    content.list.map((list, i) => {
                                        return <div key={i} className="text-gray-700 hover:text-gray-950 cursor-pointer">{list}</div>
                                    })
                                }
                            </div>
                        </div>
                    })
                }
                <div className="flex flex-col gap-5">
                    <div className="text-xl font-semibold text-black">Social links</div>
                    <div className="flex items-center gap-3">
                        {
                            FooterApi.socialMedia.map((social) => {
                                const Icon = social.icon;
                                return <a href={social.link} target="_blank" key={social.id} className="cursor-pointer bg-black text-white p-2 text-xl border flex items-center rounded-full">
                                    <Icon />
                                </a>
                            })
                        }
                    </div>
                    <div>
                        <img src={playStore} alt="playstore" className="h-[40px] w-[137px] cursor-pointer" />

                    </div>
                    <div>
                        <img src={appStore} alt="appstore" className="h-[40px] w-[137px] cursor-pointer" />
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-5">
                <hr />
                <span className="text-xs text-gray-600">  By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2008-2024 © Zomato™ Ltd. All rights reserved.</span>
            </div>
        </div>
    )
}

export default Footer;
