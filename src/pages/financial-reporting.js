import styles from "@/styles/financial-reporting.module.scss"
import IndexLayout from "@/Layouts/IndexLayout"
import Link from "next/link"
import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import lt from '@/locales/lt'
import en from '@/locales/en'

export default function FinancialReporting() {
   const router = useRouter();
   const t = router.locale === 'lt' ? lt : en
 
   const [quarterLinks, setQuarterLinks] = useState([]);
   const [activeQuarterList, setActiveQuarterList] = useState([]);
   const [annualLink, setAnnualLinks] = useState([]);
   const [activeAnnualLinks, setActiveLinks] = useState([]);
   const [factSheetList, setFactSheetList] = useState([]);
   const [activeFactSheetList, setActiveFactSheetList] = useState([]);
   const [presentationsList, setPresentationsList] = useState([]);
   const [activePresentationsList, setActivePresentationsList] = useState([]);

   useEffect(() => {
      const getTabLinks = async () => {
         const resp = await fetch(`/api/quarterlyReports`)
         const data = await resp.json();
         setQuarterLinks(data)
         setActiveQuarterList(data[0].quarters)
      }
      const getAnnualLinks = async () => {
         const resp = await fetch(`/api/annualReports`)
         const data = await resp.json();
         setAnnualLinks(data.reverse())
         setActiveLinks(data[0].links)
      }
      const getFactsheetsList = async () => {
         const resp = await fetch(`/api/factsheets`)
         const data = await resp.json();
         setFactSheetList(data)
         setActiveFactSheetList(data[0].factsheets)
      }
      const getPresentationsList = async () => {
         const resp = await fetch(`/api/presentations`)
         const data = await resp.json();
         setPresentationsList(data)
         setActivePresentationsList(data[0].links)
      }
      getTabLinks()
      getAnnualLinks()
      getFactsheetsList()
      getPresentationsList()
   }, [])

   function QuartersTabHandler(e) {
      let idx = quarterLinks.findIndex((tab) => tab.uid == e.target.dataset.id)
      let temp = [...quarterLinks]
      temp.forEach((tab, index) => {
         if (idx == index) tab.active = true
         else tab.active = false
      })
      setQuarterLinks(temp)
      setActiveQuarterList(temp[idx].quarters)
   }

   function AnnualTabHandler(e) {
      let idx = annualLink.findIndex((year) => year.uid == e.target.dataset.id)
      let temp = [...annualLink]
      temp.forEach((year, index) => {
         if (idx == index) year.active = true
         else year.active = false
      })
      setAnnualLinks(temp)
      setActiveLinks(temp[idx].links)
   }

   function factsheetTabHandler(e) {
      let idx = factSheetList.findIndex((year) => year.uid == e.target.dataset.id)
      let temp = [...factSheetList]
      temp.forEach((year, index) => {
         if (idx == index) year.active = true
         else year.active = false
      })
      setFactSheetList(temp)
      setActiveFactSheetList(temp[idx].factsheets)
   }

   function presentationsTabHandler(e) {
      let idx = presentationsList.findIndex((year) => year.uid == e.target.dataset.id)
      let temp = [...presentationsList]
      temp.forEach((year, index) => {
         if (idx == index) year.active = true
         else year.active = false
      })
      setPresentationsList(temp)
      setActivePresentationsList(temp[idx].links)
   }

   return (
      <IndexLayout>
         <main>
            <section className={styles.financialReportingSection}>
               <h3 className={styles.financialReportingTitle}>{t.finacialReporting.title}</h3>
               <div className={styles.innerNavigationLinkList}>
                  <Link className={styles.innerNavLink} href="#quarterReports">{t.finacialReporting.innerLinkBlock.quarterlyReports}</Link>
                  <Link className={styles.innerNavLink} href="#annualReports">{t.finacialReporting.innerLinkBlock.annualReporting}</Link>
                  <Link className={styles.innerNavLink} href="#factsheets">{t.finacialReporting.innerLinkBlock.factsheets}</Link>
                  <Link className={styles.innerNavLink} href="#presentations">{t.finacialReporting.innerLinkBlock.presentations}</Link>
                  <Link className={styles.innerNavLink} href="#contacts">{t.finacialReporting.innerLinkBlock.contacts}</Link>
                  <Link className={styles.innerNavLink} href="#calendar">{t.finacialReporting.innerLinkBlock.finacialCalendar}</Link>
               </div>
            </section>
            <section id="quarterReports" className={styles.ReportsSection}>
               <div className={styles.ReportsWrapper}>
                  <h3 className={styles.sectionTitle}>{t.finacialReporting.quarterlyReports}</h3>
                  <div className={styles.tabsList}>
                     {quarterLinks.map((tab, idx) => {
                        return (
                           <div
                              data-id={tab.uid}
                              onClick={(e) => { QuartersTabHandler(e) }}
                              key={idx}
                              className={tab.active ? 'active-tnc-tab' : ''}>{tab.year}
                           </div>
                        )
                     })}
                  </div>
                  <div className={styles.quarterList}>
                     {activeQuarterList.map((quater, idx) => {
                        return (
                           <div key={idx} className={styles.quarterItem}>
                              <h4>{quater.quarterName}</h4>
                              <div className={styles.linkList}>
                                 {quater.quarterLinks.map((link, index) => {
                                    return (
                                       <div className={styles.linksItem}  key={index}>
                                          <div className={styles.iconImg}>
                                             <img src="/assets/images/Pdficon.svg" alt="Pdf IFile" />
                                          </div>
                                             <Link href={link.linkUrl}>{link.linkName}</Link>
                                       </div>
                                    )
                                 })}
                              </div>
                           </div>
                        )
                     })}
                  </div>
               </div>
            </section>
            <section id="annualReports" className={styles.presentationsSection}>
               <div className={styles.presentationsWrapper}>
                  <h3 className={styles.sectionTitle}>{t.finacialReporting.annualReporting}</h3>
                  <ul className={styles.tabsList}>
                     {annualLink.map((year, idx) => {
                        return (
                           <li data-id={year.uid}
                              onClick={(e) => { AnnualTabHandler(e) }}
                              key={idx}
                              className={year.active ? 'active-year-tab' : ''}>
                              {year.year}
                           </li>
                        )
                     })}
                  </ul>
                  <div className={styles.reporstBlockList}>
                     {activeAnnualLinks.map((link, idx) => {
                        return (
                           <div key={idx} className={styles.reportItem}>
                              <img src="assets/images/Pdficon.svg" alt="Pdf File" />
                              <Link target="_blank" href={link.linkUrl} className={styles.linkStyle}>{link.linkName}</Link>
                           </div>
                        )
                     })}
                  </div>
               </div>
            </section>
            <section id="factsheets" className={[styles.ReportsSection, styles.factsheetsSection].join(' ')}>
               <div className={styles.ReportsWrapper}>
                  <h3 className={styles.sectionTitle}>{t.finacialReporting.factsheets}</h3>
                  <div className={styles.tabsList}>
                     {factSheetList.map((tab, idx) => {
                        return (
                           <div
                              data-id={tab.uid}
                              onClick={(e) => { factsheetTabHandler(e) }}
                              key={idx}
                              className={tab.active ? 'active-tnc-tab' : ''}>
                              {tab.year}
                           </div>
                        )
                     })}
                  </div>
                  <div className={styles.quarterList}>
                     {activeFactSheetList.map((quater, idx) => {
                        return (
                           <div key={idx} className={styles.quarterItem}>
                              <h4>{quater.quarterName}</h4>
                              <div className={styles.linkList}>
                                 {quater.quarterLinks.map((link, index) => {
                                    return (
                                       <div className={styles.linksItem} key={index}>
                                          <img className={styles.iconImg} src="/assets/images/Pdficon.svg" alt="Pdf File" />
                                          <Link href={link.linkUrl}>{link.linkName}</Link>
                                       </div>
                                    )
                                 })}
                              </div>
                           </div>
                        )
                     })}
                  </div>
               </div>
            </section>
            <section id="presentations" className={styles.presentationsSection}>
               <div className={styles.presentationsWrapper}>
                  <h3 className={styles.sectionTitle}>{t.finacialReporting.presentations}</h3>
                  <ul className={styles.tabsList}>
                     {presentationsList.map((year, idx) => {
                        return (
                           <li data-id={year.uid}
                              onClick={(e) => { presentationsTabHandler(e) }}
                              key={idx}
                              className={year.active ? 'active-year-tab' : ''}>
                              {year.year}
                           </li>
                        )
                     })}
                  </ul>
                  <div className={styles.reporstBlockList}>
                     {activePresentationsList.map((link, idx) => {
                        return (
                           <div key={idx} className={styles.reportItem}>
                              <img src="assets/images/Pdficon.svg" alt="Pdf File" />
                              <Link target="_blank" href={link.linkUrl} className={styles.linkStyle}>{link.linkName}</Link>
                           </div>
                        )
                     })}
                  </div>
               </div>
            </section>
            <section id="contacts" className={styles.contactsSection}>
               <div className={styles.contactsWrapper}>
                  <h3>{t.finacialReporting.contacts.title}</h3>
                  <div className={styles.contactsBlock}>
                     <div className={styles.img}></div>
                     <div className={styles.contactsInfo}>
                        <h4>{t.finacialReporting.contacts.director}</h4>
                        <p>Ruslanas Telnovas ruslanas.telnovas@ltlku.lt </p>
                        <p>(8 5) 205 5240</p>  
                        <p>(8 5) 205 5241</p>  
                     </div>
                     <div className={styles.contactsInfo}>
                        <h4>{t.finacialReporting.contacts.companyName}</h4>
                        <p>Sporto g. 18, LT-09238, Vilnius Įmonės kodas 302791356</p>
                        <p>(8 5) 205 5240</p>   
                        <p>info@ltlku.lt</p>   
                        
                     </div>
                  </div>
               </div>
            </section>
            <section id="calendar" className={styles.calendarSection}>
               <div className={styles.calendarWrapper}>
                  <h3>{t.finacialReporting.finacialCalendar.title}</h3>
                  <p className={styles.calendarDescription}>{t.finacialReporting.finacialCalendar.description}</p>
                  <div className={styles.calendarBlock}>
                     <p className={styles.date}>15.08.2023 <span>Ex-dividend date (ex-date)</span></p>
                     <p className={styles.date}>15.08.2023 <span>Q1 interim results</span></p>
                     <p className={styles.date}>15.08.2023 <span>April results</span></p>
                     <p className={styles.date}>15.08.2023 <span>May results</span></p>
                     <p className={styles.date}>15.08.2023 <span>Q2 interim results</span></p>
                     <p className={styles.date}>15.08.2023 <span>July results</span></p>
                     <p className={styles.date}>15.08.2023 <span>August results</span></p>
                  </div>
                  </div>
            </section>
         </main>
      </IndexLayout>
   )
}