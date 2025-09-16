import React from "react";

const TeamspaceCard = ({ space }) => {
    const { name, description, members, updated, initial, color } = space;

    return (
        <div className="flex justify-between items-center bg-gray-800 p-6 rounded-xl shadow-lg">
            <div className="flex items-center">
                <span
                    className={`bg-${color}-500 text-white rounded-full w-10 h-10 flex items-center justify-center mr-4`}
                >
                    {initial}
                </span>
                <div>
                    <div className={`text-${color}-400 text-lg`}>{name}</div>
                    <p className="text-gray-400 text-sm">{description}</p>
                </div>
            </div>
            <div className="text-gray-400 text-sm">
                {members} members • Updated {updated}
            </div>
        </div>
    );
};

export default TeamspaceCard;
