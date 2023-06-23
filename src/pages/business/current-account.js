import styles from "@/styles/product.module.scss"
import businessStyle from "@/styles/business.current-account.module.scss"
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

    const currentAccountSteperData = [
      {
        number: "1",
        title: `${t.business.currentAccount.stepProcess.step1.title}`,
        description: `${t.business.currentAccount.stepProcess.step1.description}`,
      },
      {
        number: "2",
        title: `${t.business.currentAccount.stepProcess.step2.title}`,
        description: `${t.business.currentAccount.stepProcess.step2.description}`
      },
      {
        number: "3",
        title: `${t.business.currentAccount.stepProcess.step3.title}`,
        description: `${t.business.currentAccount.stepProcess.step3.subTitle}`,
        bulletBlock: [
           `${t.business.currentAccount.stepProcess.step3.bulletBlock.bullet1}`,
           `${t.business.currentAccount.stepProcess.step3.bulletBlock.bullet2}`,
           `${t.business.currentAccount.stepProcess.step3.bulletBlock.bullet3}`
        ]
      },
      {
        number: "4",
        title: `${t.business.currentAccount.stepProcess.step4.title}`,
        description: `${t.business.currentAccount.stepProcess.step4.description}`
      },
      {
        number: "5",
        title: `${t.business.currentAccount.stepProcess.step5.title}`,
        description: `${t.business.currentAccount.stepProcess.step5.description}`
      }
    ]

    return (
      <IndexLayout>
        <main className={businessStyle.currentAccountPage}>
            <section className={businessStyle.currentAccountPageWrapper}>
              <div className={businessStyle.currentAccountPageList}>
                  <div className={businessStyle.currentAccountHeroItem}>
                    <h1 className={businessStyle.currentAccountTitle}>{t.business.currentAccount.heroBlock.title}</h1>
                    <div className={businessStyle.currentAccountPageDescription}>
                        <p>{t.business.currentAccount.heroBlock.description}</p>
                        <ul>
                          <li>{t.privetCurrentAccount.heroBlock.bullet1}</li>
                          <li>{t.privetCurrentAccount.heroBlock.bullet2}</li>
                          <li>{t.privetCurrentAccount.heroBlock.bullet3}</li>
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
              <Link className={styles.innerNavLink} href="#pricelist">
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
            <section id="benefits" className={styles.articleSection}>
              <div className={styles.articleWrapper}>
                  <div className={styles.articleList}>
                    <div className={styles.articleItem}>
                        <h2 className={styles.articleItemTitle}>{t.privetCurrentAccount.articleBlock.article1.title}</h2>
                        <div className={styles.articleItemDescription}>
                          {t.privetCurrentAccount.articleBlock.article1.text}
                        </div>
                    </div>
                    <div className={styles.articleItem}>
                        <h2 className={styles.articleItemTitle}>{t.privetCurrentAccount.articleBlock.article2.title}</h2>
                        <div className={styles.articleItemDescription}>
                          {t.privetCurrentAccount.articleBlock.article2.text}   
                        </div>
                    </div>
                    <div className={styles.articleItem}>
                        <h2 className={styles.articleItemTitle}>{t.privetCurrentAccount.articleBlock.article3.title}</h2>
                        <div className={styles.articleItemDescription}>
                          {t.privetCurrentAccount.articleBlock.article3.text}
                        </div>
                    </div>
                  </div>
              </div>
            </section>
            <section id="process" className={styles.stepsSection}>
              <div className={styles.stepsWrapper}>
                  <div className={styles.stepsHeader}>
                    <h3>{t.business.currentAccount.stepProcess.title}</h3>
                  </div>
                  <Steper steperData={currentAccountSteperData}/>
              </div>
            </section>
            <section id="after" className={businessStyle.infoSection}>
              <div className={businessStyle.infoWrapper}>
                  <div className={businessStyle.infoHeader}>
                    <h3>After you have opened an account</h3>
                  </div>
                  <div className={businessStyle.infoList}>
                    <div className={businessStyle.infoItem}>
                        <h4 className={businessStyle.infoTitle}>{t.business.currentAccount.afterArticle.article1.title}</h4>
                        <div className={businessStyle.infoDescription}>{t.business.currentAccount.afterArticle.article1.description}</div>
                    </div>
                    <div className={businessStyle.infoItem}>
                        <h4 className={businessStyle.infoTitle}>{t.business.currentAccount.afterArticle.article2.title}</h4>
                        <div className={businessStyle.infoDescription}>{t.business.currentAccount.afterArticle.article2.description}</div>
                    </div>
                    <div className={businessStyle.infoItem}>
                        <h4 className={businessStyle.infoTitle}>{t.business.currentAccount.afterArticle.article3.title}</h4>
                        <div className={businessStyle.infoDescription}>{t.business.currentAccount.afterArticle.article3.description}</div>
                    </div>
                    <div className={businessStyle.infoItem}>
                        <h4 className={businessStyle.infoTitle}>{t.business.currentAccount.afterArticle.article4.title}</h4>
                        <div className={businessStyle.infoDescription}>{t.business.currentAccount.afterArticle.article4.description}</div>
                    </div>
                    <div className={businessStyle.infoItem}>
                        <h4 className={businessStyle.infoTitle}>{t.business.currentAccount.afterArticle.article5.title}</h4>
                        <div className={businessStyle.infoDescription}>{t.business.currentAccount.afterArticle.article5.description}</div>
                    </div>
                    <div className={businessStyle.infoItem}>
                        <h4 className={businessStyle.infoTitle}>{t.business.currentAccount.afterArticle.article6.title}</h4>
                        <div className={businessStyle.infoDescription}>{t.business.currentAccount.afterArticle.article6.description}</div>
                    </div>
                  </div>
              </div>
            </section>
            <section id="pricelist" className={styles.priceListSection}>
              <div className={styles.priceWrapper}>
                  <h3 className={styles.priceHeader}>Price List</h3>
                  <ul className={styles.priceList}>
                    <li className={[styles.priceItem, styles.priceTitle].join(' ')}>
                        <div className={styles.priceTitle}>Accounts</div>
                        <div className={styles.priceDescription}>free of charge</div>
                    </li>
                    <li className={styles.priceItem}>
                        <div className={styles.priceDescriptionLeft}>Opening an account</div>
                        <div className={styles.priceDescription}>free of charge</div>
                    </li>
                    <li className={styles.priceItem}>
                        <div className={styles.priceDescriptionLeft}>Closing the account</div>
                        <div className={styles.priceDescription}>100 €</div>
                    </li>
                    <li className={[styles.priceItem, styles.priceTitle].join(' ')}>
                        <div className={styles.priceTitle}>Entrepreneur account</div>
                    </li>
                    <li className={styles.priceItem}>
                        <div className={styles.priceDescriptionLeft}>Lorem ipsum dolor sit amet</div>
                        <div className={styles.priceDescription}>free of charge</div>
                    </li>
                    <li className={styles.priceItem}>
                        <div className={styles.priceDescriptionLeft}>Closing the account</div>
                        <div className={styles.priceDescription}>100 €</div>
                    </li>

                    <li className={[styles.priceItem, styles.priceTitle].join(' ')}>
                        <div className={styles.priceTitle}>Entrepreneur account</div>
                    </li>
                    <li className={styles.priceItem}>
                        <div className={styles.priceDescriptionLeft}>Lorem ipsum dolor sit amet</div>
                        <div className={styles.priceDescription}>free of charge</div>
                    </li>
                    <li className={styles.priceItem}>
                        <div className={styles.priceDescriptionLeft}>Closing the account</div>
                        <div className={styles.priceDescription}>100 €</div>
                    </li>
                  </ul>
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
                  <h3 className={styles.faqHeader}>{t.privetCurrentAccount.faq}</h3>
                  <div className={styles.faqList}>
                    <Accordion accId="1" singleLevel="true" />
                  </div>
              </div>
            </section>
        </main>
      </IndexLayout>
    );
}