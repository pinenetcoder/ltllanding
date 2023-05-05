import styles from "@/styles/security.module.scss"
import Accordion from "@/components/Accordion"
import IndexLayout from "@/Layouts/IndexLayout"

export default function Security() {
  return (
    <>
      <IndexLayout>
        <main className={styles.securityPage}>
          <div className={styles.securityPageWrapper}>
            <h1 className='page-title'>Security</h1>
            <div className={styles.securityPageDescription}></div>
            <Accordion accId="1" singleLevel="true"/>
          </div>
        </main>
      </IndexLayout>
    </>
  )
}