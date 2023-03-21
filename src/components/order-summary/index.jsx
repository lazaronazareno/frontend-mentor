import styles from './styles.module.scss'
import image from './images/illustration-hero.svg'
import icon from './images/icon-music.svg'

export default function OrderSummary() {
  return (
    <div className={styles.background}>
      <div className={styles.card}>
        <img src={image} alt='Illustration hero music' />
        <div className={styles.card_info}>
          <h1>Order Summary</h1>
          <p>You can now listen to millions of songs, audiobooks, and podcasts on any
            device anywhere you like!
          </p>
          <div className={styles.card_plan}>
            <div>
              <img src={icon} alt='music icon' />
              <div>
                <h4>Annual Plan</h4>
                <p>$59.99/year</p>
              </div>
            </div>
            <a href='#'>Change</a>
          </div>
          <button className={styles.card_button}>Proceed to Payment</button>
          <button className={styles.card_alt_button}>Cancel Order</button>
        </div>
      </div>
    </div>
  )
}
