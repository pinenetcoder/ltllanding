import styles from "@/styles/deposits.module.scss"
import IndexLayout from "@/Layouts/IndexLayout"
import Accordion from "@/components/Accordion"
import Link from "next/link"
import { useState } from "react"


export default function Deposit() {
  const [calc, setCalc] = useState({
    amount: 10000,
    term: 3,
    selectedRate: 1.75
  })
  let ratesList = [
    {
      term: 1,
      rate: 1,
    },
    {
      term: 3,
      rate: 1.75,
    },
  ]
  function createSelectOptions() {

    return ratesList.map((el, idx) => <option data-rate={el.rate} key={idx}>{el.term}</option>)
  }

  function selectTerm(e) {
    let selectedRate = +Array.from(e.target.options).filter(opt => opt.value == e.target.value)[0].getAttribute('data-rate')
    setCalc({ ...calc, term: +e.target.value, selectedRate: selectedRate })
    console.log(calc)
  }
  return (
    <>
      <IndexLayout>
        <main>
          <section className={styles.depositPageWrapper}>
            <div className={styles.depositPageList}>
              <div className={styles.depositHeroItem}>
                <h1 className={styles.depositTitle}>Einamoji sąskaita</h1>
                <div className={styles.depositPageDescription}>
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
                <div>
                  <Link className="light-green-action-button long" href="/">Pateikti indėlio paraišką</Link>
                </div>
              </div>
            </div>
          </section>
          <section className={styles.innerNavigationBlock}>
            <div className={styles.innerNavigationLinkList}>
              <Link className={styles.innerNavLink} href="#calculator">Calculator</Link>
              <Link className={styles.innerNavLink} href="#interestRate">Interest rates</Link>
              <Link className={styles.innerNavLink} href="#faq">FAQ</Link>
            </div>
          </section>
          <section id="calculator" className={styles.depositSection}>
            <h2>Calculate how much interest will you accumulate</h2>
            <div className={styles.calculatorWrapper}>
              <div className={styles.calculatorBlock}>
                <div className={styles.borderCorner}></div>
                <div className={styles.calculatorLine}>
                  <div className={styles.label}>Indėlio dydis</div>
                  <input type="text" value={calc.amount} onChange={(e) => { setCalc({ ...calc, amount: +e.target.value }) }} placeholder="Enter amount" />
                </div>
                <div className={styles.calculatorLine}>
                  <div className={styles.label}>Indelio terminas</div>
                  <div className={styles.select}>
                    <select value={calc.term} onChange={(e) => { selectTerm(e) }}>{createSelectOptions()}</select>
                  </div>
                </div>
              </div>
              <div className={styles.resultBlock}>
                <div className={styles.resultBlockList}>
                  <div className={styles.resultBlockItem}>
                    <div className={styles.left}>Palūkanų norma:</div>
                    <div className={styles.right}>{calc.selectedRate}%</div>
                  </div>
                  <div className={styles.resultBlockItem}>
                    <div className={styles.left}>Iš viso:</div>
                    <div className={styles.right}>{(+calc.amount / 100 * +calc.selectedRate / 12 * calc.term + calc.amount).toFixed(0)}€</div>
                  </div>
                  <div className={styles.resultBlockItem}>
                    <div className={styles.left}>Palūkanų suma:</div>
                    <div className={styles.right}>{(+calc.amount / 100 * +calc.selectedRate / 12 * calc.term).toFixed(2)}€</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.depositSectionButton}>
              <Link className="light-green-action-button long" href="/">Pateikti indėlio paraišką</Link>
            </div>
          </section>
          <section id="interestRate" className={styles.ratesTableSection}>
            <div className={styles.ratesTableWrapper}>
              <h3>Rates</h3>
              <div className={styles.tableHeading}>
                <div className={[styles.tableHeadingCell, styles.column1].join(' ')}>Period</div>
                <div className={[styles.tableHeadingCell, styles.column2].join(' ')}>Interest rate (EUR)</div>
                <div className={[styles.tableHeadingCell, styles.column3].join(' ')}>Interest rate (USD)</div>
              </div>
              <div className={styles.tableDataLine}>
                <div className={[styles.tableDataCell, styles.column1].join(' ')}>1 month</div>
                <div className={[styles.tableDataCell, styles.column2].join(' ')}>1.00%</div>
                <div className={[styles.tableDataCell, styles.column3].join(' ')}>1.00%</div>
              </div>
              <div className={styles.tableDataLine}>
                <div className={[styles.tableDataCell, styles.column1].join(' ')}>3 month</div>
                <div className={[styles.tableDataCell, styles.column2].join(' ')}>1.75%</div>
                <div className={[styles.tableDataCell, styles.column3].join(' ')}>1.75%</div>
              </div>
              <div className={styles.tableDataLine}>
                <div className={[styles.tableDataCell, styles.column1].join(' ')}>6 month</div>
                <div className={[styles.tableDataCell, styles.column2].join(' ')}>2.00%</div>
                <div className={[styles.tableDataCell, styles.column3].join(' ')}>2.00%</div>
              </div>
              <div className={styles.tableDataLine}>
                <div className={[styles.tableDataCell, styles.column1].join(' ')}>12 month</div>
                <div className={[styles.tableDataCell, styles.column2].join(' ')}>2.50%</div>
                <div className={[styles.tableDataCell, styles.column3].join(' ')}>3.00%</div>
              </div>
              <div className={styles.tableDataLine}>
                <div className={[styles.tableDataCell, styles.column1].join(' ')}>18 month</div>
                <div className={[styles.tableDataCell, styles.column2].join(' ')}>3.10%</div>
                <div className={[styles.tableDataCell, styles.column3].join(' ')}>3.00%</div>
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

//style {

//   ratesTableWrapper {
//      width: 840px
//      <font></font>
//      lineHeigh
//   }
//   column1 {
//      width: 228
//   }
//   column2 {
//      width: 335
//   }

//   column3 {
//      width: 227
//   }
//}