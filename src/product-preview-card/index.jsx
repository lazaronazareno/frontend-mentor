import icon from './images/icon-cart.svg'
import styles from './styles.module.css'
import Header from '../header'

export default function ProductPreviewCard() {
  return (
    <div className={styles.background}>
      <Header />
      <div className={styles.card}>
        <div className={styles.backgroundImage} />
        <div className={styles.cardContent}>
          <p className={styles.cardSubtitle}>Perfume</p>
          <h2>Gabrielle Essence Eau De Parfum</h2>
          <p>A floral, solar and voluptuous interpretation composed by Olivier Polge,
            Perfumer-Creator for the House of CHANEL.
          </p>
          <div className={styles.cardPrice}>
            <h2>$149.99</h2>
            <p>$169.99</p>
          </div>
          <button className={styles.cardButton}>
            <img src={icon} alt='cart-icon' />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}
