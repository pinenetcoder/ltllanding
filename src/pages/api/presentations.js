import { presentationsLinks } from "./data/presentationsLinks"

export default function handler(req, res) {
   res.status(200).json(presentationsLinks)
}