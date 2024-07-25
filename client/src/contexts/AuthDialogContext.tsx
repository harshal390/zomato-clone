import { createContext, ReactNode, useEffect, useMemo, useRef, useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle
} from "@/components/ui/dialog";
import { authContextType } from "@/types";
import TextFiled from "@/components/Inputs/TextField";
import { LabelCondition } from "@/components/Inputs/LabelCondition";
import Button from "@/components/Inputs/Button";
import emailImage from "@/assets/Auth/email.avif";
import { X } from "lucide-react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
} from "@/components/ui/input-otp"


export const authDialogContext = createContext<authContextType | null>({
    authType: "",
    otpVerificationProcess: false,
    counter: 0,
    changeAuthType: () => { }
});

const AuthDialogContextProvider = ({ children }: { children: ReactNode }) => {
    const [authType, setAuthType] = useState<string>("sign-up");
    const [otpVerificationProcess, setOtpVerificationProcess] = useState<boolean>(false);
    const [counter, setCounter] = useState<number>(30);
    const dialog = useRef<HTMLDivElement>(null);

    const changeAuthType = (str: string) => {
        setAuthType(str);
    }
    const handleOutsideClick = (e: Event): void => {
        if (dialog.current && !dialog.current.contains(e.target as Node)) {
            // console.log("click outside of the dialog box")
            setOtpVerificationProcess(false);
            setCounter(30);
        }
    };

    const handleVerificationProcess = (): void => {
        setOtpVerificationProcess(true);
    }

    useEffect(() => {
        document.addEventListener("mousedown", (e) => handleOutsideClick(e));
        return () => {
            document.removeEventListener("mousedown", (e) => handleOutsideClick(e));
        };
    });
    useEffect(() => {
        let timer: NodeJS.Timeout | null;
        if (otpVerificationProcess && counter > 0) {
            timer = setInterval(() => setCounter(counter - 1), 1000);
        }
        return () => clearInterval(timer as NodeJS.Timeout);
    }, [counter, otpVerificationProcess]);

    const obj = useMemo(() => ({ authType, changeAuthType, otpVerificationProcess, counter }), []); // value is cached by useMemo

    return <authDialogContext.Provider value={obj}>
        <Dialog>
            {children}

            <DialogContent className="p-10" ref={dialog}>
                <DialogPrimitive.Close onClick={() => setOtpVerificationProcess(false)} className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
                    <X className="h-4 w-4" />
                    <span className="sr-only">Close</span>
                </DialogPrimitive.Close>
                {!otpVerificationProcess ?
                    <DialogHeader className="flex flex-col gap-5">
                        <DialogTitle className="text-3xl text-zinc-800 font-semibold capitalize">{authType === "sign-up" ? "Sign up" : "login"}</DialogTitle>
                        <DialogDescription className="flex flex-col gap-5 w-full">
                            {authType === "sign-up" && <TextFiled name="fullName" id="authFullName" placeholder="Full Name" className="w-full border" />}
                            {authType === "login" && <div className="flex justify-center items-center w-full"> <img src={emailImage} alt="Email" className="w-[160px] h-[160px]" /></div>}
                            <TextFiled name="email" id="authEmail" placeholder="Email" className="w-full border" />
                            {authType === "sign-up" && <LabelCondition />}
                            <button className="flex justify-center items-center w-full" onClick={() => handleVerificationProcess()}>
                                <Button title={`${authType === "sign-up" ? 'Create Account' : 'Send One Time Password'}`} className="w-full" />
                            </button>
                            <div className="text-lg">
                                {authType === "sign-up" ?
                                    <span className="flex items-center gap-5">Already have an account? <button className="color-red" onClick={() => { changeAuthType("login") }}>Login</button> </span> :
                                    <span className="flex items-center gap-5">New to Zomato? <button className="color-red" onClick={() => { changeAuthType("sign-up") }}>Create account</button> </span>
                                }
                            </div>
                        </DialogDescription>
                    </DialogHeader>
                    :
                    <DialogHeader className="flex flex-col gap-5">
                        <DialogTitle className="text-3xl text-zinc-800 font-semibold capitalize">OTP Verification</DialogTitle>
                        <DialogDescription className="flex flex-col items-center gap-5 w-full">
                            <p className="text-center text-sm text-gray-600">Verification code has been sent to your email, c*****1@fuzitea.com, please enter the same here to complete the signup. Valid for 10 minutes.</p>
                            <InputOTP maxLength={6}>
                                <InputOTPGroup>
                                    <InputOTPSlot index={0} />
                                    <InputOTPSlot index={1} />
                                    <InputOTPSlot index={2} />
                                    <InputOTPSlot index={3} />
                                    <InputOTPSlot index={4} />
                                    <InputOTPSlot index={5} />
                                </InputOTPGroup>

                            </InputOTP>
                            <span className="text-3xl !text-black">00:{counter}</span>
                            <span className="flex items-center gap-5 text-lg">Not received OTP?  <button className="color-red">Resend Now</button> </span>
                        </DialogDescription>
                    </DialogHeader>
                }

            </DialogContent>
        </Dialog>

    </authDialogContext.Provider>
}

export default AuthDialogContextProvider;