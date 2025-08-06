import { useState } from "react";

export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "Intern",
    reason: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/applicants", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert("Application submitted successfully!");
        setFormData({ name: "", email: "", phone: "", role: "Intern", reason: "" });
      } else {
        alert("Submission failed.");
      }
    } catch (err) {
      alert("Error connecting to server.");
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-6">Intern/Volunteer Registration</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {["name", "email", "phone"].map((field) => (
          <input
            key={field}
            type="text"
            name={field}
            value={formData[field]}
            onChange={handleChange}
            placeholder={`Your ${field}`}
            required
            className="w-full p-2 border rounded"
          />
        ))}
        <select
          name="role"
          value={formData.role}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        >
          <option value="Intern">Intern</option>
          <option value="Volunteer">Volunteer</option>
        </select>
        <textarea
          name="reason"
          value={formData.reason}
          onChange={handleChange}
          placeholder="Why do you want to join?"
          required
          className="w-full p-2 border rounded"
        />
        <button
          type="submit"
          className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
