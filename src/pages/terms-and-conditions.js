import styles from "@/styles/termsAndConditions.module.scss"
import IndexLayout from "@/Layouts/IndexLayout"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function temrsAndComditions() {
   const [links, setLinks] = useState([])

   useEffect(() => {
      const getLinks = async () => {
         const resp = await fetch(`/api/tnc`)
         const data = await resp.json();
         setLinks(data)
      }
      getLinks()
   }, [])

   function kuzia(e) {
      let uid = e.target.dataset.uid;
      const idx = links.findIndex(link => link.uid == uid)
      console.log(idx)
   }

   const tabs = links.map((tab, idx) => {
      return (
         <div data-id={tab.uid} onClick={(e) => { kuzia(e) }} key={idx} className={tab.active ? 'active' : ''}>{tab.tabName}</div>
      )
   })

   return (
      <>
         <IndexLayout>
            <main>
               {tabs}
            </main>
            {/*<main>
               <section className={styles.termsAndConditionsSection}>
                  <div className={styles.termsAndConditionsBlock}>
                     <h1>Terms & Conditions</h1>
                  </div>
                  <div className={styles.innerNavigationLinkList}>
                     <Link className={styles.innerNavLink} href="/paccounts">Accounts</Link>
                     <Link className={styles.innerNavLink} href="/termsdeposit">Term deposits</Link>
                     <Link className={styles.innerNavLink} href="/payments">Payments</Link>
                     <Link className={styles.innerNavLink} href="/">Loans to private individuals</Link>
                     <Link className={styles.innerNavLink} href="/">Loans to corporates</Link>
                  </div>
                  <div className={styles.termsAndConditionsLinks}>
                     <ul>
                        <li><Link  target="_blank" href="https://www.handbook.fca.org.uk/handbook/GEN.pdf">General provisions</Link></li>
                        <li>Identification and representation</li>
                        <li>Banking secret and processing customer data</li>
                        <li>Entry into agreements</li>
                        <li>Exchange of information between bank and customer</li>
                        <li>Information about accounts and transactions</li>
                     </ul>
                     <ul>
                        <li>General provisions</li>
                        <li>Identification and representation</li>
                        <li>Banking secret and processing customer data</li>
                        <li>Entry into agreements</li>
                        <li>Exchange of information between bank and customer</li>
                        <li>Information about accounts and transactions</li>
                     </ul>
                  </div>
               </section>
            </main>*/}
         </IndexLayout>
      </>
   )
}