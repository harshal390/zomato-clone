import { ImSearch } from 'react-icons/im'

const SearchBox = () => {
    return (
        <div className="border flex items-center gap-5 px-6 py-3 justify-between text-xl bg-white rounded-3xl w-[600px]">
            <button className="searchIcon text-zinc-800 cursor-pointer">
                <ImSearch className="h-6 w-6 hover:scale-110 duration-300" />
            </button>
            <input
                type="search"
                placeholder="Search for restaurant, cuisine or a dish"
                className="outline-none bg-transparent text-black w-full"
            />
        </div>
    )
}

export default SearchBox