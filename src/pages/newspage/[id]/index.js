import Link from "next/link"
import { useRouter } from "next/router"
import IndexLayout from "@/Layouts/IndexLayout"
import { useEffect, useState } from "react"


export default function NewsPage() {
  const [newsItem, setNewsItem] = useState({})

  const router = useRouter()
  const {id} = router.query

  useEffect(()=> {
    fetch(`/api/news`)
    .then(response => response.json())
    .then(data => {
      let singleNews = data.filter(news => {
        return news.id == id
      })[0]
      setNewsItem(singleNews)
    })
  }, [])

  return (
    <>
    <IndexLayout>
      <main>
        <div className="container">
        <h1>This is a single No {id} news Page </h1>
        <p>{newsItem.text}</p>
        <Link href="/">Back</Link>
        </div>
      </main>
    </IndexLayout>
    </>
  )
}