import styles from "@/styles/Form.module.scss"

function Form() {
   return (
         <form className={styles.formBlock}>
            <div className={styles.formInputBlock}>
            <input type="text" 
            placeholder="Topic"
            />
            <textarea  
            placeholder="Feedback"
            className={styles.feedbackInput}
            />
            <input type="text" 
            placeholder="Name"
            />
            <input type="text" 
            placeholder="E-mail address"
            />
            </div>
            <div className={styles.formButton}>Send</div>
         </form>
   )
}

export default Form