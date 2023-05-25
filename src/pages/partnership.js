import styles from "@/styles/partnership.module.scss"
import IndexLayout from "@/Layouts/IndexLayout"
import Link from "next/link"
import { useEffect, useState } from "react";
import { useRouter } from "next/router"
import lt from '@/locales/lt'
import en from '@/locales/en'


export default function Partnership() {
   const router = useRouter();
   const t = router.locale === 'lt' ? lt : en
 

   const [links, setLinks] = useState([]);
   const [activeTabLinks, setActiveTabLinks] = useState([]);

   useEffect(() => {
      const getLinks = async () => {
         const resp = await fetch(`/api/moneyLoundrying`)
         const data = await resp.json();
         setLinks(data)
         setActiveTabLinks(data[0].links)
         console.log(data)
      }
      getLinks()
   }, [])

   function TabHanler(e) {
      let idx = links.findIndex((tab) => tab.uid == e.target.dataset.id)
      let temp = [...links]
      temp.forEach((tab, index) => {
         if (idx == index) tab.active = true
         else tab.active = false
      })
      setLinks(temp)
      setActiveTabLinks(temp[idx].links)
   }

   return (
      <IndexLayout>
         <main>
            <section className={styles.partnershipSection}>
               <div className={styles.partnershipWrapper}>
                  <h1>{t.partnership.pageTitle}</h1>
                     <p>{t.partnership.description}</p>
               </div>
            </section>
            <section className={styles.articleSection}>
               <div className={styles.articleBlock}>
                  <p>{t.partnership.articleBlock.article1}</p>
                  <p>{t.partnership.articleBlock.article2}</p>
                  <p>{t.partnership.articleBlock.article3}</p>
               </div>
            </section>
         </main>
      </IndexLayout>
   )
}