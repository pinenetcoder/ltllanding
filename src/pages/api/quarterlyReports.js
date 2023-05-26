import { links } from "./data/quarterlyReportsLinks"

export default function handler(req, res) {
   res.status(200).json(links)
}