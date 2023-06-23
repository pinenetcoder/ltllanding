import styles from "@/styles/consumer-loan.module.scss";
import IndexLayout from "@/Layouts/IndexLayout";
import Accordion from "@/components/Accordion";
import Steper from "@/components/Steper"
import Link from "next/link";
import { useRouter } from "next/router";
import lt from "@/locales/lt";
import en from "@/locales/en";

export default function Mortgage() {
  const router = useRouter();
  const t = router.locale === "lt" ? lt : en;

  const consumerSteperData = [
    {
      number: "1",
      title: `${t.consumerLoan.stepProcess.step1.title}`,
      description: "Please fill in the application"
    },
    {
      number: "2",
      title: `${t.consumerLoan.stepProcess.step2.title}`,
      description: `${t.consumerLoan.stepProcess.step2.description}`
    },
    {
      number: "3",
      title: `${t.consumerLoan.stepProcess.step3.title}`,
      description: `${t.consumerLoan.stepProcess.step3.subTitle}`,
      bulletBlock: [
         `${t.consumerLoan.stepProcess.step3.bulletBlock.bullet1}`,
         `${t.consumerLoan.stepProcess.step3.bulletBlock.bullet2}`,
         `${t.consumerLoan.stepProcess.step3.bulletBlock.bullet3}`
      ]
    },
    {
      number: "4",
      title: `${t.consumerLoan.stepProcess.step4.title}`,
      description: `${t.consumerLoan.stepProcess.step4.description}`
    },
    {
      number: "5",
      title: `${t.consumerLoan.stepProcess.step5.title}`,
      description: `${t.consumerLoan.stepProcess.step5.description}`
    }
  ]

  return (
    <IndexLayout>
      <main>
        <section className={styles.consumerLoanPageWrapper}>
          <div className={styles.consumerLoanPageList}>
            <div className={styles.consumerLoanHeroItem}>
              <h1 className={styles.consumerLoanTitle}>
                {t.consumerLoan.heroBlock.title}
              </h1>
              <div className={styles.consumerLoanPageDescription}>
                <p>{t.consumerLoan.heroBlock.description}</p>
                <ul>
                  <li>{t.consumerLoan.heroBlock.bullet1}</li>
                  <li>{t.consumerLoan.heroBlock.bullet2}</li>
                  <li>{t.consumerLoan.heroBlock.bullet3}</li>
                  <li>{t.consumerLoan.heroBlock.bullet4}</li>
                  <li>{t.consumerLoan.heroBlock.bullet5}</li>
                  <li>{t.consumerLoan.heroBlock.bullet6}</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.innerNavigationSection}>
          <div className={styles.innerNavigationLinkList}>
            <Link className={styles.innerNavLink} href="#benefits">
              {t.consumerLoan.innerLinkBlock.benefits}
            </Link>
            <Link className={styles.innerNavLink} href="#process">
              {t.consumerLoan.innerLinkBlock.process}
            </Link>
            <Link className={styles.innerNavLink} href="/pricelist">
              {t.consumerLoan.innerLinkBlock.priceList}
            </Link>
            <Link className={styles.innerNavLink} href="#clientSuport">
              {t.consumerLoan.innerLinkBlock.clientSuport}
            </Link>
            <Link className={styles.innerNavLink} href="#faq">
              {t.consumerLoan.innerLinkBlock.faq}
            </Link>
          </div>
        </section>
        <section id="benefits" className={styles.benefitsSection}>
          <div className={styles.benefitsWrapper}>
            <div className={styles.benefitsBlock}>
              <h3 className={styles.benefitsTitle}>
                {t.consumerLoan.benefitsArticle.article1.title}
              </h3>
              <div className={styles.benefitsDescription}>
                {t.consumerLoan.benefitsArticle.article1.description}
              </div>
            </div>
            <div className={styles.benefitsBlock}>
              <h3 className={styles.benefitsTitle}>
                {t.consumerLoan.benefitsArticle.article2.title}
              </h3>
              <div className={styles.benefitsDescription}>
                {t.consumerLoan.benefitsArticle.article2.description}
              </div>
            </div>
            <div className={styles.benefitsBlock}>
              <h3 className={styles.benefitsTitle}>
                {t.consumerLoan.benefitsArticle.article3.title}
              </h3>
              <div className={styles.benefitsDescription}>
                {t.consumerLoan.benefitsArticle.article3.description}
              </div>
            </div>
            <div className={styles.benefitsBlock}>
              <h3 className={styles.benefitsTitle}>
                {t.consumerLoan.benefitsArticle.article4.title}
              </h3>
              <div className={styles.benefitsDescription}>
                {t.consumerLoan.benefitsArticle.article4.description}
              </div>
            </div>
          </div>
        </section>
        <section id="process" className={styles.StepsSection}>
          <div className={styles.StepsWrapper}>
            <div className={styles.stepsHeader}>
              <h3>{t.consumerLoan.stepProcess.title}</h3>
            </div>
            <Steper steperData={consumerSteperData}/>

          </div>
        </section>
        <section id="clientSuport" className={styles.clientSuportSection}>
          <div className={styles.clientSuportWrapper}>
            <h3 className={styles.clientSuportHeader}>
              {t.consumerLoan.clientSuport.title}
            </h3>
            <div className={styles.clientSuportDescription}>
              {t.consumerLoan.clientSuport.description}
            </div>
          </div>
        </section>
        <section id="faq" className={styles.faqSection}>
          <div className={styles.faqWrapper}>
            <h3 className={styles.faqHeader}>{t.consumerLoan.faq}</h3>
            <div className={styles.faqList}>
              <Accordion accId="1" singleLevel="true" />
            </div>
          </div>
        </section>
      </main>
    </IndexLayout>
  );
}
