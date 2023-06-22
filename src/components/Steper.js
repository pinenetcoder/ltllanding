import React from "react";
import styles from "@/styles/Steper.module.scss"
import { useRouter } from "next/router"
import lt from '@/locales/lt'
import en from '@/locales/en'

const Steper = ({steperData}) => {
    const router = useRouter();
    const t = router.locale === 'lt' ? lt : en

    console.log(steperData)
    const showSteper = steperData.map((step, idx) => {
        return (
            <div className={styles.stepsItem} key={idx}>
                <div className={styles.stepsNumber}>{step.number}</div>
                    <div className={styles.stepsText}>
                        <h2 className={styles.stepsTitle}>
                            {step.title}
                        </h2>
                        <div className={styles.stepsDescription}>
                            {step.description}
                        </div>
                    </div>
            </div>
        )
        
    })
    

  return (
    <div>
      <section id="process" className={styles.stepsSection}>
        <div className={styles.stepsWrapper}>
          <div className={styles.stepsList}>
            {showSteper}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Steper;
