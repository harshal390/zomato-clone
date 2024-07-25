import { DialogTrigger } from "@/components/ui/dialog";
import { authDialogContext } from "@/contexts/AuthDialogContext";
import { authContextType } from "@/types";
import { useContext } from "react";


const Header = () => {
    const { changeAuthType } = useContext(authDialogContext) as authContextType;
    return (
        <div className='text-white h-[5rem] flex items-center justify-between text-lg'>
            <div>
                <span className="cursor-pointer">Get the App</span>
            </div>
            <div className="flex items-center gap-10">
                <span className="cursor-pointer">Investor Relations</span>
                <span className="cursor-pointer">Add restaurant</span>
                <DialogTrigger className="cursor-pointer" onClick={() => { changeAuthType("login") }}>Log in</DialogTrigger>
                <DialogTrigger className="cursor-pointer" onClick={() => { changeAuthType("sign-up") }}>Sign up</DialogTrigger>
            </div>
        </div>
    )
}

export default Header;
