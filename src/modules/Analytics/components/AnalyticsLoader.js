export const AnalyticsLoader = () => {
    return (
        <div
            role="status"
            className="flex justify-center items-center w-full h-full bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700"
        >
            <span className="sr-only">Loading...</span>
        </div>
    );
};
