import styles from "@/styles/contacts.module.scss"
import IndexLayout from "@/Layouts/IndexLayout"
import ContactsForm from "@/components/ContactsForm"

export default function Contacts() {
   
   return (
      <IndexLayout>
         <main>
         <section className={styles.contactsPageWrapper}>
            <div className={styles.contactsPageList}>
              <div className={styles.contactsHeroItem}>
                <h1 className={styles.contactsTitle}>Kontaktai</h1>
                <div className={styles.contactsPageDescription}>
                  <p>Sporto g. 18 LT-09238 Vilnius
                     Telefonas: +370 5 205 5240
                     El. paštas: info@ltlku.lt
                  </p>
                </div>
              </div>
              <div className={styles.contactsHeroItem}>
                <h1 className={styles.contactsTitle}>Įmonės rekvizitai</h1>
                <div className={styles.contactsPageDescription}>
                  <p>LTL Kredito unija
                     Įmonės kodas: 302791356
                     PVM mokėtojo kodas: nėra
                     SWIFT kodas (BIC): LTKULT21XXX
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className={styles.contactsCustomerServiceSection}>
            <div className={styles.contactsCustomerServiceWrapper}>
               <h2>Klientų aptarnavimas būstinėje</h2>
               <div className={styles.contactsCustomerServiceWorkingDays}>
                  <div className={styles.contactsCustomerServiceSimpleDays}>
                     <p className={styles.workDays}>Pirmadienį - Ketvirtadienį</p>
                     <p className={styles.workHours}>9:30 – 16:30</p>
                  </div>
                  <div className={styles.contactsCustomerServiceDescription}>
                     <p className={styles.workDays}>Penktadienį</p>
                     <p className={styles.workHours}>9:30 - 15:00</p>
                  </div>
               </div>
               <p className={styles.contactsCustomerServiceCredentials}>Atvykite jums patogiu metu, išankstinė registracija nėra reikalinga.</p>
            </div>
          </section>
          <section className={styles.contactsForm}>
            <ContactsForm />
          </section>
         </main>
      </IndexLayout>
   )
}