import styles from '@/styles/news[id].module.scss'
import Link from "next/link"
import { useRouter } from "next/router"
import IndexLayout from "@/Layouts/IndexLayout"
import { useEffect, useState } from "react"

export default function NewsPage() {
  const [newsItem, setNewsItem] = useState({})
  const router = useRouter()
  const {id} = router.query

  useEffect(() => {
    
    if (router.isReady) {
      const getSingleNews = async () => {
        const resp = await fetch(`/api/news`)
        const data = await resp.json()
        const current = data.filter(news => {
          return news.id == id
        })[0]
        setNewsItem(current)
      }
      
      getSingleNews()
    }

  }, [router.isReady])

  
  return (
    <>
    <IndexLayout>
      <main className={styles.newsPageMain}>
        <div className="container">
        <h1>News</h1>

        <div className={styles.yearlyLinksBlock}>
          <Link className={styles.yearlyLink} href="/news">2023</Link>
          <Link className={styles.yearlyLink} href="/news">2022</Link>
          <Link className={styles.yearlyLink} href="/news">2021</Link>
          <Link className={styles.yearlyLink} href="/news">2020</Link>
          <Link className={styles.yearlyLink} href="/news">2019</Link>
          <Link className={styles.yearlyLink} href="/news">2018</Link>
        </div>
        <div className={styles.newsDate}>{newsItem.date}</div>
        <h3 className={styles.newsTitle}>{newsItem.title}</h3>
        <p className={styles.newsText}>{newsItem.text}</p>
      
        <Link className={styles.backToNewsLink} href="/#news">&#x3c; Back to News</Link>
        </div>
      </main>
    </IndexLayout>
    </>
  )
}