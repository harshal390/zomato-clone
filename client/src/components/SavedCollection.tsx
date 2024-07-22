import savedCollection from "@/api/savedCollection";
import CollectionCard from "./CollectionCard";
import SavedCollectionImage from "../assets/savedCollection.avif";

const SavedCollection = () => {
    return (
        <>
            {
                savedCollection.length ?
                    <div className="grid grid-cols-4 gap-5 place-items-center items-center w-full justify-between my-5">
                        {
                            savedCollection.map((el) => {
                                return <CollectionCard key={el.id} {...el} />
                            })
                        }
                    </div> : <div className="flex flex-col gap-10 items-center justify-center w-full">
                        <img src={SavedCollectionImage} alt="saved-collection" className="w-[330px] h-[270px]" />
                        <span className="text-gray-800 font-normal text-center text-2xl">Save collections you love! <br /> They'll appear here.

                            They'll appear here.</span>
                    </div>
            }
        </>
    )
}

export default SavedCollection;