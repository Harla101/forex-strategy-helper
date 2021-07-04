import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Strategy Helper</title>
        <meta name="description" content="Web app for testing forex strategies" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to The Strategy Helper
        </h1>

        <p className={styles.description}>
        Strategy Helper is a light weight web app to help you identify your trading strategy faster and with ease
        </p>
      </main>

      <footer className={styles.footer}>
        <p>Powered by: Charlie Rogers</p>
      </footer>
    </div>
  )
}
