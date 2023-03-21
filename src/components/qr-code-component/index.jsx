import styles from './styles.module.scss'
import qr from './images/image-qr-code.png'

const INFO = {
  img: qr,
  title: 'Improve your front-end skills by building projects',
  description: 'Scan the QR code to visit Frontend Mentor and take your coding skills to the next level'
}

export default function QrCode() {
  return (
    <div className={styles.background}>
      <div className={styles.card}>
        <img src={INFO.img} alt={INFO.title} />
        <h1>{INFO.title}</h1>
        <p>{INFO.description}</p>
      </div>
    </div>
  )
}
