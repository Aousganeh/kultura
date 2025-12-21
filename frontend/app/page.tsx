import Link from 'next/link'
import Image from 'next/image'
import styles from './page.module.css'

const LOGO_PROPS = {
  src: '/kultura-logo.png',
  alt: 'Kultura Logo',
  width: 68,
  height: 68,
  className: styles.logo,
  priority: true,
}

const ELLIPSE_CLASSNAMES = [
  `${styles.ellipse} ${styles.ellipse1}`,
  `${styles.ellipse} ${styles.ellipse2}`,
  `${styles.ellipse} ${styles.ellipse3}`,
  `${styles.ellipse} ${styles.ellipse4}`,
  `${styles.ellipse} ${styles.ellipse5}`,
  `${styles.ellipse} ${styles.ellipse6}`,
  `${styles.ellipse} ${styles.ellipse7}`,
  `${styles.ellipse} ${styles.ellipse8}`,
  `${styles.ellipse} ${styles.ellipse9}`,
  `${styles.ellipse} ${styles.ellipse10}`,
  `${styles.ellipse} ${styles.ellipse11}`,
  `${styles.ellipse} ${styles.ellipse12}`,
  `${styles.ellipse} ${styles.ellipse13}`,
  `${styles.ellipse} ${styles.ellipse14}`,
  `${styles.ellipse} ${styles.ellipse15}`,
  `${styles.ellipse} ${styles.ellipse16}`,
]

const Home = (): JSX.Element => {
  return (
    <div className={styles.backgroundContainer}>
      <div className={styles.backLayer}>
        {ELLIPSE_CLASSNAMES.map((className) => (
          <div key={className} className={className} />
        ))}
      </div>

      <div className={styles.glassOverlay} />

      <div className={styles.contentWrapper}>
        <div className={styles.logoContainer}>
          <Image {...LOGO_PROPS} />
        </div>

        <h1 className={styles.mainHeading}>
          Restoran<br />
          rezervasiyalarını<br />
          effektiv şəkildə<br />
          izləyin və idarə<br />
          edin.
        </h1>

        <div className={styles.buttonContainer}>
          <Link href="/login" className={`${styles.btn} ${styles.btnPrimary}`}>
            Daxil ol
          </Link>
          <Link href="/register" className={`${styles.btn} ${styles.btnSecondary}`}>
            Qeydiyyat
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home
