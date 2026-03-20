import InputText from "@/Components/InputText";
import AuthLayout from "@/Layouts/AuthLayout";
import { Earth, Key, Plug, Plus, Save, Server, Unplug, User } from "lucide-react";

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
                                        <InputText className="bg-transparent" type="text" placeholder="Server Utama / Main Server"/>
                                        <label className="text-xs font-semi block">Berikan nama yang mudah di identifikasi sebagai Server</label>
                                    </div>
                                </div>
                                <div className="grid grid-cols-4">
                                    <div className="flex items-center space-x-2"><Earth size={15} /><label> Host </label><span className="text-red-600">*</span></div>
                                    <div className="grid col-span-3">
                                        <InputText className="bg-transparent" type="text" placeholder="192.168.10.1"/>
                                        <label className="text-xs font-semi block">
                                            Gunankan IP Mikrotik dalam format x.x.x.x
                                        </label>
                                    </div>
                                </div>
                                <div className="grid grid-cols-4">
                                    <div className="flex items-center space-x-2"><User size={15} /><label> Username </label><span className="text-red-600">*</span></div>
                                    <div className="grid col-span-3">
                                        <InputText className="bg-transparent" type="text" placeholder="Admin"/>
                                        <label className="text-xs font-semi block">
                                            Username Login Melalui API
                                        </label>
                                    </div>
                                </div>
                                <div className="grid grid-cols-4">
                                    <div className="flex items-center space-x-2"><Key size={15} /><label> Password </label><span className="text-red-600">*</span></div>
                                    <div className="grid col-span-3">
                                        <InputText className="bg-transparent" type="text" placeholder="Admin"/>
                                        <label className="text-xs block">Password Login Melalui API</label>
                                    </div>
                                </div>
                                <div className="grid grid-cols-4">
                                    <div className="flex items-center space-x-2"><Plug size={15} /><label> Port </label><span className="text-red-600">*</span></div>
                                    <div className="grid col-span-3">
                                        <InputText className="bg-transparent" type="text" placeholder="8728"/>
                                        <label className="text-xs block">Port API Mikrotik. Jika default Isi 8728</label>
                                    </div>
                                </div>

                                <div className="item-center justify-end mt-6 mr-6 flex">
                                    <button className="px-4 py-2 border rounded-lg bg-green-400 flex items-center hover:bg-green-600"><Save size={15} /><span className="ml-2">Simpan</span></button>
                                </div>
                            </form>
                        </div>

                    </div>

                </div>
            </div>
        </AuthLayout>
    );
}
