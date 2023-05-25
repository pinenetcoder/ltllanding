import styles from "@/styles/ContactForm.module.scss"
import { useRouter } from "next/router"
import lt from '@/locales/lt'
import en from '@/locales/en'


function ContactForm(props) {
   const router = useRouter();
   const t = router.locale === 'lt' ? lt : en

   
   return (
      <div className={styles.formTitleBlock}>
         {props.formTitle && 
         <div>
            <h3>{t.inputForm.title}</h3>
            <p>{t.inputForm.description}</p>
         </div>
         }  
         <form className={styles.formBlock}>
            <div className={styles.formInputBlock}>
            <input type="text" 
            placeholder={t.inputForm.topic}
            />
            <textarea  
            placeholder={t.inputForm.feedbackText}
            className={styles.feedbackInput}
            />
            <input type="text" 
            placeholder={t.inputForm.name}
            />
            <input type="text" 
            placeholder={t.inputForm.email}
            />
            </div>
            <div className={styles.formButton}>{t.inputForm.button}</div>
         </form>
      </div>
   )
}

export default ContactForm;