import { links } from "./data/factsheetsLinks"

export default function handler(req, res) {
   res.status(200).json(links)
}