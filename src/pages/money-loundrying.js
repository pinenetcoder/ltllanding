import styles from "@/styles/money-loundrying.module.scss"
import IndexLayout from "@/Layouts/IndexLayout"
import Link from "next/link"
import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import lt from '@/locales/lt'
import en from '@/locales/en'


export default function MoneyLoundrying() {
   const router = useRouter();
   const t = router.locale === 'lt' ? lt : en
  
   return (
      <IndexLayout>
         <main>
            <section className={styles.moneyLoundryingSection}>
               <div className={styles.moneyLoundryingWrapper}>
                  <h3>{t.moneyLoundering.title}</h3>
                  <p>{t.moneyLoundering.description}</p>
               </div>
            </section>
         </main>
      </IndexLayout>
   )
}