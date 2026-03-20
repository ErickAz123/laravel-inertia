import InputText from "@/Components/InputText";
import AuthLayout from "@/Layouts/AuthLayout";
import { Earth, Plus, Server, Unplug } from "lucide-react";

export default function AddServer() {
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

                        <label className="text-xs text-gray-600 mt-5">
                            Kelola Server Mikrotik, Monitor Status Koneksi dan Atur Konfigurasi Jaringan
                        </label>
                    </div>

                    <div className="col-span-3 border-l border-gray-300 flex flex-col gap-4">
                        <div className="flex justify-between items-center border-gray-300 border-b p-4">
                            <div className="flex items-center gap-2">
                                <Plus size={20} />
                                <label className="text-md font-semibold">
                                    Tambah Server Mikrotik
                                </label>
                            </div>
                        </div>
                        <div className="p-4">
                            <form className="space-y-2">
                                <div className="grid grid-cols-4">
                                    <div className="flex items-center space-x-2"><Server size={15} /><label> Server Name </label><span className="text-red-600">*</span></div>
                                    <div className="grid col-span-3">
                                        <InputText className="bg-transparent" type="text" placeholder="192.168.10.1"/>
                                    </div>
                                </div>
                                <div className="grid grid-cols-4">
                                    <div className="flex items-center space-x-2"><Server size={15} /><label> Server Name </label><span className="text-red-600">*</span></div>
                                    <div className="grid col-span-3">
                                        <InputText className="bg-transparent" type="text" placeholder="192.168.10.1"/>
                                    </div>
                                </div>
                                <div className="grid grid-cols-4">
                                    <div className="flex items-center space-x-2"><Server size={15} /><label> Server Name </label><span className="text-red-600">*</span></div>
                                    <div className="grid col-span-3">
                                        <InputText className="bg-transparent" type="text" placeholder="192.168.10.1"/>
                                    </div>
                                </div>
                                <div className="grid grid-cols-4">
                                    <div className="flex items-center space-x-2"><Server size={15} /><label> Server Name </label><span className="text-red-600">*</span></div>
                                    <div className="grid col-span-3">
                                        <InputText className="bg-transparent" type="text" placeholder="192.168.10.1"/>
                                    </div>
                                </div>
                            </form>
                        </div>

                    </div>

                </div>
            </div>
        </AuthLayout>
    );
}
