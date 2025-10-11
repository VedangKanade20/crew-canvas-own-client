export default function TeamspaceHeader({ teamspace }) {
    console.log("Bhai TS", teamspace);
    return (
        <div className="mb-4">
            <h1 className="text-3xl font-semibold">
                Welcome to {teamspace?.teamspaceName || "Unnamed Teamspace"}
            </h1>
            <p className="text-gray-400">
                Owner: {teamspace.members?.[0]?.user?.name || "Unknown"}
            </p>
        </div>
    );
}
