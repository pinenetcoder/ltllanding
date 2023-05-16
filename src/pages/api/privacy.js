import { privacyLinks } from "./data/privacyLinks"

export default function handler(req, res) {
   res.status(200).json(privacyLinks)
}
