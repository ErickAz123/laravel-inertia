import { Link, usePage } from "@inertiajs/react";
import { Home, Users, Settings, LogOut, Router, FileArchive, User2, Calculator, MessageSquare, Mail, Banknote } from "lucide-react";

export default function Sidebar({ open }) {

    const page = usePage();
    const url = page.url

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
                <SidebarItem icon={<Home size={20} />} text="Dashboard" open={open} href="/dashboard" active={url.startsWith('/dashboard')}/>
                <SidebarItem icon={<Router size={20} />} text="Mikrotik Servers" open={open} href="/routers" active={url.startsWith('/routers')} />
                <SidebarItem icon={<FileArchive size={20} />} text="Products" open={open} href="/products" active={url.startsWith('/products')} />
                <SidebarItem icon={<Users size={20} />} text="Customers" open={open} href="/customers" active={url.startsWith('/customers')} />
                <SidebarItem icon={<Calculator size={20} />} text="Invoice" open={open} href="/invoice" active={url.startsWith('/invoice')} />
                <SidebarItem icon={<Mail size={20}/>} text="Ticket" open={open} href="/ticket" active={url.startsWith('/ticket')} />
                <SidebarItem icon={<Banknote size={20}/>} text="Transaction" open={open} href="/transaction" active={url.startsWith('/transaction')} />
                <SidebarItem icon={<Settings size={20} />} text="Settings" open={open} href="/settings" active={url.startsWith('/setting')}/>

            </nav>

            {/* Bottom */}
            <div className="p-4 border-t border-gray-800">
                <SidebarItem icon={<LogOut size={20} />} text="Logout" open={open} href="/logout" />
            </div>
        </div>
    );
}

function SidebarItem({ icon, text, open, href, active }) {
    return (
        <Link
            href={href}
            className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-200 group
            ${active
                ? "bg-blue-700 text-white shadow-lg"
                : "hover:bg-gray-800 text-gray-400"
            }`}
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
