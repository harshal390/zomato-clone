import collectionApi from "@/api/collections";
import CollectionCard from "./CollectionCard";

const HandPickedCollection = () => {
    return (
        <div className="grid grid-cols-4 gap-5 place-items-center items-center w-full justify-between my-5">
            {
                collectionApi.map((el) => {
                    return <CollectionCard key={el.id} {...el} />
                })
            }
        </div>
    )
}

export default HandPickedCollection;
