import styles from "@/styles/mortgage.module.scss"
import IndexLayout from "@/Layouts/IndexLayout"
import Accordion from "@/components/Accordion"
import Steper from "@/components/Steper"
import Link from "next/link"
import { useRouter } from "next/router"
import lt from '@/locales/lt'
import en from '@/locales/en'

export default function Mortgage() {
  
    const router = useRouter();
    const t = router.locale === 'lt' ? lt : en

    const mortgageSteperData = [
      {
        number: "1",
        title: `${t.mortgageLoan.stepProcess.step1.title}`,
        description: "Please fill in the application"
      },
      {
        number: "2",
        title: `${t.mortgageLoan.stepProcess.step2.title}`,
        description: `${t.mortgageLoan.stepProcess.step2.text}`
      },
      {
        number: "3",
        title: `${t.mortgageLoan.stepProcess.step3.title}`,
        description: `${t.mortgageLoan.stepProcess.step3.text}`
      },
      {
        number: "4",
        title: `${t.mortgageLoan.stepProcess.step4.title}`,
        description: `${t.mortgageLoan.stepProcess.step4.text}`
      },
      {
        number: "5",
        title: `${t.mortgageLoan.stepProcess.step5.title}`,
        description: `${t.mortgageLoan.stepProcess.step5.text}`
      },
    ]

    return (
      <IndexLayout>
        <main>
          <section className={styles.mortgagePageWrapper}>
            <div className={styles.mortgagePageList}>
              <div className={styles.mortgageHeroItem}>
                <h1 className={styles.mortgageTitle}>
                  {t.mortgageLoan.heroBlock.title}
                </h1>
                <div className={styles.mortgagePageDescription}>
                  <p>{t.mortgageLoan.heroBlock.description}</p>
                  <ul>
                    <li>{t.mortgageLoan.heroBlock.bullet1}</li>
                    <li>{t.mortgageLoan.heroBlock.bullet2}</li>
                    <li>{t.mortgageLoan.heroBlock.bullet3}</li>
                    <li>{t.mortgageLoan.heroBlock.bullet4}</li>
                    <li>{t.mortgageLoan.heroBlock.bullet5}</li>
                    <li>{t.mortgageLoan.heroBlock.bullet6}</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          <section className={styles.innerNavigationSection}>
            <div className={styles.innerNavigationLinkList}>
              <Link className={styles.innerNavLink} href="#benefits">
                {t.mortgageLoan.innerLinkBlock.benefits}
              </Link>
              <Link className={styles.innerNavLink} href="#process">
                {t.mortgageLoan.innerLinkBlock.process}
              </Link>
              <Link className={styles.innerNavLink} href="/pricelist">
                {t.mortgageLoan.innerLinkBlock.priceList}
              </Link>
              <Link className={styles.innerNavLink} href="#clientSuport">
                {t.mortgageLoan.innerLinkBlock.clientSuport}
              </Link>
              <Link className={styles.innerNavLink} href="#faq">
                {t.mortgageLoan.innerLinkBlock.faq}
              </Link>
            </div>
          </section>
          <section id="benefits" className={styles.benefitsSection}>
            <div className={styles.benefitsWrapper}>
              <div className={styles.benefitsBlock}>
                <h3 className={styles.benefitsTitle}>
                    {t.mortgageLoan.articleBlock.article1.title}
                </h3>
                <div className={styles.benefitsDescription}>
                {t.mortgageLoan.articleBlock.article1.text}
                </div>
              </div>
              <div className={styles.benefitsBlock}>
                <h3 className={styles.benefitsTitle}>
                    {t.mortgageLoan.articleBlock.article2.title}
                </h3>
                <div className={styles.benefitsDescription}>
                    {t.mortgageLoan.articleBlock.article2.text} 
                </div>
              </div>
              <div className={styles.benefitsBlock}>
                <h3 className={styles.benefitsTitle}>
                    {t.mortgageLoan.articleBlock.article3.title}
                </h3>
                <div className={styles.benefitsDescription}>
                    {t.mortgageLoan.articleBlock.article3.text}
                </div>
              </div>
              <div className={styles.benefitsBlock}>
                <h3 className={styles.benefitsTitle}>
                    {t.mortgageLoan.articleBlock.article4.title}
                </h3>
                <div className={styles.benefitsDescription}>
                    {t.mortgageLoan.articleBlock.article4.text}
                </div>
              </div>
            </div>
          </section>
          <section id="process" className={styles.stepsSection}>
            <div className={styles.stepsWrapper}>
                <div className={styles.stepsHeader}>
                  <h3>{t.mortgageLoan.stepProcess.title}</h3>
                </div>
                <Steper steperData={mortgageSteperData}/>
                {/* <div className={styles.stepsList}>
                  <div className={styles.stepsItem}>
                      <div className={styles.stepsNumber}>1</div>
                      <div className={styles.stepsText}>
                        <h2 className={styles.stepsTitle}>{t.mortgageLoan.stepProcess.step1.title}</h2>
                        <div className={styles.stepsDescription}>
                            {t.mortgageLoan.stepProcess.step1.text}
                        </div>
                      </div>
                  </div>
                  <div className={styles.stepsItem}>
                      <div className={styles.stepsNumber}>2</div>
                      <div className={styles.stepsText}>
                        <h2 className={styles.stepsTitle}>{t.mortgageLoan.stepProcess.step2.title}</h2>
                        <div className={styles.stepsDescription}>
                            {t.mortgageLoan.stepProcess.step2.text}
                        </div>
                      </div>
                  </div>
                  <div className={styles.stepsItem}>
                      <div className={styles.stepsNumber}>3</div>
                      <div className={styles.stepsText}>
                        <h2 className={styles.stepsTitle}>{t.mortgageLoan.stepProcess.step3.title}</h2>
                        <p>{t.mortgageLoan.stepProcess.step3.subTitle}</p>
                        <div className={styles.stepsDescription}>
                            <ul>
                              <li>{t.mortgageLoan.stepProcess.step3.bulletBlock.bullet1}</li>
                              <li>{t.mortgageLoan.stepProcess.step3.bulletBlock.bullet2}</li>
                              <li>{t.mortgageLoan.stepProcess.step3.bulletBlock.bullet3}</li>
                            </ul>
                        </div>
                      </div>
                  </div>
                  <div className={styles.stepsItem}>
                      <div className={styles.stepsNumber}>4</div>
                      <div className={styles.stepsText}>
                        <h2 className={styles.stepsTitle}>{t.mortgageLoan.stepProcess.step4.title}</h2>
                        <div className={styles.stepsDescription}>
                            {t.mortgageLoan.stepProcess.step4.text}
                        </div>
                      </div>
                  </div>
                  <div className={styles.stepsItem}>
                      <div className={styles.stepsNumber}>5</div>
                      <div className={styles.stepsText}>
                        <h2 className={styles.stepsTitle}>{t.mortgageLoan.stepProcess.step5.title}</h2>
                        <div className={styles.stepsDescription}>
                            {t.mortgageLoan.stepProcess.step5.text}
                        </div>
                      </div>
                  </div>
                </div> */}
            </div>
          </section>
          <section id="clientSuport" className={styles.clientSuportSection}>
            <div className={styles.clientSuportWrapper}>
                <h3 className={styles.clientSuportHeader}>{t.privetCurrentAccount.clientSuport.title}</h3>
                <div className={styles.clientSuportDescription}>
                  {t.privetCurrentAccount.clientSuport.description}
                </div>
            </div>
          </section>
          <section id="faq" className={styles.faqSection}>
            <div className={styles.faqWrapper}>
              <h3 className={styles.faqHeader}>{t.termDeposit.faq}</h3>
              <div className={styles.faqList}>
                <Accordion accId="1" singleLevel="true" />
              </div>
            </div>
          </section>
        </main>
      </IndexLayout>
    );
}