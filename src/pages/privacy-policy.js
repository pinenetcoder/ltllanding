import styles from "@/styles/privacy-policy.module.scss"
import IndexLayout from "@/Layouts/IndexLayout"
import { useEffect, useState } from "react"
import Link from "next/link"


export default function PrivacyPolicy() {
   const [links, setLinks] = useState([]);

   useEffect(() => {
      const getLinks = async () => {
         const resp = await fetch(`/api/privacy`)
         const data = await resp.json();
         setLinks(data)
      }
      getLinks()
   }, [])

   return (
      <IndexLayout>
         <main>
         <section className={styles.privacyPolicySection}>
            <div className={styles.privacyPolicyBlock}>
               <h1>Privacy policy & Cookies</h1>
            </div>
            <div className={styles.privacyPolicyLinks}>
               <ul>
                  {links.map((link, idx) => {
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