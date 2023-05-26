import styles from "@/styles/product.module.scss"
import IndexLayout from "@/Layouts/IndexLayout"
import Link from "next/link"
import Accordion from "@/components/Accordion"
import { useRouter } from "next/router"
import lt from '@/locales/lt'
import en from '@/locales/en'

export default function Payments() {
   const router = useRouter();
   const t = router.locale === 'lt' ? lt : en

   return (
      <>
         <IndexLayout>
            <main className={styles.paymentsPage}>
               <section className={styles.paymentsPageWrapper}>
                  <div className={styles.paymentsPageList}>
                     <div className={styles.paymentsHeroItem}>
                        <h1 className={styles.paymentsTitle}>{t.privetCurrentAccount.pageTitle}</h1>

                        <div className={styles.paymentsPageDescription}>
                           <p>{t.privetCurrentAccount.heroBlock.description}</p>
                           <ul>
                              <li>{t.privetCurrentAccount.heroBlock.bullet1}</li>
                              <li>{t.privetCurrentAccount.heroBlock.bullet2}</li>
                              <li>{t.privetCurrentAccount.heroBlock.bullet3}</li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </section>
               <section className={styles.innerNavigationBlock}>
                  <div className={styles.innerNavigationLinkList}>
                     <Link className={styles.innerNavLink} href="#privetClient">{t.privetCurrentAccount.innerLinkBlock.privateClient}</Link>
                     <Link className={styles.innerNavLink} href="#steps">{t.privetCurrentAccount.innerLinkBlock.steps}</Link>
                     <Link className={styles.innerNavLink} href="#after">{t.privetCurrentAccount.innerLinkBlock.afterYouOpened}</Link>
                     <Link className={styles.innerNavLink} href="#priceList">{t.privetCurrentAccount.innerLinkBlock.priceList}</Link>
                     <Link className={styles.innerNavLink} href="#clientSuport">{t.privetCurrentAccount.innerLinkBlock.clientSupport}</Link>
                     <Link className={styles.innerNavLink} href="#faq">{t.privetCurrentAccount.innerLinkBlock.faq}</Link>
                  </div>
               </section>
               <section id="privetClient" className={styles.privateClientSection}>
                  <div className={styles.motyvationWrapper}>
                     <div className={styles.motyvationList}>
                        <div className={styles.motyvationItem}>
                           <h2 className={styles.motyvationItemTitle}>{t.privetCurrentAccount.articleBlock.article1.title}</h2>
                           <div className={styles.motyvationItemDescription}>
                              {t.privetCurrentAccount.articleBlock.article1.text}
                           </div>
                        </div>
                        <div className={styles.motyvationItem}>
                           <h2 className={styles.motyvationItemTitle}>{t.privetCurrentAccount.articleBlock.article2.title}</h2>
                           <div className={styles.motyvationItemDescription}>
                              {t.privetCurrentAccount.articleBlock.article2.text}   
                           </div>
                        </div>
                        <div className={styles.motyvationItem}>
                           <h2 className={styles.motyvationItemTitle}>{t.privetCurrentAccount.articleBlock.article3.title}</h2>
                           <div className={styles.motyvationItemDescription}>
                              {t.privetCurrentAccount.articleBlock.article3.text}
                           </div>
                        </div>
                     </div>
                  </div>
               </section>
               <section id="steps" className={styles.paymentStepsSection}>
                  <div className={styles.paymentsStepsWrapper}>
                     <div className={styles.stepsHeader}>
                        <h3>{t.privetCurrentAccount.accOpeningProcess.blockTitle}</h3>
                     </div>
                     <div className={styles.stepsList}>
                        <div className={styles.stepsItem}>
                           <div className={styles.stepsNumber}>1</div>
                           <div className={styles.stepsText}>
                              <h2 className={styles.stepsTitle}>{t.privetCurrentAccount.accOpeningProcess.step1.title}</h2>
                              <div className={styles.stepsDescription}>
                                 {t.privetCurrentAccount.accOpeningProcess.step1.text}
                              </div>
                           </div>
                        </div>
                        <div className={styles.stepsItem}>
                           <div className={styles.stepsNumber}>2</div>
                           <div className={styles.stepsText}>
                              <h2 className={styles.stepsTitle}>{t.privetCurrentAccount.accOpeningProcess.step2.title}</h2>
                              <div className={styles.stepsDescription}>
                                 {t.privetCurrentAccount.accOpeningProcess.step2.text}
                              </div>
                           </div>
                        </div>
                        <div className={styles.stepsItem}>
                           <div className={styles.stepsNumber}>3</div>
                           <div className={styles.stepsText}>
                              <h2 className={styles.stepsTitle}>{t.privetCurrentAccount.accOpeningProcess.step3.title}</h2>
                              <div className={styles.stepsDescription}>
                                 <ul>
                                    <li>{t.privetCurrentAccount.accOpeningProcess.step3.bulletBlock.bullet1}</li>
                                    <li>{t.privetCurrentAccount.accOpeningProcess.step3.bulletBlock.bullet2}</li>
                                    <li>{t.privetCurrentAccount.accOpeningProcess.step3.bulletBlock.bullet3}</li>
                                 </ul>
                              </div>
                           </div>
                        </div>
                        <div className={styles.stepsItem}>
                           <div className={styles.stepsNumber}>4</div>
                           <div className={styles.stepsText}>
                              <h2 className={styles.stepsTitle}>{t.privetCurrentAccount.accOpeningProcess.step4.title}</h2>
                              <div className={styles.stepsDescription}>
                                 {t.privetCurrentAccount.accOpeningProcess.step4.text}
                              </div>
                           </div>
                        </div>
                        <div className={styles.stepsItem}>
                           <div className={styles.stepsNumber}>5</div>
                           <div className={styles.stepsText}>
                              <h2 className={styles.stepsTitle}>{t.privetCurrentAccount.accOpeningProcess.step5.title}</h2>
                              <div className={styles.stepsDescription}>
                                 {t.privetCurrentAccount.accOpeningProcess.step5.text}
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>


               </section>
               <section id="after" className={styles.infoSection}>
                  <div className={styles.infoWrapper}>
                     <div className={styles.infoHeader}>
                        <h3>After you have opened an account</h3>
                     </div>
                     <div className={styles.infoList}>
                        <div className={styles.infoItem}>
                           <h4 className={styles.infoTitle}>Lorem ipsum dolor sit amet</h4>
                           <div className={styles.infoDescription}>Banko skyriams laiko randa tik bankininkai. Mes patys
                              skolinamės internetu, todėl ir tau suteikiame tokią galimybę. Net jei dar nesi mūsų klientas!
                              Nors veikiame pagal bankinius standartus, pinigai tavo sąskaitoje atsidurs kur kas greičiau
                              nei tikiesi.</div>
                        </div>
                        <div className={styles.infoItem}>
                           <h4 className={styles.infoTitle}>Lorem ipsum dolor sit amet</h4>
                           <div className={styles.infoDescription}>Banko skyriams laiko randa tik bankininkai. Mes patys
                              skolinamės internetu, todėl ir tau suteikiame tokią galimybę. Net jei dar nesi mūsų klientas!
                              Nors veikiame pagal bankinius standartus, pinigai tavo sąskaitoje atsidurs kur kas greičiau
                              nei tikiesi.</div>
                        </div>
                     </div>
                  </div>
               </section>
               <section id="priceList" className={styles.priceListSection}>
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
      </>
   )
}