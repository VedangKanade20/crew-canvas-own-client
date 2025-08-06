import React from 'react';

const Sidebar: React.FC = () => {
    return (
        <div className="w-64 h-screen bg-gray-900 text-white p-5 shadow-lg">
            <h2 className="text-2xl mb-5 border-b border-gray-700 pb-2">Sidebar</h2>
            <ul className="list-none p-0 m-0">
                <li className="py-2 border-b border-gray-700 cursor-pointer hover:bg-gray-800 transition-colors">Home</li>
                <li className="py-2 border-b border-gray-700 cursor-pointer hover:bg-gray-800 transition-colors">About</li>
                <li className="py-2 border-b border-gray-700 cursor-pointer hover:bg-gray-800 transition-colors">Services</li>
                <li className="py-2 border-b border-gray-700 cursor-pointer hover:bg-gray-800 transition-colors">Contact</li>
            </ul>
        </div>
    );
};

export default Sidebar;
