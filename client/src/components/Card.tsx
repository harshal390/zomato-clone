interface card {
    img: string,
    title: string,
    desc: string,
}

const Card = ({ img, title, desc }: card) => {
    return (
        <div className='flex flex-col h-[240px] rounded-lg border hover:scale-105 duration-300 w-full overflow-hidden cursor-pointer'>
            <div className='h-2/3 overflow-hidden'>
                <img src={img} alt={title} className="h-full w-full object-cover" />
            </div>
            <div className='h-1/3 px-5 py-2 flex flex-col'>
                <span className="text-xl">{title}</span>
                <span className='text-zinc-900'>{desc}</span>
            </div>
        </div>
    )
}

export default Card;
