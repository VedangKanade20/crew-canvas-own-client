"use client";

export default function Loader({ message = "Loading..." }) {
    return (
        <div className="flex justify-center items-center py-10">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-purple-500 mr-3"></div>
            <p className="text-gray-400">{message}</p>
        </div>
    );
}
