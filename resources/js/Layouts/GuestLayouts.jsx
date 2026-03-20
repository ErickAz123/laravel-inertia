import { Link } from "@inertiajs/react";
import Logo from "@/Components/logo.png";

export default function GuestLayouts ({ children }) {
    return (
        <div className="flex min-h-screen flex-col items-center bg-gradient-to-br from-blue-900 via-blue-600 to-black/70 pt-6 sm:justify-center sm:pt-0">
            <div>
                <Link href="/">
                    <img src={Logo} alt="logo" className="w-25 h-12" />
                </Link>
            </div>

            <div className="mt-6 w-full overflow-hidden bg-white px-6 py-4 shadow-md sm:max-w-md sm:rounded-lg">
                {children}
            </div>
        </div>
    );
}
