import { cn } from "@/lib/utils"

const Button = ({ title, className }: { title: string, className: string }) => {
    return (
        <button className={cn("bg-red px-10 py-3 w-fit  text-white rounded-xl",
            className
        )}>{title}</button>
    )
}

export default Button;
