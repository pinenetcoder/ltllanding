import styles from "@/styles/money-loundrying.module.scss"
import IndexLayout from "@/Layouts/IndexLayout"
import Link from "next/link"

export default function MoneyLoundrying() {
   return (
      <IndexLayout>
         <main>
            <section className={styles.moneyLoundryingSection}>
               <div className={styles.moneyLoundryingWrapper}>
                  <h3>Pinigų plovimo prevencija</h3>
                  <div className={styles.innerNavigationLinkList}>
                     <Link className={styles.innerNavLink} href="#">Ketvirčio ataskaita</Link>
                     <Link className={styles.innerNavLink} href="#">Metinė ataskaita</Link>
                     <Link className={styles.innerNavLink} href="#">Factsheet</Link>
                     <Link className={styles.innerNavLink} href="#">Prezentacijos</Link>
                     <Link className={styles.innerNavLink} href="#">Kontaktai</Link>
                     <Link className={styles.innerNavLink} href="#">Finansinis kalendorius</Link>
                  </div>
               </div>
            </section>
         </main>
      </IndexLayout>
   )
}