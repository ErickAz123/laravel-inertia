import { useState } from "react";
import Sidebar from "@/Components/Sidebar";
import Navbar from "@/Components/Navbar";

export default function AuthLayout({ children }) {
    const [sidebarOpen, setSidebarOpen] = useState(true);

    return (
        <div className="flex h-screen bg-white text-black">
            <Sidebar open={sidebarOpen} />

            <div className="flex flex-col flex-1">
                <Navbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

                <main className="p-6 overflow-y-auto">
                    {children}
                </main>
            </div>
        </div>
    );
}
