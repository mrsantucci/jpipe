import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Rectangle from '../components/Rectangle/Rectangle'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>James Webb Space Telescope Pipeline Resource</title>
        <meta name="description" content="Image processing for raw data from the James Webb Space Telescope" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">JPipe</a>
        </h1>

        <p className={styles.description}>
        Web Based JWST Science Calibration Pipeline
        </p>
        <Rectangle/>
      </main>
      

      <footer className={styles.footer}>
        <p>&copy; 2022 All Rights Reserved</p>
      </footer>
    </div>
  )
}
