import styles from "@/styles/open-banking.module.scss"
import IndexLayout from "@/Layouts/IndexLayout"
import Link from "next/link"
import { useRouter } from "next/router"
import lt from '@/locales/lt'
import en from '@/locales/en'

export default function OpenBanking() {
   const router = useRouter();
   const t = router.locale === 'lt' ? lt : en

   return (
      <IndexLayout>
         <main>
         <section className={styles.openBankingPageWrapper}>
            <div className={styles.copenBankingPageList}>
               <div className={styles.openBankingHeroItem}>
                  <h1 className={styles.openBankingTitle}>{t.openBanking.pageTitle}</h1>
                  <div className={styles.openBankingPageDescription}>
                     <p>{t.openBanking.heroBlock.description}</p>
                     <ul>
                        <li>{t.openBanking.heroBlock.bullet1}</li>
                        <li>{t.openBanking.heroBlock.bullet2}</li>
                        <li>{t.openBanking.heroBlock.bullet3}</li>
                     </ul>
                  </div>
               </div>
            </div>
         </section>
         <section className={styles.openBankingArticlesSection}>
            <div className={styles.openBankingArticlesWrapper}>
               <div className={styles.openBankingArticlesBlock}>
                  <h4>{t.openBanking.articleBlock.article1.title}</h4>
                  <p>{t.openBanking.articleBlock.article1.text}</p>
               </div>
               <div className={styles.openBankingArticlesBlock}>
                  <h4>{t.openBanking.articleBlock.article2.title}</h4>
                  <p>{t.openBanking.articleBlock.article2.text}</p>
               </div>
               <div className={styles.openBankingArticlesBlock}>
                  <h4>{t.openBanking.articleBlock.article3.title}</h4>
                  <p>{t.openBanking.articleBlock.article3.text}</p>
               </div>
            </div>
         </section>
         <section className={styles.openBankingContactsSection}>
            <div className={styles.openBankingContactsWrapper}>
               <h4>{t.openBanking.contactBlock.title}</h4>
               <p>
                  {t.openBanking.contactBlock.text}<Link href="/">openbanking@ltlku.lt.</Link> 
               </p>
            </div>
         </section>
         </main>
      </IndexLayout>
   )
}