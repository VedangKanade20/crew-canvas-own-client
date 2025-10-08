export default function TeamspaceHeader({ teamspace }) {
    return (
        <div className="mb-4">
            <h1 className="text-3xl font-semibold">
                Welcome to {teamspace.teamspaceName}
            </h1>
            <p className="text-gray-400">
                Owner: {teamspace.OwnerId?.username || "Unknown"}
            </p>
        </div>
    );
}
