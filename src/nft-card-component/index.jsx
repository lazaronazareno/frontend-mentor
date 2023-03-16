import nft from './images/image-equilibrium.jpg'
import avatar from './images/image-avatar.png'
import ethIcon from './images/icon-ethereum.svg'
import timeIcon from './images/icon-clock.svg'
import viewIcon from './images/icon-view.svg'
import styles from './styles.module.scss'
import Header from '../header'

const NFT = {
  img: nft,
  title: 'Equilibrium #3429',
  description: 'Our Equilibrium collection promotes balance and calm.',
  price: '0.041 ETH',
  timeLeft: '3 days left',
  author: 'Jules Wyvern',
  avatar
}

export default function NftCard() {
  return (
    <div className={styles.background}>
      <Header />
      <div className={styles.card}>
        <div className={styles.card_img}>
          <img className={styles.card_img__nft} src={NFT.img} alt={NFT.title} />
          <div className={styles.card_img__overlay} />
          <img className={styles.card_img__view} src={viewIcon} alt='view-icon' />
        </div>
        <h2>{NFT.title}</h2>
        <p>{NFT.description}</p>
        <div className={styles.card_details}>
          <div>
            <img src={ethIcon} alt='ethereum-icon' />
            <h3>{NFT.price}</h3>
          </div>
          <div>
            <img src={timeIcon} alt='time-icon' />
            <p>{NFT.timeLeft}</p>
          </div>
        </div>
        <div className={styles.card_author}>
          <img src={NFT.avatar} alt={NFT.author} />
          <p>Creation of <span>{NFT.author}</span></p>
        </div>
      </div>
    </div>
  )
}
