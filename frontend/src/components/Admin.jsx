import { useEffect, useState } from "react";

export default function Admin() {
  const [applicants, setApplicants] = useState([]);

  useEffect(() => {
    const isAdmin = localStorage.getItem("admin-auth");
    if (!isAdmin) {
      navigate("/admin-login");
    }
    const fetchApplicants = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/applicants");
        const data = await res.json();
        setApplicants(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchApplicants();
  }, []);

  return (
    <div className="max-w-4xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-6">Applicant List</h2>
      <table className="w-full border">
        <thead className="bg-gray-100">
          <tr>
            <th className="border p-2">Name</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Phone</th>
            <th className="border p-2">Role</th>
            <th className="border p-2">Reason</th>
          </tr>
        </thead>
        <tbody>
          {applicants.map((a, i) => (
            <tr key={i} className="text-center">
              <td className="p-2 border">{a.name}</td>
              <td className="p-2 border">{a.email}</td>
              <td className="p-2 border">{a.phone}</td>
              <td className="p-2 border">{a.role}</td>
              <td className="p-2 border">{a.reason}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
