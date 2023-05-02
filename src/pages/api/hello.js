// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const users = [
  {name: 'Jonh', lastname: 'Doe'},
  {name: 'Gogi', lastname: 'Vino'},
]

export default function handler(req, res) {
  res.status(200).json(users)
}
