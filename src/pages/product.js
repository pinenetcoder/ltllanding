import styles from "@/styles/payments.module.scss"
import IndexLayout from "@/Layouts/IndexLayout"
import Link from "next/link"
import Accordion from "@/components/Accordion"

export default function Payments() {
   return (
      <>
         <IndexLayout>
            <main className={styles.paymentsPage}>
               <section className={styles.paymentsPageWrapper}>
                  <div className={styles.paymentsPageList}>
                     <div className={styles.paymentsHeroItem}>
                        <h1 className={styles.paymentsTitle}>Einamoji sąskaita</h1>

                        <div className={styles.paymentsPageDescription}>
                           <p>With Kocomo, a home is co-owned by no more than eight families while we act as a
                              neutral third-party administrator to ensure transparency and fairness a home is
                              co-owned by no more than eight families while we act as a neutral third-party
                           </p>
                           <ul>
                              <li>Trečias bulletpoint tekstinis</li>
                              <li>Trečias bulletpoint tekstinis</li>
                              <li>Trečias bulletpoint tekstinis</li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </section>
               <section className={styles.innerNavigationBlock}>
                  <div className={styles.innerNavigationLinkList}>
                     <Link className={styles.innerNavLink} href="#privetClient">Private client</Link>
                     <Link className={styles.innerNavLink} href="#steps">Steps</Link>
                     <Link className={styles.innerNavLink} href="#after">After you opened</Link>
                     <Link className={styles.innerNavLink} href="#priceList">Price list</Link>
                     <Link className={styles.innerNavLink} href="#clientSuport">Client Support</Link>
                     <Link className={styles.innerNavLink} href="#faq">FAQ</Link>
                  </div>

               </section>
               <section id="privetClient" className={styles.privateClientSection}>
                  <div className={styles.motyvationWrapper}>
                     <div className={styles.motyvationList}>
                        <div className={styles.motyvationItem}>
                           <h2 className={styles.motyvationItemTitle}>Pamiršk laikus, kai skolintis buvo sudėtinga</h2>
                           <div className={styles.motyvationItemDescription}>Banko skyriams laiko randa tik bankininkai. Mes
                              patys skolinamės internetu, todėl ir tau suteikiame tokią galimybę. Net jei dar nesi mūsų klientas!
                              Nors veikiame pagal bankinius standartus, pinigai tavo sąskaitoje atsidurs kur kas greičiau nei
                              tikiesi.
                           </div>
                        </div>
                        <div className={styles.motyvationItem}>
                           <h2 className={styles.motyvationItemTitle}>Pamiršk laikus, kai skolintis buvo sudėtinga</h2>
                           <div className={styles.motyvationItemDescription}>Banko skyriams laiko randa tik bankininkai. Mes
                              patys skolinamės internetu, todėl ir tau suteikiame tokią galimybę. Net jei dar nesi mūsų klientas!
                              Nors veikiame pagal bankinius standartus, pinigai tavo sąskaitoje atsidurs kur kas greičiau nei
                              tikiesi.
                           </div>
                        </div>
                        <div className={styles.motyvationItem}>
                           <h2 className={styles.motyvationItemTitle}>Pamiršk laikus, kai skolintis buvo sudėtinga</h2>
                           <div className={styles.motyvationItemDescription}>Banko skyriams laiko randa tik bankininkai.
                              Mes patys skolinamės internetu, todėl ir tau suteikiame tokią galimybę. Net jei dar nesi mūsų
                              klientas! Nors veikiame pagal bankinius standartus.
                           </div>
                        </div>
                     </div>
                  </div>
               </section>
               <section id="steps" className={styles.paymentStepsSection}>
                  <div className={styles.paymentsStepsWrapper}>
                     <div className={styles.stepsHeader}>
                        <h3>Steps</h3>
                     </div>
                     <div className={styles.stepsList}>
                        <div className={styles.stepsItem}>
                           <div className={styles.stepsNumber}>1</div>
                           <div className={styles.stepsText}>
                              <h2 className={styles.stepsTitle}>An account opening application form</h2>
                              <div className={styles.stepsDescription}>Fill in an account opening application form.
                                 In case you are a citizen of Russia or Belarus, please read more.
                              </div>
                           </div>
                        </div>
                        <div className={styles.stepsItem}>
                           <div className={styles.stepsNumber}>2</div>
                           <div className={styles.stepsText}>
                              <h2 className={styles.stepsTitle}>Documents</h2>
                              <div className={styles.stepsDescription}>
                                 <ul>
                                    <li>a copy of your identity document</li>
                                    <li>documents that prove your connection to EstoniaExamples of suitable documents:</li>
                                    <li>signed residential lease agreement</li>
                                    <li>signed employment contract</li>
                                    <li>certificate from an educational institution regarding enrolment</li>
                                    <li>document substantiating connection to enterprise</li>
                                 </ul>
                              </div>
                           </div>
                        </div>
                        <div className={styles.stepsItem}>
                           <div className={styles.stepsNumber}>3</div>
                           <div className={styles.stepsText}>
                              <h2 className={styles.stepsTitle}>Decision on your application</h2>
                              <div className={styles.stepsDescription}>Once we have received your application for opening
                                 an account and documents, we will contact you shortly.
                              </div>
                           </div>
                        </div>
                        <div className={styles.stepsItem}>
                           <div className={styles.stepsNumber}>4</div>
                           <div className={styles.stepsText}>
                              <h2 className={styles.stepsTitle}>Identification</h2>
                              <div className={styles.stepsDescription}>If we approve your application to open an account,
                                 you will be asked to come to an LHV office for face-to-face identification and signing the
                                 client agreement. If you have already identified yourself at LHV, you will not have to
                                 come to the office again. In that case, we will e-mail the client agreement to you and
                                 you can sign it digitally using your e-resident’s digital ID.
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
                     <h3 className={styles.clientSuportHeader}>Client Suport</h3>
                     <div className={styles.clientSuportDescription}>Banko skyriams laiko randa tik bankininkai.
                        Mes patys skolinamės internetu, todėl ir tau suteikiame tokią galimybę. Net jei dar nesi mūsų
                        klientas! Nors veikiame pagal bankinius standartus, pinigai tavo sąskaitoje atsidurs kur kas
                        greičiau nei tikiesi.
                     </div>
                  </div>
               </section>
               <section id="faq" className={styles.faqSection}>
                  <div className={styles.faqWrapper}>
                     <h3 className={styles.faqHeader}>FAQ</h3>
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