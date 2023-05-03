// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const news = [
  {id: '1', title: 'News Number 1', previewText: "This is short preview text for news list page", text: 'This is full size text for separate news page! Enjoy your reading'},
  {id: '2', title: 'News Number 2', previewText: "This is short preview text for news list page", text: 'This is full size text for separate news page! Enjoy your reading'},
  {id: '3', title: 'News Number 3', previewText: "This is short preview text for news list page", text: 'This is full size text for separate news page! Enjoy your reading'},
  {id: '4', title: 'News Number 4', previewText: "This is short preview text for news list page", text: 'This is full size text for separate news page! Enjoy your reading'},
  {id: '5', title: 'News Number 5', previewText: "This is short preview text for news list page", text: 'This is full size text for separate news page! Enjoy your reading'},
  {id: '6', title: 'News Number 6', previewText: "This is short preview text for news list page", text: 'This is full size text for separate news page! Enjoy your reading'},
  {id: '7', title: 'News Number 7', previewText: "This is short preview text for news list page", text: 'This is full size text for separate news page! Enjoy your reading'},
]

export default function handler(req, res) {
  res.status(200).json(news)
}
