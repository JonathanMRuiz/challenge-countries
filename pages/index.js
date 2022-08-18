import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Hero } from "./hero";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Countries</title>
        <meta name="description" content="Countries challenge" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Hero />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Jonathan Ruiz
        </a>
      </footer>
    </div>
  );
}
