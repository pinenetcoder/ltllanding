import styles from "@/styles/equity-loan.module.scss"
import businessStyle from "@/styles/business.capital-loan.module.scss"
import IndexLayout from "@/Layouts/IndexLayout"
import Accordion from "@/components/Accordion"
import Link from "next/link"
import { useRouter } from "next/router"
import lt from '@/locales/lt'
import en from '@/locales/en'

export default function Mortgage() {
    const router = useRouter();
    const t = router.locale === 'lt' ? lt : en

    return (
      <IndexLayout>
        <main>
          <section className={businessStyle.pageWrapper}>
            <div className={businessStyle.pageList}>
              <div className={businessStyle.heroItem}>
                <h1 className={businessStyle.title}>
                  {t.business.capitalLoan.heroBlock.title}
                </h1>
                <div className={businessStyle.heroDescription}>
                  <p>{t.business.capitalLoan.heroBlock.description}</p>
                  <ul>
                    <li>{t.business.capitalLoan.heroBlock.bullet1}</li>
                    <li>{t.business.capitalLoan.heroBlock.bullet2}</li>
                    <li>{t.business.capitalLoan.heroBlock.bullet3}</li>
                    <li>{t.business.capitalLoan.heroBlock.bullet4}</li>
                    <li>{t.business.capitalLoan.heroBlock.bullet5}</li>
                    <li>{t.business.capitalLoan.heroBlock.bullet6}</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          <section className={styles.innerNavigationSection}>
            <div className={styles.innerNavigationLinkList}>
              <Link className={styles.innerNavLink} href="#benefits">
                {t.business.capitalLoan.innerLinkBlock.benefits}
              </Link>
              <Link className={styles.innerNavLink} href="#process">
                {t.business.capitalLoan.innerLinkBlock.process}
              </Link>
              <Link className={styles.innerNavLink} href="/pricelist">
                {t.business.capitalLoan.innerLinkBlock.priceList}
              </Link>
              <Link className={styles.innerNavLink} href="#clientSuport">
                {t.business.capitalLoan.innerLinkBlock.clientSuport}
              </Link>
              <Link className={styles.innerNavLink} href="#faq">
                {t.business.capitalLoan.innerLinkBlock.faq}
              </Link>
            </div>
          </section>
          <section id="benefits" className={styles.benefitsSection}>
            <div className={styles.benefitsWrapper}>
              <div className={styles.benefitsBlock}>
                <h3 className={styles.benefitsTitle}>
                    {t.business.capitalLoan.benefitsArticle.article1.title}
                </h3>
                <div className={styles.benefitsDescription}>
                {t.business.capitalLoan.benefitsArticle.article1.description}
                </div>
              </div>
              <div className={styles.benefitsBlock}>
                <h3 className={styles.benefitsTitle}>
                    {t.business.capitalLoan.benefitsArticle.article2.title}
                </h3>
                <div className={styles.benefitsDescription}>
                    {t.business.capitalLoan.benefitsArticle.article2.description} 
                </div>
              </div>
              <div className={styles.benefitsBlock}>
                <h3 className={styles.benefitsTitle}>
                    {t.business.capitalLoan.benefitsArticle.article3.title}
                </h3>
                <div className={styles.benefitsDescription}>
                    {t.business.capitalLoan.benefitsArticle.article3.description}
                </div>
              </div>
              <div className={styles.benefitsBlock}>
                <h3 className={styles.benefitsTitle}>
                    {t.business.capitalLoan.benefitsArticle.article4.title}
                </h3>
                <div className={styles.benefitsDescription}>
                    {t.business.capitalLoan.benefitsArticle.article4.description}
                </div>
              </div>
            </div>
          </section>
          <section id="process" className={styles.StepsSection}>
            <div className={styles.StepsWrapper}>
                <div className={styles.stepsHeader}>
                  <h3>{t.business.capitalLoan.stepProcess.title}</h3>
                </div>
                <div className={styles.stepsList}>
                  <div className={styles.stepsItem}>
                      <div className={styles.stepsNumber}>1</div>
                      <div className={styles.stepsText}>
                        <h2 className={styles.stepsTitle}>{t.business.capitalLoan.stepProcess.step1.title}</h2>
                        <div className={styles.stepsDescription}>
                            {t.business.capitalLoan.stepProcess.step1.description}
                        </div>
                      </div>
                  </div>
                  <div className={styles.stepsItem}>
                      <div className={styles.stepsNumber}>2</div>
                      <div className={styles.stepsText}>
                        <h2 className={styles.stepsTitle}>{t.business.capitalLoan.stepProcess.step2.title}</h2>
                        <div className={styles.stepsDescription}>
                            {t.business.capitalLoan.stepProcess.step2.description}
                        </div>
                      </div>
                  </div>
                  <div className={styles.stepsItem}>
                      <div className={styles.stepsNumber}>3</div>
                      <div className={styles.stepsText}>
                        <h2 className={styles.stepsTitle}>{t.business.capitalLoan.stepProcess.step3.title}</h2>
                        <div className={styles.stepsDescription}>
                            {t.business.capitalLoan.stepProcess.step3.description}
                        </div>
                      </div>
                  </div>
                  <div className={styles.stepsItem}>
                      <div className={styles.stepsNumber}>4</div>
                      <div className={styles.stepsText}>
                        <h2 className={styles.stepsTitle}>{t.business.capitalLoan.stepProcess.step4.title}</h2>
                        <p>{t.business.capitalLoan.stepProcess.step4.subTitle}</p>
                        <div className={styles.stepsDescription}>
                            <ul>
                              <li>{t.business.capitalLoan.stepProcess.step4.bulletBlock.bullet1}</li>
                              <li>{t.business.capitalLoan.stepProcess.step4.bulletBlock.bullet2}</li>
                              <li>{t.business.capitalLoan.stepProcess.step4.bulletBlock.bullet3}</li>
                              <li>{t.business.capitalLoan.stepProcess.step4.bulletBlock.bullet4}</li>
                              <li>{t.business.capitalLoan.stepProcess.step4.bulletBlock.bullet5}</li>
                              <li>{t.business.capitalLoan.stepProcess.step4.bulletBlock.bullet6}</li>
                            </ul>
                        </div>
                      </div>
                  </div>
                  <div className={styles.stepsItem}>
                      <div className={styles.stepsNumber}>5</div>
                      <div className={styles.stepsText}>
                        <h2 className={styles.stepsTitle}>{t.business.capitalLoan.stepProcess.step5.title}</h2>
                        <div className={styles.stepsDescription}>
                            {t.business.capitalLoan.stepProcess.step5.description}
                        </div>
                      </div>
                  </div>
                  <div className={styles.stepsItem}>
                      <div className={styles.stepsNumber}>6</div>
                      <div className={styles.stepsText}>
                        <h2 className={styles.stepsTitle}>{t.business.capitalLoan.stepProcess.step6.title}</h2>
                        <div className={styles.stepsDescription}>
                            {t.business.capitalLoan.stepProcess.step6.description}
                        </div>
                      </div>
                  </div>
                  <div className={styles.stepsItem}>
                      <div className={styles.stepsNumber}>7</div>
                      <div className={styles.stepsText}>
                        <h2 className={styles.stepsTitle}>{t.business.capitalLoan.stepProcess.step7.title}</h2>
                        <div className={styles.stepsDescription}>
                            {t.business.capitalLoan.stepProcess.step7.description}
                        </div>
                      </div>
                  </div>
                </div>
            </div>
          </section>
          <section id="clientSuport" className={styles.clientSuportSection}>
            <div className={styles.clientSuportWrapper}>
                <h3 className={styles.clientSuportHeader}>{t.business.capitalLoan.clientSuport.title}</h3>
                <div className={styles.clientSuportDescription}>
                  {t.business.capitalLoan.clientSuport.description}
                </div>
            </div>
          </section>
          <section id="faq" className={styles.faqSection}>
            <div className={styles.faqWrapper}>
              <h3 className={styles.faqHeader}>{t.business.capitalLoan.faq}</h3>
              <div className={styles.faqList}>
                <Accordion accId="1" singleLevel="true" />
              </div>
            </div>
          </section>
        </main>
      </IndexLayout>
    );
}