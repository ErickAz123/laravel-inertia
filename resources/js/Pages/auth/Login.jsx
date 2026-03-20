import InputText from "@/Components/InputText";
import GuestLayouts from "@/Layouts/GuestLayouts";
import { useForm } from "@inertiajs/react";

export default function Login() {
    const { data, setData, post, processing, reset } = useForm({
        username: '',
        password: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('Login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <GuestLayouts>
            <form className="mt-6" onSubmit={submit}>
                <div className="mt-2">
                    <label className="text-md font-semibold block">Username</label>

                    <InputText type="text" className="mt-1" id="username" name="username" value={data.username} onChange={(e) => setData('username', e.target.value)} required />
                </div>

                <div className="mt-2">
                    <label className="text-md font-semibold block">Password</label>

                    <InputText type="password" className="mt-1" id="password" name="password" value={data.password} onChange={(e) => setData('password', e.target.value)} required />
                </div>

                <div className="mt-12 flex items-center justify-center">
                    <button className="px-6 py-2 border rounded-full bg-blue-600 text-white text-md font-semibold block hover:bg-blue-900" disabled={processing}>Login</button>
                </div>
            </form>
        </GuestLayouts>
    );
}
