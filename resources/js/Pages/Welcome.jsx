export default function Welcome() {
    return (
        <div className="w-full min-h-screen bg-gradient-to-br from-blue-900 via-blue-700 to-black/70">
            <div className="p-2">
                <div className="px-8 py-4">
                    <div className="w-full bg-white rounded-full flex items-center justify-between">
                        <a href="/Register" className="px-14 py-4 text-blue-600 text-md font-semibold block">Label</a>

                        <nav>
                            <a href="#" className="px-4 py-2 rounded-full hover:bg-blue-600 hover:text-white text-blue-600 text-lg font-semibold block">Beranda</a>

                        </nav>

                        <div className="px-14 py-2">
                            <a href="/Login" className="px-6 py-2 border rounded-full bg-blue-600 text-white text-md font-semibold block hover:bg-blue-700">Login</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
