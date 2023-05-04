import styles from '@/styles/news[id].module.scss';
import Link from "next/link";
import { useRouter } from "next/router";
import IndexLayout from "@/Layouts/IndexLayout";
import { useEffect, useState } from "react";

export default function NewsPage() {
  const [newsItem, setNewsItem] = useState({});
  const router = useRouter();
  const {id} = router.query;

  const backToYearHandler = (e) => {
    localStorage.setItem('backToYearIdx', e.target.dataset.idx);
    router.push(`/news`)
  };

  useEffect(() => {
    if (router.isReady) {
      const getSingleNews = async () => {
        const resp = await fetch(`/api/news`);
        const data = await resp.json();
        const current = data.filter(news => {
          return news.id == id
        })[0];
        setNewsItem(current);
      }
      getSingleNews()
    }

  }, [router.isReady])

  return (
    <>
    <IndexLayout>
      <main className={styles.newsPageMain}>
          <div className={styles.silngleNewsWrapper}>
            <h1>News</h1>

            <div className={styles.yearlyLinksBlock}>
              <span data-idx="0" className={styles.yearlyLink} onClick={(e)=>backToYearHandler(e)}>2023</span>
              <span data-idx="1" className={styles.yearlyLink} onClick={(e)=>backToYearHandler(e)}>2022</span>
              <span data-idx="2" className={styles.yearlyLink} onClick={(e)=>backToYearHandler(e)}>2021</span>
              <span data-idx="3" className={styles.yearlyLink} onClick={(e)=>backToYearHandler(e)}>2020</span>
              <span data-idx="4" className={styles.yearlyLink} onClick={(e)=>backToYearHandler(e)}>2019</span>
              <span data-idx="5" className={styles.yearlyLink} onClick={(e)=>backToYearHandler(e)}>2018</span>
            </div>
            <div className={styles.newsDate}>{newsItem.date}</div>
            <h3 className={styles.newsTitle}>{newsItem.title}</h3>
            <p className={styles.newsText}>{newsItem.text}</p>
            <Link className={styles.backToNewsLink} href="/news">&#x3c; Back to News</Link>
          </div>
      </main>
    </IndexLayout>
    </>
  )
}