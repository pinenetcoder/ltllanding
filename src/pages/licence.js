import styles from "@/styles/licence.module.scss"
import IndexLayout from "@/Layouts/IndexLayout"

export default function Licence() {
   return (
      <IndexLayout>
         <main>
            <section className={styles.licenceSection}>
               <div className={styles.licenceWrapper}>
                  <h3>Licencija</h3>
                  <p>Operating under the legal name of LTL Kredito unija, the company is registered 
                     in Lithuania (No. 302791356), licensed and supervised as the credit union by
                      the Bank of Lithuania (license No. 80).
                  </p>
                  
               </div>
            </section>
            <section className={styles.imgSection}>
               <div className={styles.imgWrapper}>
                  <div className={styles.img}></div>
               </div>
            </section>
         </main>
      </IndexLayout>
   )
}