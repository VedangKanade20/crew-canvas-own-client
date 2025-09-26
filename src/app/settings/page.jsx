export default function SettingsPage() {
    return (
        <div className=" space-y-6  flex flex-col items-center p-30 ">
            <h1 className="text-3xl font-bold">Settings</h1>
            <p className="text-gray-600 text-xl">
                Customize your app experience.
            </p>

            <div className="space-y-4 max-w-md text-lg">
                <div className="flex items-center justify-between m-10">
                    <span>Dark Mode</span>
                    <input type="checkbox" className="h-5 w-5" />
                </div>

                <div className="flex items-center justify-between m-10 ">
                    <span>Email Notifications </span>
                    <input type="checkbox" className="h-5 w-5" />
                </div>

                <div className="flex items-center justify-between m-10 ">
                    <span>Auto-Join Team</span>
                    <input type="checkbox" className="h-5 w-5" />
                </div>
            </div>
        </div>
    );
}
