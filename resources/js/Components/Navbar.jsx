import { usePage } from "@inertiajs/react";
import { Menu, Bell, User } from "lucide-react";

export default function Navbar({ toggleSidebar }) {

    const { props } = usePage();
    const title = props.title
    return (
        <div className="h-16 bg-blue-900 border-b border-blue-800 flex items-center justify-between px-6">
            {/* Left */}
            <div className="flex items-center gap-4">
                <button
                    onClick={toggleSidebar}
                    className="p-2 rounded-lg hover:bg-gray-800 transition text-white"
                >
                    <Menu size={20} />
                </button>

                <span className="text-lg font-semibold tracking-wide text-white">
                    {title}
                </span>
            </div>

            {/* Right */}
            <div className="flex items-center gap-4 text-white">
                <button className="p-2 rounded-lg hover:bg-gray-800 transition relative">
                    <Bell size={20} />
                    <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                </button>

                <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-800 p-2 rounded-lg transition">
                    <User size={20} />
                    <span className="text-sm font-medium">Erick</span>
                </div>
            </div>
        </div>
    );
}
