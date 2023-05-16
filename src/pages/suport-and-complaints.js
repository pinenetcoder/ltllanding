import styles from "@/styles/suport-and-complaints.module.scss"
import IndexLayout from "@/Layouts/IndexLayout"
import Link from "next/link"
import Form from "@/components/Form"
import Accordion from "@/components/Accordion"

export default function SuportAndComplaints() {
   return (
      <IndexLayout>
         <main>
            <section className={styles.SuportAndComplaintsHeroPage}>
               <div className={styles.SuportAndComplaintsHeroTitle}>
                  <h1 className="page-title">Support & Complaints</h1>
               </div>
               <div className={styles.SuportAndComplaintsHeroBlock}>
                  <div className={styles.imgBlock}>img</div>
                  <div className={styles.SuportAndComplaintsHeroBlockCredencials}>
                     <p>Our vision is to create a world where everyone has access to financial 
                        services, enabling them to build a brighter future for themselves and their 
                        communities. We strive to unlock financial inclusion by empowering individuals.
                     </p>
                     <Link href="" >Ream More &gt;</Link>
                  </div>
               </div>
            </section>
            <section className={styles.formSection}>
                  <div className={styles.formTitleBlock}>
                     <h3>Your opinion is important to us</h3>
                     <p>Our vision is to create a world where everyone has access to financial 
                        services, enabling them to build a brighter future for themselves and their
                        communities. 
                     </p>
                     <Form />
                  </div>
            </section>
            <section className={styles.settlementSection}>
               <h1>Settlement of complaints</h1>
               <div className={styles.settlementsWrapper}>
                  <div className={styles.settlementBlock}>
                     <h3>Term for proceedings</h3>
                     <p>Banko skyriams laiko randa tik bankininkai. Mes patys skolinamės internetu, todėl ir 
                        tau suteikiame tokią galimybę. Net jei dar nesi mūsų klientas! Nors veikiame pagal 
                        bankinius standartus, pinigai tavo sąskaitoje atsidurs kur kas greičiau nei tikiesi. 
                        Banko skyriams laiko randa tik bankininkai. Mes patys skolinamės internetu, todėl ir 
                        tau suteikiame tokią galimybę. Net jei dar nesi mūsų klientas! Nors veikiame pagal 
                        bankinius standartus, pinigai tavo sąskaitoje atsidurs kur kas greičiau nei tikiesi.
                     </p>
                  </div>
                  <div className={styles.settlementBlock}>
                     <h3>Appeal</h3>
                     <p>Banko skyriams laiko randa tik bankininkai. Mes patys skolinamės internetu, todėl ir 
                        tau suteikiame tokią galimybę. Net jei dar nesi mūsų klientas! Nors veikiame pagal 
                        bankinius standartus, pinigai tavo sąskaitoje atsidurs kur kas greičiau nei tikiesi. 
                        Banko skyriams laiko randa tik bankininkai. Mes patys skolinamės internetu, todėl ir 
                        tau suteikiame tokią galimybę. Net jei dar nesi mūsų klientas! Nors veikiame pagal 
                        bankinius standartus, pinigai tavo sąskaitoje atsidurs kur kas greičiau nei tikiesi.
                     </p>
                  </div>
               </div>
            </section>
            <section id="faq" className={styles.faqSection}>
            <div className={styles.faqWrapper}>
              <h3 className={styles.faqHeader}>FAQ</h3>
              <div className={styles.faqList}>
                <Accordion accId="1" singleLevel="true" />
              </div>
            </div>
          </section>
         </main>
      </IndexLayout>
   )
}