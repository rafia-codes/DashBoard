import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white px-6 py-3 flex justify-between">
      <div className="font-bold">VolunteerApp</div>
      <div className="space-x-4">
        <Link to="/" className="hover:text-gray-300">Home</Link>
        <Link to="/register" className="hover:text-gray-300">Register</Link>
        <Link to="/admin-login" className="hover:text-gray-300">Admin</Link>
      </div>
    </nav>
  );
}
