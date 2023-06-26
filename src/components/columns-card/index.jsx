import CarCard from './card'
import carLuxuryIcon from './images/icon-luxury.svg'
import carSedansIcon from './images/icon-sedans.svg'
import carSuvsIcon from './images/icon-suvs.svg'
import styles from './styles.module.scss'

export default function ColumnsCard() {
  return (
    <div className={styles.columnCard}>
      <CarCard icon={carSedansIcon} title='Sedans' description='Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.' color='orange' />
      <CarCard
        icon={carSuvsIcon} title='SUVs' description='Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation
  and off-road adventures.' color='cyan'
      />
      <CarCard
        icon={carLuxuryIcon} title='Luxury' description='Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury
  rental and arrive in style.' color='dark-cyan'
      />
    </div>
  )
}
