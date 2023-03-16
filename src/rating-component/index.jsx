import styles from './styles.module.scss'
import arrow from './images/arrow.png'
import icon from './images/icon-star.svg'
import image from './images/illustration-thank-you.svg'
import { useState } from 'react'

export default function Rating() {
  const list = Array.from(Array(5).keys())
  const [selected, setSelected] = useState()
  const [isSubmited, setIsSubmited] = useState(false)

  return (
    <div className={styles.background}>
      {isSubmited
        ? (
          <div className={`${styles.card} ${styles.card_result}`}>
            <img onClick={() => setIsSubmited(false)} className={styles.card_result__icon} src={arrow} alt='Thank You' />
            <img className={styles.card_image} src={image} alt='Thank You' />
            <p className={styles.card_result__text}>You selected {selected + 1} of 5</p>
            <h2>Thank you!</h2>
            <p>We appreciate you taking the time to give a rating. If you ever need more support,
              don’t hesitate to get in touch!
            </p>
          </div>)
        : (
          <div className={styles.card}>
            <img className={styles.card_icon} src={icon} alt='star-icon' />
            <h1>How did we do?</h1>
            <p>Please let us know how we did with your support request. All feedback is appreciated
              to help us improve our offering!
            </p>
            <div className={styles.card_list}>
              {list.map(item => (
                <button
                  className={`${styles.card_item} ${item === selected ? styles.selected : ''}`}
                  key={item}
                  onClick={() => setSelected(item)}
                >{item + 1}
                </button>
              ))}
            </div>
            <button disabled={!selected} onClick={() => setIsSubmited(true)} className={styles.card_submit}>Submit</button>
          </div>)}
    </div>
  )
}
