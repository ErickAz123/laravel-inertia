import InputText from "@/Components/InputText";
import GuestLayouts from "@/Layouts/GuestLayouts";

export default function Login() {
    return (
        <GuestLayouts>
            <form className="mt-6">
                <div className="mt-2">
                    <label className="text-md font-semibold block">Username</label>

                    <InputText type="text" className="mt-1" />
                </div>

                <div className="mt-2">
                    <label className="text-md font-semibold block">Password</label>
                    <InputText type="password" className="mt-1" />
                </div>

                <div className="mt-12 flex items-center justify-center">
                    <button className="px-6 py-2 border rounded-full bg-blue-600 text-white text-md font-semibold block hover:bg-blue-900">Login</button>
                </div>
            </form>
        </GuestLayouts>
    );
}
