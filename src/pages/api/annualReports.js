import { annualReportsLinks } from "./data/annualReportsLinks"

export default function handler(req, res) {
   res.status(200).json(annualReportsLinks)
}