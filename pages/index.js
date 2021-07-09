import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Strategy Helper</title>
        <meta name="description" content="Strategy Helper is a light weight web app to help you identify your trading strategy faster and with ease" />
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
export default Home;