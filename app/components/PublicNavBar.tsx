import Image from "next/image";
import Link from "next/link";

export default function PublicNavBar() {
    
    return (
        <nav className="flex justify-between items-center fixed z-50 w-full h-28 bg-gray px-10 gap-4 shadow-2xl">
            <Link 
                href='/login'
                className="flex items-center hover:scale-150 duration-500"
            >
                <Image
                    src="/assets/logo.svg"
                    alt="calendar logo"
                    width={60}
                    height={60}
                />
            </Link>
        </nav>
    )
}