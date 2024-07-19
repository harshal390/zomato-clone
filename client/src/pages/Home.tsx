import Header from '../components/Header.js';
import Hero from '../components/Hero.js';
import bgImage from '../assets/bg.avif';
import Card from '../components/Card.js';
import dining from '../assets/dining.avif';
import orderOnline from '../assets/orderonline.avif';
import Collections from '../components/Collections.js';
import PopularLocalitiesGrid from '../components/PopularLocalitiesGrid.js';
import GetZomatoApp from '../components/GetZomatoApp.js';

const Home = () => {
    return (
        <div className='pb-10 min-h-[200dvh]'>
            <div className='-z-10 absolute top-0 right-0 w-full overflow-hidden items-center justify-center h-[600px]'>
                <img src={bgImage} alt="bg" className='w-full -mt-52 ' />
            </div>
            <div className="max-w flex flex-col gap-10">
                <Header />
                <Hero />
                <div className="flex items-center gap-5 justify-between">
                    <Card img={orderOnline} title={`Order Online`} desc={`Stay home and order to your doorstep`} />
                    <Card img={dining} title={`Dining`} desc={`View the city's favourite dining venues`} />
                </div>
                <Collections />
                <PopularLocalitiesGrid />
            </div>
            <div className="bg-light-pink my-10">
                <GetZomatoApp />
            </div>
        </div>
    )
}
export default Home;