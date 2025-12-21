import styles from './page.module.css'
import Sidebar from './components/Sidebar/Sidebar'
import Content from './components/Content/Content'
import Checkout from './components/Checkout/Checkout'

export default function DashboardPage() {
  return (
    <div className={styles.dashboardContainer}>
      <Sidebar />
      <main className={styles.mainContent}>
        <Content />
        <Checkout />
      </main>
    </div>
  )
}

