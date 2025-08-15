import { SignUp } from "@clerk/nextjs";
import Image from "next/image";


export default function RegisterPage() {
    return (
        <main className="flex flex-col items-center p-5 gap-10 animate-fade-in">
            <Image 
                width={100}
                height={100}
                src='assets/logo.svg'
                alt="logo"
            />
            <div>
                <SignUp />
            </div>
        </main>
        
    )
}