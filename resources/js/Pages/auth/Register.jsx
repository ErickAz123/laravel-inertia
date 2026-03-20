import InputText from "@/Components/InputText";
import GuestLayouts from "@/Layouts/GuestLayouts";
import { useForm } from "@inertiajs/react";

export default function Register() {

    const { data, setData, post, processing, reset } = useForm({
        name: '',
        username: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('Register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <GuestLayouts>
            <form className="mt-6" onSubmit={submit}>
                <div>
                    <label className="text-md font-semibold block">Full Name</label>

                    <InputText type="text" className="mt-1" id="name" name="name" value={data.name} onChange={(e) => setData('name', e.target.value)} required />
                </div>

                <div className="mt-2">
                    <label className="text-md font-semibold block">Username</label>

                    <InputText type="text" className="mt-1" id="username" name="username" value={data.username} onChange={(e) => setData('username', e.target.value)} required />
                </div>

                <div className="mt-2">
                    <label className="text-md font-semibold block">Email</label>

                    <InputText type="email" className="mt-1" id="email" name="email" value={data.email} onChange={(e) => setData('email', e.target.value)} required />
                </div>

                <div className="mt-2">
                    <label className="text-md font-semibold block">Password</label>

                    <InputText type="password" className="mt-1" id="password" name="password" value={data.password} onChange={(e) => setData('password', e.target.value)} required />
                </div>

                <div className="mt-2">
                    <label className="text-md font-semibold block">Confirm Password</label>

                    <InputText type="password" className="mt-1" id="password_confirmation" name="password_confirmation" value={data.password_confirmation} onChange={(e) => setData('password_confirmation', e.target.value)} required />
                </div>

                <div className="mt-6 flex items-center justify-center">
                    <button className="px-6 py-2 border rounded-full bg-blue-400 hover:bg-blue-600 cursor-pointer hover:text-white" disabled={processing}>Register</button>
                </div>
            </form>
        </GuestLayouts>
    )
}
