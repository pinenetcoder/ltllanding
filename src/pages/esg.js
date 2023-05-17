import styles from "@/styles/esg.module.scss"
import IndexLayout from "@/Layouts/IndexLayout"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function Esg() {
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
                  <h1 className={styles.egsHeroTitle}>ESG</h1>
                  <div className={styles.esgHeroBlock}>
                     <div className={styles.esgHeroMission}>
                        <div className={styles.missionTitle}>Mission</div>
                        <div className={styles.missionDescription}>Unlocking Financial Inclusion - Our Mission, Your Future.
                        </div>
                     </div>
                     <div className={styles.esgHeroVision}>
                        <div className={styles.visionTitle}>Vision</div>
                        <div className={styles.visionDescription}>Our vision is to create a world where everyone has access
                        to financial services, enabling them to build a brighter future for themselves and their 
                        communities. We strive to unlock financial inclusion by empowering individuals to make informed 
                        decisions about their financial wellbeing.
                        </div>
                     </div>
                  </div>
               </div>
            </section>
            <section className={styles.innerNavigationSection}>
               <div className={styles.innerNavigationLinkList}>
                  <Link className={styles.innerNavLink} href="#enviromentalProtection">Aplinkosauga</Link>
                  <Link className={styles.innerNavLink} href="#socialPolitics">Socialine politika</Link>
                  <Link className={styles.innerNavLink} href="#managment">Valdymas</Link>
                  <Link className={styles.innerNavLink} href="#reports">ESG ataskaitos</Link>
               </div>
          </section>
          <section className={styles.enviromentalProtectionSection}>
            <div className={styles.container}>
               <div id="enviromentalProtection" className={styles.enviromentalProtectionBlock}>
                  <div className={styles.enviromentalProtectionImg}></div>
                  <div className={styles.enviromentalProtectionArticle}>
                     <h3>Aplinkosauga</h3>
                     <p>We are striving to create a more equitable financial system that balances the interests of 
                        our company, our customers and our society. We allocate resources and provide education to 
                        empower customers to understand the banking system and make informed decisions.
                     </p>
                     <div className="actionButtonBlock">
                        <Link href="/" className="light-green-action-button">Learn more</Link> 
                     </div>
                  </div>
               </div>
               <div id="socialPolitics" className={styles.enviromentalProtectionBlock}>
                  <div className={styles.enviromentalProtectionArticle}>
                     <h3>Socialine politika</h3>
                     <p>We are striving to create a more equitable financial system that balances the interests of 
                        our company, our customers and our society. We allocate resources and provide education to 
                        empower customers to understand the banking system and make informed decisions.
                     </p>
                     <div className="actionButtonBlock">
                        <Link href="/" className="light-green-action-button">Learn more</Link> 
                     </div>
                  </div>
                  <div className={styles.enviromentalProtectionImg}></div>
               </div>
               <div id="managment" className={styles.enviromentalProtectionBlock}>
                  <div className={styles.enviromentalProtectionImg}></div>
                  <div className={styles.enviromentalProtectionArticle}>
                     <h3>Valdymas</h3>
                     <p>We are striving to create a more equitable financial system that balances the interests of 
                        our company, our customers and our society. We allocate resources and provide education to 
                        empower customers to understand the banking system and make informed decisions.
                     </p>
                     <div className="actionButtonBlock">
                        <Link href="/" className="light-green-action-button">Learn more</Link> 
                     </div>
                  </div>
               </div>
            </div>
          </section>
          <section id="reports" className={styles.annualReportsSection}>
            <div className={styles.annualReportsWrapper}>
               <h3>Metinės ESG ataskaitos</h3>
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