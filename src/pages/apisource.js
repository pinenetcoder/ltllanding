import styles from "@/styles/apisource.module.scss"
import IndexLayout from "@/Layouts/IndexLayout"
import Accordion from "@/components/Accordion"
import Link from "next/link"

export default function ApiSource() {

    return(
        <IndexLayout>
            <div className={styles.apiSourceHero}>
                <h1 className={styles.apiSourceHeader}>Open banking</h1>
                <p className={styles.apiSourceDescription}>Our open banking technology is designed to enhance the overall banking experience. With modern API interface, companies can create state-of-the-art applications that are easy to use and highly integrated with banking services.</p>

                <section className={styles.check}>
                    <div className="container">
                        <ul>
                            <li className={styles.apiSourceList}>Ready-to-go</li>
                            <li className={styles.apiSourceList}>Smart</li>
                            <li className={styles.apiSourceList}>Secure</li>
                        </ul>
                    </div>
                </section>
            </div>

            <section className={styles.apiSourceColumns}>
                    <div className={styles.apiSourceGrid}>
                        <div>
                            <h2 className={styles.apiSourceColumnTitle}>Regulation</h2>
                            <p className={styles.apiSourceColumnDescription}>The Payment Services Directive 2 (PSD2) is a game-changer in the financial services industry, promoting innovation and customer choice. With PSD2, banks are required to provide trusted third-party providers with access to payment account information and payment initiation services, creating a more open and competitive financial marketplace. It also sets out additional requirements for security, customer authentication, and dispute resolution to protect consumers and promote trust in digital payment services.</p>
                        </div>

                        <div>
                            <h2 className={styles.apiSourceColumnTitle}>Open banking services</h2>
                            <p className={styles.apiSourceColumnDescription}>Open banking makes it possible for companies to design smart, intuitive apps that connect directly to your bank account, making banking easier than ever. With our open banking interface, you can create cutting-edge applications that integrate seamlessly with banking services, providing customers with a superior user experience. API interface makes it possible for users to access their account information and initiate payments conveniently and securely.</p>
                        </div>

                        <div>
                            <h2 className={styles.apiSourceColumnTitle}>API</h2>
                            <p className={styles.apiSourceColumnDescription}>Our banking API is a standardized interface that allows third-party developers to access financial data and services from banks and financial institutions in a secure and streamlined manner. The power of API enables clients to initiate transactions through third-party apps with just a few clicks, without the need to access their internet banking account or visit a physical bank. Our API was built as RESTful API, which uses HTTP protocol and JSON data format, and developed based on Berlin Group standard, while maintaining the highest levels of security.</p>
                        </div>
                    </div>
            </section>

            <section className={styles.apiSourceContact}>
                <h2 className={styles.apiSourceContactTitle}>Contacts</h2>
                <p  className={styles.apiSourceContactContent}>To gain access to our infrastructure, qualified trusted service providers (AISPs, PISPs) can reach out to us via email <span className={styles.apiSourceContactLink}><a className={styles.apiSourceContactLink} target="_blank" href="mailto:openbanking@ltlku.lt">openbanking@ltlku.lt</a></span>.</p>
            </section>
        </IndexLayout>
    )
}