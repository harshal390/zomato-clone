const Header = () => {
    return (
        <div className='text-white h-[5rem] flex items-center justify-between text-lg'>
            <div>
                <span className="cursor-pointer">Get the App</span>
            </div>
            <div className="flex items-center gap-10">
                <span className="cursor-pointer">Investor Relations</span>
                <span className="cursor-pointer">Add restaurant</span>
                <span className="cursor-pointer">Log in</span>
                <span className="cursor-pointer">Sign up</span>
            </div>
        </div>
    )
}

export default Header;
