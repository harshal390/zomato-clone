import { GoTriangleRight } from "react-icons/go";
import collectionApi from "../api/collections";
import CollectionCard from "./CollectionCard";

const Collections = () => {
    return (
        <div className='component-class'>
            <h1 className="heading">Collections</h1>
            <div className="flex items-center justify-between w-full">
                <p className="text-zinc-900">Explore curated lists of top restaurants, cafes, pubs, and bars in Ahmedabad, based on trends</p>
                <p className="flex items-center gap-1 cursor-pointer text-orange-600">All collections in Ahmedabad. <GoTriangleRight /></p>
            </div>
            <div className="flex items-center w-full justify-between my-5">
                {
                    collectionApi.slice(0, 4).map((el) => {
                        return <CollectionCard key={el.id} {...el} />
                    })
                }
            </div>
        </div>
    )
}

export default Collections;
