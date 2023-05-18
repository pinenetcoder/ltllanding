import styles from "@/styles/share-holders.module.scss";
import IndexLayout from "@/Layouts/IndexLayout";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ShareHolders() {
   const [links, setLinks] = useState([]);
   const [activeTabLinks, setActiveTabLinks] = useState([]);
   const [activeAgendaList, setActiveAgendaList] = useState([]);

   useEffect(() => {
      const getLinks = async () => {
         const resp = await fetch(`/api/shareHoldersMeetings`)
         const data = await resp.json();
         setLinks(data.reverse())
         setActiveTabLinks(data[0].links)
         setActiveAgendaList(data[0].agenda)
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
      setActiveAgendaList(temp[idx].agenda)
   }

   return (
      <IndexLayout>
         <main>
            <section className={styles.shareHoldersSection}>
               <div className={styles.shareHoldersWrapper}>
                  <h2>Akcininkams</h2>
                  <p>Our vision is to create a world where everyone has access to financial services, 
                     enabling them to build a brighter future for themselves and their communities. 
                     We strive to unlock financial inclusion by empowering individuals to make informed 
                     decisions about their financial wellbeing.
                  </p>
                  <h3>Akcininkų susirinkimai</h3>
                  <div>
                     <ul>
                        {links.map((tab, idx) => {
                           return (
                              <li data-id={tab.uid} onClick={(e) => { tabHandler(e) }} key={idx} className={tab.active ? 'active-tnc-tab' : ''}>{tab.year}</li>
                           )
                        })}
                     </ul>
                  </div>
                  <div className={styles.agendaBlock}>
                     <h4>Agenda</h4>
                     {activeAgendaList.map((agenda, idx) => {
                        return (
                           <li key={idx}>
                              {agenda.agendaName}
                           </li>
                        )
                     })}
                  </div>
                  <div className={styles.pdfBlock}>
                     {activeTabLinks.map((link, idx) => {
                        return (
                           <li key={idx}>
                              <Link target="_blank" href={link.linkUrl} className={styles.linkStyle}>{link.linkName}</Link>
                           </li>
                        )
                     })}
                  </div>
               </div>
            </section>
            <section className={styles.contactsSection}>
               <div className={styles.contactsWrapper}>
                  <h3>Kontaktai</h3>
                  <div className={styles.contactsBlock}>
                     <div className={styles.img}></div>
                     <div className={styles.contactsInfo}>
                        <h4>Direktorius</h4>
                        <p>Ruslanas Telnovas
                           ruslanas.telnovas@ltlku.lt
                           (8 5) 205 5240
                           (8 5) 205 5241
                        </p>
                     </div>
                     <div className={styles.contactsInfo}>
                        <h4>LTL Kredito Unija</h4>
                        <p>Sporto g. 18, LT-09238, Vilnius Įmonės kodas 302791356
                           (8 5) 205 5240
                           info@ltlku.lt
                        </p>
                     </div>
                  </div>
               </div>
            </section>
         </main>
      </IndexLayout>
   )
}