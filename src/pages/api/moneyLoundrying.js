import { links } from "./data/moneyLoundryingLinks"

export default function handler(req, res) {
   res.status(200).json(links)
}