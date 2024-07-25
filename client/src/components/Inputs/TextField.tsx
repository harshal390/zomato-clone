

const TextFiled = ({ name, id, placeholder, className }: { name: string, id: string, placeholder: string, className: string }) => {
    return (
        <label
            htmlFor={id}
            className={`${className} cursor-pointer py-2 px-4 text-xl relative block rounded-md border border-gray-200 shadow-sm`}
        >
            <input
                type="text"
                id={id}
                className="w-full peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 cursor-pointer"
                placeholder={placeholder} name={name}
            />

            <span
                className="color-input capitalize pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs  transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
            >
                {placeholder}
            </span>
        </label>

    )
}

export default TextFiled