export default function handler(req, res) {
    res.status(200).json({ secret: process.env.JWT_SECRET || "No secret found" });
  }
  