import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
const inter = Inter({ subsets: ["latin"] });
import { useState } from "react";

export default function Home() {
  const [selected, setSelected] = useState();
  const [display, setDisplay] = useState(true)
  let evaluation_display = "block"
  let thankyou_display = "none"
  const select_Rating= e =>{
    setSelected(e.target.innerText)
  }
  
  return (
    <>
      <Head>
        <title>Interactive rating component</title>
        <meta name="rating" content="by MUHAMMAD UMAR" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon-star.svg" />
      </Head>
      <main className={styles.main}>
        <div className={styles.evaluation}  style={{display:display?"block":"none"}}>
          <div>
            <img src="/icon-star.svg" className={styles.star} alt="star" />
          </div>
          <h1 className={styles.heading}>How did we do?</h1>
          <div className={styles.paragraph}>
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </div>
          <div className={styles.rating_numbers}>
            <span className={styles.circle} onClick={select_Rating}>
              1
            </span>
            <span className={styles.circle} onClick={select_Rating}>
              2
            </span>
            <span className={styles.circle} onClick={select_Rating}>
              3
            </span>
            <span className={styles.circle} onClick={select_Rating}>
              4
            </span>
            <span className={styles.circle} onClick={select_Rating}>
              5
            </span>
          </div>
          <button className={styles.submit} onClick={()=>{selected?setDisplay(false):null}}>
            SUBMIT
          </button>
        </div>
        <div className={styles.thankyou} style={{display:display?"none":"block"}}>
          <img
            src="/illustration-thank-you.svg"
            className={styles.center}
            alt="Thanks image"
          />
          <div className={styles.rating}>You selected {selected} out of 5</div>
          <h1 className={`${styles.heading} ${styles.thankyou_heading}`}>
            Thank you!
          </h1>
          <div className={styles.paragraph}>
            We appreciate you taking the time to give a rating. If you ever need
            more support, don't hesitate to get in touch!
          </div>
        </div>
      </main>
    </>
  );
}

