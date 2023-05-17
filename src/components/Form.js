import styles from "@/styles/Form.module.scss"

function Form(props) {
   
   return (
      <div className={styles.formTitleBlock}>
         {props.formTitle && 
         <div>
            <h3>Your opinion is important to us</h3>
            <p>Our vision is to create a world where everyone has access to financial 
               services, enabling them to build a brighter future for themselves and their
               communities. 
            </p>
         </div>
         }  
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
      </div>
   )
}

export default Form;