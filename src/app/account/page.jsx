export default function AccountPage() {
    return (
        <div className="p-6 space-y-6 flex flex-col items-center p-30">
            <h1 className="text-3xl font-bold">My Account</h1>
            <p className="text-gray-600">
                Manage your account information below.
            </p>

            <div className="space-y-4 w-[30%] fjustify-center">
                <div>
                    <label className="block text-sm font-medium w-[30%]">
                        Email
                    </label>
                    <input
                        type="email"
                        value="user@example.com"
                        disabled
                        className="mt-1 w-full rounded-lg border p-2 bg-black"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium">
                        Username
                    </label>
                    <input
                        type="text"
                        value="demoUser"
                        disabled
                        className="mt-1 w-full rounded-lg border p-2 bg-black"
                    />
                </div>
            </div>
        </div>
    );
}
