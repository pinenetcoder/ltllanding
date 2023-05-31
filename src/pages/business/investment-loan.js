import styles from "@/styles/equity-loan.module.scss"
import businessStyle from "@/styles/business.investment-loan.module.scss"
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
          <section className={styles.pageWrapper}>
            <div className={styles.pageList}>
              <div className={styles.heroItem}>
                <h1 className={styles.title}>
                  {t.business.investmentLoan.heroBlock.title}
                </h1>
                <div className={styles.heroDescription}>
                  <p>{t.business.investmentLoan.heroBlock.description}</p>
                  <ul>
                    <li>{t.business.investmentLoan.heroBlock.bullet1}</li>
                    <li>{t.business.investmentLoan.heroBlock.bullet2}</li>
                    <li>{t.business.investmentLoan.heroBlock.bullet3}</li>
                    <li>{t.business.investmentLoan.heroBlock.bullet4}</li>
                    <li>{t.business.investmentLoan.heroBlock.bullet5}</li>
                    <li>{t.business.investmentLoan.heroBlock.bullet6}</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          <section className={styles.innerNavigationSection}>
            <div className={styles.innerNavigationLinkList}>
              <Link className={styles.innerNavLink} href="#benefits">
                {t.business.investmentLoan.innerLinkBlock.benefits}
              </Link>
              <Link className={styles.innerNavLink} href="#process">
                {t.business.investmentLoan.innerLinkBlock.process}
              </Link>
              <Link className={styles.innerNavLink} href="/pricelist">
                {t.business.investmentLoan.innerLinkBlock.priceList}
              </Link>
              <Link className={styles.innerNavLink} href="#clientSuport">
                {t.business.investmentLoan.innerLinkBlock.clientSuport}
              </Link>
              <Link className={styles.innerNavLink} href="#faq">
                {t.business.investmentLoan.innerLinkBlock.faq}
              </Link>
            </div>
          </section>
          <section id="benefits" className={styles.benefitsSection}>
            <div className={styles.benefitsWrapper}>
              <div className={styles.benefitsBlock}>
                <h3 className={styles.benefitsTitle}>
                    {t.business.investmentLoan.benefitsArticle.article1.title}
                </h3>
                <div className={styles.benefitsDescription}>
                {t.business.investmentLoan.benefitsArticle.article1.description}
                </div>
              </div>
              <div className={styles.benefitsBlock}>
                <h3 className={styles.benefitsTitle}>
                    {t.business.investmentLoan.benefitsArticle.article2.title}
                </h3>
                <div className={styles.benefitsDescription}>
                    {t.business.investmentLoan.benefitsArticle.article2.description} 
                </div>
              </div>
              <div className={styles.benefitsBlock}>
                <h3 className={styles.benefitsTitle}>
                    {t.business.investmentLoan.benefitsArticle.article3.title}
                </h3>
                <div className={styles.benefitsDescription}>
                    {t.business.investmentLoan.benefitsArticle.article3.description}
                </div>
              </div>
              <div className={styles.benefitsBlock}>
                <h3 className={styles.benefitsTitle}>
                    {t.business.investmentLoan.benefitsArticle.article4.title}
                </h3>
                <div className={styles.benefitsDescription}>
                    {t.business.investmentLoan.benefitsArticle.article4.description}
                </div>
              </div>
            </div>
          </section>
          <section id="process" className={styles.StepsSection}>
            <div className={styles.StepsWrapper}>
                <div className={styles.stepsHeader}>
                  <h3>{t.business.investmentLoan.stepProcess.title}</h3>
                </div>
                <div className={styles.stepsList}>
                  <div className={styles.stepsItem}>
                      <div className={styles.stepsNumber}>1</div>
                      <div className={styles.stepsText}>
                        <h2 className={styles.stepsTitle}>{t.business.investmentLoan.stepProcess.step1.title}</h2>
                        <div className={styles.stepsDescription}>
                            {t.business.investmentLoan.stepProcess.step1.description}
                        </div>
                      </div>
                  </div>
                  <div className={styles.stepsItem}>
                      <div className={styles.stepsNumber}>2</div>
                      <div className={styles.stepsText}>
                        <h2 className={styles.stepsTitle}>{t.business.investmentLoan.stepProcess.step2.title}</h2>
                        <div className={styles.stepsDescription}>
                            {t.business.investmentLoan.stepProcess.step2.description}
                        </div>
                      </div>
                  </div>
                  <div className={styles.stepsItem}>
                      <div className={styles.stepsNumber}>3</div>
                      <div className={styles.stepsText}>
                        <h2 className={styles.stepsTitle}>{t.business.investmentLoan.stepProcess.step3.title}</h2>
                        <div className={styles.stepsDescription}>
                            {t.business.investmentLoan.stepProcess.step3.description}
                        </div>
                      </div>
                  </div>
                  <div className={styles.stepsItem}>
                      <div className={styles.stepsNumber}>4</div>
                      <div className={styles.stepsText}>
                        <h2 className={styles.stepsTitle}>{t.business.investmentLoan.stepProcess.step4.title}</h2>
                        <p>{t.business.investmentLoan.stepProcess.step4.subTitle}</p>
                        <div className={styles.stepsDescription}>
                            <ul>
                              <li>{t.business.investmentLoan.stepProcess.step4.bulletBlock.bullet1}</li>
                              <li>{t.business.investmentLoan.stepProcess.step4.bulletBlock.bullet2}</li>
                              <li>{t.business.investmentLoan.stepProcess.step4.bulletBlock.bullet3}</li>
                              <li>{t.business.investmentLoan.stepProcess.step4.bulletBlock.bullet4}</li>
                              <li>{t.business.investmentLoan.stepProcess.step4.bulletBlock.bullet5}</li>
                              <li>{t.business.investmentLoan.stepProcess.step4.bulletBlock.bullet6}</li>
                            </ul>
                        </div>
                      </div>
                  </div>
                  <div className={styles.stepsItem}>
                      <div className={styles.stepsNumber}>5</div>
                      <div className={styles.stepsText}>
                        <h2 className={styles.stepsTitle}>{t.business.investmentLoan.stepProcess.step5.title}</h2>
                        <div className={styles.stepsDescription}>
                            {t.business.investmentLoan.stepProcess.step5.description}
                        </div>
                      </div>
                  </div>
                  <div className={styles.stepsItem}>
                      <div className={styles.stepsNumber}>6</div>
                      <div className={styles.stepsText}>
                        <h2 className={styles.stepsTitle}>{t.business.investmentLoan.stepProcess.step6.title}</h2>
                        <div className={styles.stepsDescription}>
                            {t.business.investmentLoan.stepProcess.step6.description}
                        </div>
                      </div>
                  </div>
                  <div className={styles.stepsItem}>
                      <div className={styles.stepsNumber}>7</div>
                      <div className={styles.stepsText}>
                        <h2 className={styles.stepsTitle}>{t.business.investmentLoan.stepProcess.step7.title}</h2>
                        <div className={styles.stepsDescription}>
                            {t.business.investmentLoan.stepProcess.step7.description}
                        </div>
                      </div>
                  </div>
                </div>
            </div>
          </section>
          <section id="clientSuport" className={styles.clientSuportSection}>
            <div className={styles.clientSuportWrapper}>
                <h3 className={styles.clientSuportHeader}>{t.business.investmentLoan.clientSuport.title}</h3>
                <div className={styles.clientSuportDescription}>
                  {t.business.investmentLoan.clientSuport.description}
                </div>
            </div>
          </section>
          <section id="faq" className={styles.faqSection}>
            <div className={styles.faqWrapper}>
              <h3 className={styles.faqHeader}>{t.business.investmentLoan.faq}</h3>
              <div className={styles.faqList}>
                <Accordion accId="1" singleLevel="true" />
              </div>
            </div>
          </section>
        </main>
      </IndexLayout>
    );
}