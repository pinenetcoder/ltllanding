import React from "react";
import styles from "@/styles/Steper.module.scss"

const Steper = ({steperData}) => {

    const showSteper = steperData.map((step, idx) => {
        const bulletList = step.bulletBlock
        return (
            <div className={styles.stepsItem} key={idx}>
                <div className={styles.stepsNumber}>{step.number}</div>
                    <div className={styles.stepsText}>
                        <h2 className={styles.stepsTitle}>
                            {step.title}
                        </h2>
                        <div className={styles.stepsDescription}>
                            {step.description}
                            {bulletList && <ul>
                              {bulletList.map((bullet,idx) => {
                                return (
                                    <li key={idx}>{bullet}</li>
                                )
                              })}
                            </ul> }
                        </div>
                    </div>
            </div>
        )
    })
  return (
    <div className={styles.stepsList}>
    {showSteper}
    </div>
  );
};

export default Steper;
