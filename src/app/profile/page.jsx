export default function ProfilePage() {
    return (
        <div className="p-6 space-y-6  flex flex-col items-center p-30">
            <h1 className="text-3xl font-bold">Profile</h1>
            <p className="text-gray-600">Update your profile details.</p>

            <form className="space-y-4 max-w-md w-[30%]">
                <div>
                    <label className="block text-sm font-medium">
                        Full Name
                    </label>
                    <input
                        type="text"
                        placeholder="Enter your name"
                        className="mt-1 w-full rounded-lg border p-2"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium">Bio</label>
                    <textarea
                        placeholder="Tell something about yourself..."
                        className="mt-1 w-full rounded-lg border p-2"
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
                >
                    Save Changes
                </button>
            </form>
        </div>
    );
}
