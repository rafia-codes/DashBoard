import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-[80vh] text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to Volunteer Portal</h1>
      <p className="mb-6">Join us as an intern or volunteer and make an impact!</p>
      <Link
        to="/register"
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
      >
        Register Now
      </Link>
    </div>
  );
}
