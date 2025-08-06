import Applicant from "../models/applicant.js";

// POST /api/applicants
export const submitApplication = async (req, res) => {
  try {
    const applicant = new Applicant(req.body);
    await applicant.save();
    res.status(201).json({ message: "Application submitted!" });
  } catch (err) {
    res.status(500).json({ error: "Failed to submit application." });
  }
};

// GET /api/applicants
export const getApplicants = async (req, res) => {
  try {
    const applicants = await Applicant.find().sort({ createdAt: -1 });
    res.json(applicants);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch applicants." });
  }
};
