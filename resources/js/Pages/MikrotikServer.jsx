import AuthLayout from "@/Layouts/AuthLayout";
import { Earth, Server, Unplug } from "lucide-react";

export default function MikrotikServer() {
    return (
        <AuthLayout>
            <div className="w-full border rounded-xl shadow-xl bg-gray-100">
                <div className="grid grid-cols-4 items-stretch">
                    <div className="p-4 space-y-4">
                        <div className="flex items-center gap-2">
                            <Server size={20} />
                            <label className="text-md font-semibold">
                                Manajemen Server
                            </label>
                        </div>

                        <label className="text-sm text-gray-600">
                            Kelola Server Mikrotik, Monitor Status Koneksi dan Atur Konfigurasi Jaringan
                        </label>
                    </div>

                    <div className="col-span-3 border-l border-gray-300 flex flex-col gap-4">
                        <div className="flex justify-between items-center border-gray-300 border-b p-4">
                            <div className="flex items-center gap-2">
                                <Server size={20} />
                                <label className="text-md font-semibold">
                                    Daftar Server Mikrotik
                                </label>
                            </div>

                            <button className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-all duration-200 hover:scale-105 shadow">
                                + Tambah Server
                            </button>
                        </div>
                        <div className="p-4">
                            <div className="overflow-x-auto">
                                <table className="w-full text-sm text-left border-collapse">

                                    {/* Header */}
                                    <thead className="bg-gray-200 text-gray-700">
                                        <tr>
                                            <th className="p-3">No.</th>

                                            <th className="p-3">
                                                <div className="flex items-center gap-2">
                                                    <Server size={16} />
                                                    Server
                                                </div>
                                            </th>

                                            <th className="p-3">
                                                <div className="flex items-center gap-2">
                                                    <Earth size={16} />
                                                    Host
                                                </div>
                                            </th>

                                            <th className="p-3">
                                                <div className="flex items-center gap-2">
                                                    <Unplug size={16} />
                                                    Status
                                                </div>
                                            </th>

                                            <th className="p-3 text-center">Aksi</th>
                                        </tr>
                                    </thead>

                                    {/* Body */}
                                    <tbody className="divide-y">
                                        <tr className="hover:bg-gray-100 transition">
                                            <td className="p-3">1</td>
                                            <td className="p-3">Mikrotik-1</td>
                                            <td className="p-3">192.168.1.1</td>

                                            <td className="p-3">
                                                <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-700">
                                                    Online
                                                </span>
                                            </td>

                                            <td className="p-3 text-center space-x-2">
                                                <button className="px-2 py-1 text-xs bg-green-400 text-white rounded">
                                                    Monitor
                                                </button>
                                                <button className="px-2 py-1 text-xs bg-blue-500 text-white rounded">
                                                    Edit
                                                </button>
                                                <button className="px-2 py-1 text-xs bg-red-500 text-white rounded">
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    </tbody>

                                </table>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </AuthLayout>
    );
}
