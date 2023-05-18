import { links } from "./data/shareHoldersMeetingsLink"

export default function handler(req, res) {
   res.status(200).json(links)
}
