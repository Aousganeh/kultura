import Image from 'next/image'
import styles from './Checkout.module.css'

type Order = {
  name: string
  quantity: number
  price: string
}

const ORDERS: readonly Order[] = [
  { name: 'Mini şah plov', quantity: 1, price: '12.00AZN' },
  { name: 'Çöp şiş köftə', quantity: 1, price: '12.00AZN' },
  { name: 'Misket kabab', quantity: 1, price: '12.00AZN' },
  { name: 'Manzo e fettucine', quantity: 1, price: '12.00AZN' },
  { name: 'Can əti göbələk..', quantity: 1, price: '12.00AZN' },
]

const SUMMARY = {
  subtotal: '32AZN',
  serviceFee: '3.2AZN',
  discount: '0AZN',
  total: '33.2AZN',
}

const Checkout = (): JSX.Element => {
  return (
    <div className={styles.checkout}>
      <div className={styles.option}>
        <div className={styles.dashboardSquare01Parent}>
          <Image className={styles.dashboardSquare01Icon} src="/tables-icon.png" width={19} height={19} sizes="100vw" alt="Tables" />
          <div className={styles.stolunNmrsi}>Stolun nömrəsi</div>
        </div>
        <div className={styles.parent}>
          <div className={styles.stolunNmrsi}>Seçin</div>
          <Image className={styles.arrowRight01SharpIcon} src="/arrow-icon.png" width={24} height={24} sizes="100vw" alt="Select table" />
        </div>
      </div>

      <div className={styles.orderParent}>
        {ORDERS.map((order) => (
          <div key={order.name} className={styles.order}>
          <div className={styles.dashboardSquare01Parent}>
            <div className={styles.addvariant3Parent}>
              <Image className={styles.addvariant3Icon} src="/remove-icon.png" width={24} height={24} sizes="100vw" alt="Remove" />
              <Image className={styles.addvariant3Icon} src="/add-icon.png" width={24} height={24} sizes="100vw" alt="Add" />
            </div>
            <div className={styles.miniAhPlovParent}>
                <div className={styles.stolunNmrsi}>{order.name}</div>
                <div className={styles.x1}>x{order.quantity}</div>
        </div>
            </div>
            <div className={styles.stolunNmrsi}>{order.price}</div>
          </div>
        ))}
      </div>

      <div className={styles.hesabParent}>
        <div className={styles.hesab}>
          <div className={styles.hesabGroup}>
            <div className={styles.hesab2}>Hesab</div>
            <div className={styles.azn6}>{SUMMARY.subtotal}</div>
          </div>
          <div className={styles.hesabGroup}>
            <div className={styles.servisHaqq10}>Servis haqqı (10%)</div>
            <div className={styles.azn7}>{SUMMARY.serviceFee}</div>
          </div>
          <div className={styles.hesabGroup}>
            <div className={styles.servisHaqq10}>Endirim (0%)</div>
            <div className={styles.azn7}>{SUMMARY.discount}</div>
          </div>
          <div className={styles.hesabChild} />
          <div className={styles.hesabGroup}>
            <div className={styles.mumiHesab}>Ümumi Hesab</div>
            <div className={styles.azn6}>{SUMMARY.total}</div>
          </div>
        </div>
        <div className={styles.dymlr}>
          <div className={styles.button}>
            <div className={styles.daxilOl}>Endirim əlavə et</div>
          </div>
          <div className={styles.button2}>
            <div className={styles.daxilOl}>Davam et</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout
