import styles from "@/styles/contacts.module.scss"
import IndexLayout from "@/Layouts/IndexLayout"
import ContactForm from "@/components/ContactForm"
import { useRouter } from "next/router"
import lt from '@/locales/lt'
import en from '@/locales/en'
import Gmap from "@/components/Gmap"
import {useJsApiLoader} from '@react-google-maps/api'

export default function Contacts() {
   const router = useRouter();
   const t = router.locale === 'lt' ? lt : en

   const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
   const defaultCenter = {
    lat: 54.694700,
    lng: 25.298190
  };

   const { isLoaded: gmapIsLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: API_KEY
   })
  
   return (
      <IndexLayout>
         <main>
         <section className={styles.contactsPageWrapper}>
            <div className={styles.contactsPageList}>
              <div className={styles.contactsHeroItem}>
                <h3 className={styles.contactsTitle}>{t.contacts.heroBlock.contactsTitle}</h3>
                <div className={styles.contactsPageDescription}>
                  <p>{t.contacts.heroBlock.adress}</p>
                </div>
              </div>
              <div className={styles.contactsHeroItem}>
                <h3 className={styles.contactsTitle}>{t.contacts.heroBlock.companyDetails}</h3>
                <div className={styles.contactsPageDescription}>
                  <p>{t.contacts.heroBlock.companyDetailsDescription}</p>
                </div>
              </div>
            </div>
            {gmapIsLoaded ? <Gmap center={defaultCenter}/> : <h2>Is Loading</h2>}
          </section>
          <section className={styles.contactsCustomerServiceSection}>
            <div className={styles.contactsCustomerServiceWrapper}>
               <h3>{t.contacts.articleBlock.title}</h3>
               <div className={styles.contactsCustomerServiceWorkingDays}>
                  <div className={styles.contactsCustomerServiceSimpleDays}>
                     <p className={styles.workDays}>{t.contacts.articleBlock.mondayThursday}</p>
                     <p className={styles.workHours}>9:30 – 16:30</p>
                  </div>
                  <div className={styles.contactsCustomerServiceDescription}>
                     <p className={styles.workDays}>{t.contacts.articleBlock.friday}</p>
                     <p className={styles.workHours}>9:30 - 15:00</p>
                  </div>
               </div>
               <p className={styles.contactsCustomerServiceCredentials}>{t.contacts.articleBlock.description}</p>
            </div>
          </section>
          <section className={styles.contactsForm}>
            <ContactForm formTitle={false}/>
          </section>
         </main>
      </IndexLayout>
   )
}