import styles from "@/styles/esg.module.scss"
import IndexLayout from "@/Layouts/IndexLayout"
import Link from "next/link"
import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import lt from '@/locales/lt'
import en from '@/locales/en'


export default function Esg() {
   const router = useRouter();
   const t = router.locale === 'lt' ? lt : en
 
   const [annualLink, setAnnualLinks] = useState([]);
   const [activeAnnualLinks, setActiveLinks] = useState([]);

   useEffect(() => {
      const getLinks = async () => {
         const resp = await fetch(`/api/annualReports`)
         const data = await resp.json();
         setAnnualLinks(data.reverse())
         setActiveLinks(data[0].links)
      }
      getLinks()
   }, [])

   function tabHandler(e) {
      let idx = annualLink.findIndex((year) => year.uid == e.target.dataset.id)
      let temp = [...annualLink]
      temp.forEach((year, index) => {
         if (idx == index) year.active = true
         else year.active = false
      })
      setAnnualLinks(temp)
      setActiveLinks(temp[idx].links)
   }
   
   return (
      <IndexLayout>
         <main>
            <section className={styles.esgHeroPage}>
               <div className={styles.container}>
                  <h1 className={styles.egsHeroTitle}>{t.esg.pageTitle}</h1>
                  <div className={styles.esgHeroBlock}>
                     <div className={styles.esgHeroMission}>
                        <div className={styles.missionTitle}>{t.esg.heroBlock.title1}</div>
                        <div className={styles.missionDescription}>{t.esg.heroBlock.description1}</div>
                     </div>
                     <div className={styles.esgHeroVision}>
                        <div className={styles.visionTitle}>{t.esg.heroBlock.title2}</div>
                        <div className={styles.visionDescription}>{t.esg.heroBlock.description2}</div>
                     </div>
                  </div>
               </div>
            </section>
            <section className={styles.innerNavigationSection}>
               <div className={styles.innerNavigationLinkList}>
                  <Link className={styles.innerNavLink} href="#enviromentalProtection">{t.esg.innerLinkBlock.link1}</Link>
                  <Link className={styles.innerNavLink} href="#socialPolitics">{t.esg.innerLinkBlock.link2}</Link>
                  <Link className={styles.innerNavLink} href="#managment">{t.esg.innerLinkBlock.link3}</Link>
                  <Link className={styles.innerNavLink} href="#esgPolicy">{t.esg.innerLinkBlock.link4}</Link>
                  <Link className={styles.innerNavLink} href="#reports">{t.esg.innerLinkBlock.link5}</Link>
               </div>
          </section>
          <section className={styles.enviromentalProtectionSection}>
            <div className={styles.container}>
               <div id="enviromentalProtection" className={styles.enviromentalProtectionBlock}>
                  <div className={styles.enviromentalProtectionImg}></div>
                  <div className={styles.enviromentalProtectionArticle}>
                     <h3>{t.esg.articleBlock.article2.title}</h3>
                     <p>{t.esg.articleBlock.article2.text}</p>
                     <div className="actionButtonBlock">
                        <Link href="/" className="light-green-action-button">{t.esg.learnMoreButton}</Link> 
                     </div>
                  </div>
               </div>
               <div id="socialPolitics" className={styles.enviromentalProtectionBlock}>
                  <div className={styles.enviromentalProtectionArticle}>
                     <h3>{t.esg.articleBlock.article3.title}</h3>
                     <p>{t.esg.articleBlock.article3.text}</p>
                     <div className="actionButtonBlock">
                        <Link href="/" className="light-green-action-button">{t.esg.learnMoreButton}</Link> 
                     </div>
                  </div>
                  <div className={styles.enviromentalProtectionImg}></div>
               </div>
               <div id="managment" className={styles.enviromentalProtectionBlock}>
                  <div className={styles.enviromentalProtectionImg}></div>
                  <div className={styles.enviromentalProtectionArticle}>
                     <h3>{t.esg.articleBlock.article4.title}</h3>
                     <p>{t.esg.articleBlock.article4.text}</p>
                     <div className="actionButtonBlock">
                        <Link href="/" className="light-green-action-button">{t.esg.learnMoreButton}</Link> 
                     </div>
                  </div>
               </div>
               <div id="esgPolicy" className={styles.enviromentalProtectionBlock}>
                  <div className={styles.enviromentalProtectionArticle}>
                     <h3>{t.esg.articleBlock.article1.title}</h3>
                     <p>{t.esg.articleBlock.article1.text}</p>
                     <div className="actionButtonBlock">
                        <Link href="/" className="light-green-action-button">{t.esg.learnMoreButton}</Link> 
                     </div>
                  </div>
                  <div className={styles.enviromentalProtectionImg}></div>
               </div>
            </div>
          </section>
          <section id="reports" className={styles.annualReportsSection}>
            <div className={styles.annualReportsWrapper}>
               <h3>{t.esg.annualEsgReport.title}</h3>
               <ul className={styles.annualReportsLinks}>
                     {annualLink.map((year, idx) => {
                        return (
                           <li data-id={year.uid}
                              onClick={(e) => { tabHandler(e) }}
                              key={idx}
                              className={year.active ? 'active-year-tab' : ''}
                           >
                           {year.year}
                           </li>
                        )
                     })}
               </ul>
               <div className={styles.annualLintsReport}>
                  {activeAnnualLinks.map((link, idx) => {
                     return (
                        <div key={idx} className={styles.reportsBlock}>
                           <div className={styles.annualLintsReportImg}></div>
                           <Link target="_blank" href={link.linkUrl} className={styles.linkStyle}>{link.linkName}</Link>
                        </div>
                     )
                  })}
               </div>
            </div>
          </section>
         </main>
      </IndexLayout>
   )
}