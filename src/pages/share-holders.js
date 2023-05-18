import styles from "@/styles/share-holders.module.scss";
import IndexLayout from "@/Layouts/IndexLayout";
import Link from "next/link";

export default function ShareHolders() {
   return (
      <IndexLayout>
         <main>
            <section className={styles.shareHoldersSection}>
               <div className={styles.shareHoldersWrapper}>
                  <h2>Akcininkams</h2>
                  <p>Our vision is to create a world where everyone has access to financial services, 
                     enabling them to build a brighter future for themselves and their communities. 
                     We strive to unlock financial inclusion by empowering individuals to make informed 
                     decisions about their financial wellbeing.
                  </p>
                  <h3>Akcininkų susirinkimai</h3>
                  <ul>
                     
                  </ul>
               </div>
            </section>
         </main>
      </IndexLayout>
   )
}