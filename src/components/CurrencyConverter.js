import React, { useState, useEffect } from "react";
import styles from "@/styles/LLP-16.module.scss"



export default function CurrencyConverter() {

   const [currencyList, setCurrencyList] = useState([
      {
         name: "Select Currency",
         selectedAsBase: false,
         disabled: true,
      },
      {
         name: "USD",
         selectedAsBase: false,
         disabled: false,
      },
      {
         name: "EUR",
         selectedAsBase: false,
         disabled: false,
      },
      {
         name: "AUD",
         selectedAsBase: false,
         disabled: false,
      },
      {
         name: "BGN",
         selectedAsBase: false,
         disabled: false,
      },
   ])
   const [convertedAmount, setConvertedAmount] = useState('');
   const [baseAmount, setBaseAmount] = useState('')
   const [secondBase, setSecondBase] = useState('')



   async function baseCurrencySelectHandler(e) {
      const currency = e.target.value;
      const resp = await fetch(`https://api.freecurrencyapi.com/v1/latest?apikey=bDLb8GUJk128HeaNTCtKJTjpAo0ESlUBcQAM5x34&currencies=&base_currency=${currency}`);
      const data = await resp.json();


      let index = currencyList.findIndex((el) => el.name === currency)
      const temp = [...currencyList];
      temp.forEach((currency) => currency.selectedAsBase = false);
      temp[index].selectedAsBase = true;
      setCurrencyList(temp)
   }
   // console.log(currencyList)


   return (
      <>
         <div className={styles.paymentsCurrencyConverter}>
            <div className={styles.paymentsCurrencyConverterTitle}>Mokėjimai visame pasaulyje</div>
            <div className={styles.paymentsCurrencyConeverterBlock}>
               <div className={styles.paymentsCurrency}>

                  <input placeholder="Konvertuoti" className={styles.inputConverter} value={baseAmount} onChange={(e) => setBaseAmount(e.target.value)} />
                  <select className={styles.paymentsCurrencySelector} defaultValue="Select Currency" onInput={(e) => baseCurrencySelectHandler(e)}>


                     {currencyList.map((currency, idx) => {
                        return <option disabled={currency.disabled} value={currency.name} key={idx}>{currency.name}</option>
                     })}

                  </select>
               </div>
               <div className={styles.paymentsCurrency}>
                  <input placeholder="Į valiutą" className={styles.inputConverter} value={convertedAmount} onChange={(e) => setConvertedAmount(e.target.value)} />
                  <select className={styles.paymentsCurrencySelector} defaultValue="Select Currency" onInput={(e) => setSecondBase(e.target.value)}>
                     {currencyList.map((currency, idx) => {
                        return (
                           !currency.selectedAsBase && <option disabled={currency.disabled} value={currency.name} key={idx}>{currency.name}</option>
                        )
                     })}
                  </select>
               </div>
               <div className={styles.paymentsCurrencyOutputBlock}>
                  <div className={styles.paymentCurrencyOutputValue}>
                     {baseAmount}
                     {currencyList.map((currency, idx) => {
                        return (
                           currency.selectedAsBase && <span key={idx}> {currency.name} </span>
                        )
                     })}
                     {/*{currencyList.map((currency, idx) => {
                        console.log(currency.selectedAsBase, currency.name)
                        return 
                     }
                     )}*/}

                     =
                     {convertedAmount} </div>
                  <div className={styles.paymentsCurrencyQuestion}>?</div>
               </div>
               <div className={styles.paymentsCurrencyDescription}>Žiūrėti tarptautinių mokėjimų
                  pavedimo įkainius.
               </div>
               <div className={styles.paymentsButton}>Atsidaryti sąskaitą</div>
            </div>
         </div>
      </>
   );
}

