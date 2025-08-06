import mongoose from "mongoose";

const applicantSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  role: String,
  reason: String,
}, { timestamps: true });

export default mongoose.model("Applicant", applicantSchema);
