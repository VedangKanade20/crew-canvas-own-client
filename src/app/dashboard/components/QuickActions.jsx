"use client";

export default function QuickActions() {
    return (
        <div className="grid grid-cols-3 gap-8 mb-10">
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg text-center">
                <div className="text-purple-500 text-lg mb-3">
                    Create Team Space
                </div>
                <p className="text-gray-400 text-sm mb-5">
                    Start a new collaborative workspace
                </p>
                <button className="bg-purple-500 text-white px-5 py-2 rounded-lg hover:bg-purple-600 transition-colors w-full">
                    Create Space
                </button>
            </div>

            <div className="bg-gray-800 p-6 rounded-xl shadow-lg text-center">
                <div className="text-blue-400 text-lg mb-3">
                    Join Team Space
                </div>
                <p className="text-gray-400 text-sm mb-5">
                    Join an existing workspace with a code
                </p>
                <button className="bg-blue-400 text-white px-5 py-2 rounded-lg hover:bg-blue-500 transition-colors w-full">
                    Join Space
                </button>
            </div>

            <div className="bg-gray-800 p-6 rounded-xl shadow-lg text-center">
                <div className="text-green-400 text-lg mb-3">Templates</div>
                <p className="text-gray-400 text-sm mb-5">
                    Start with pre-built workspace templates
                </p>
                <button className="bg-green-400 text-white px-5 py-2 rounded-lg hover:bg-green-500 transition-colors w-full">
                    Browse Templates
                </button>
            </div>
        </div>
    );
}
