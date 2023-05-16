import styles from "@/styles/termsAndConditions.module.scss"
import IndexLayout from "@/Layouts/IndexLayout"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function TemrsAndConditions() {
   const [links, setLinks] = useState([]);
   const [activeTabLinks, setActiveTabLinks] = useState([]);

   useEffect(() => {
      const getLinks = async () => {
         const resp = await fetch(`/api/tnc`)
         const data = await resp.json();
         setLinks(data)
         setActiveTabLinks(data[0].links)
      }
      getLinks()
   }, [])

   function tabHandler(e) {
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
            <section className={styles.termsAndConditionsSection}>
               <div className={styles.termsAndConditionsBlock}>
                  <h1>Terms & Conditions</h1>
               </div>
               <div className={styles.innerNavigationLinkList}>
                  {links.map((tab, idx) => {
                     return (
                        <div data-id={tab.uid} onClick={(e) => { tabHandler(e) }} key={idx} className={tab.active ? 'active-tnc-tab' : ''}>{tab.tabName}</div>
                     )
                  })}
               </div>
               <div className={styles.termsAndConditionsLinks}>
                  <ul>
                     {activeTabLinks.map((link, idx) => {
                        return (
                           <li key={idx}>
                              <Link target="_blank" href={link.linkUrl} className={styles.linkStyle}>{link.linkName}</Link>
                           </li>
                        )
                     })}
                  </ul>
               </div>
            </section>
         </main>
      </IndexLayout>
   )
}