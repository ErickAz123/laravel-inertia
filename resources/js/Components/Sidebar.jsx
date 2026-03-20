import { Link } from "@inertiajs/react";
import { Home, Users, Settings, LogOut } from "lucide-react";

export default function Sidebar({ open }) {
    return (
        <div
            className={`${
                open ? "w-64" : "w-20"
            } bg-blue-900 border-r border-blue-800 transition-all duration-300 flex flex-col`}
        >
            {/* Logo */}
            <div className="h-16 flex items-center justify-center border-b border-gray-800">
                <span className="text-xl font-bold tracking-wide text-white">
                    {open ? "Mikrotik" : "M"}
                </span>
            </div>

            {/* Menu */}
            <nav className="flex-1 p-4 space-y-2">
                <SidebarItem icon={<Home size={20} />} text="Dashboard" open={open} href="/dashboard" />
                <SidebarItem icon={<Users size={20} />} text="Users" open={open} href="/users" />
                <SidebarItem icon={<Settings size={20} />} text="Settings" open={open} href="/settings" />
            </nav>

            {/* Bottom */}
            <div className="p-4 border-t border-gray-800">
                <SidebarItem icon={<LogOut size={20} />} text="Logout" open={open} href="/logout" />
            </div>
        </div>
    );
}

function SidebarItem({ icon, text, open, href }) {
    return (
        <Link
            href={href}
            className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-800 transition-all duration-200 group"
        >
            <div className="text-gray-400 group-hover:text-white">
                {icon}
            </div>

            {open && (
                <span className="text-sm font-medium tracking-wide text-white">
                    {text}
                </span>
            )}
        </Link>
    );
}
