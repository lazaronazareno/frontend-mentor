import styles from './styles.module.scss'

export default function CarCard({ icon, title, description, color }) {
  return (
    <div className={`${styles.car_card} ${styles[color]}`}>
      <img src={icon} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
      <button>Learn More</button>
    </div>
  )
}
