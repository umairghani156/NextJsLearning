export default function NotFound() {
    return (
        <div className="text-center text-3xl h-screen flex flex-col justify-center">
            <h1 className="text-5xl font-bold text-red-500">Not Found</h1>
            <p className="text-2xl text-white-500">Could not find requested resource</p>
        </div>
    );
}