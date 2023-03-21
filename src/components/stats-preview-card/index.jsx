import styles from './styles.module.scss'

export default function StatsCard() {
  return (
    <div className={`${styles.background} container text-white min-h-screen min-w-full flex justify-center items-center`}>
      <div className={`${styles.card} flex flex-col sm:flex-row-reverse rounded overflow-hidden`}>
        <div className={styles.card_image}>
          <div className={styles.card_image__img} />
          <div className={styles.card_image__overlay} />
        </div>
        <div className={`${styles.card_text} flex flex-col gap-2 text-center sm:text-left py-6 sm:py-10 sm:px-6 sm:mr-8`}>
          <h1 className='text-xl sm:text-2xl font-bold px-8 sm:px-0 leading-6'>Get <strong>insights</strong> that help your business grow.</h1>
          <p className='text-xs px-8 sm:px-0'>Discover the benefits of data analytics and make better decisions regarding revenue, customer
            experience, and overall efficiency.
          </p>
          <div className={`${styles.card_number} flex flex-col sm:flex-row sm:px-0 sm:pt-6 sm:justify-between gap-3 uppercase`}>
            <div>
              <h2 className='font-bold'>10k+</h2>
              <p className='text-xs'>companies</p>
            </div>
            <div>
              <h2 className='font-bold'>314</h2>
              <p className='text-xs'>templates</p>
            </div>
            <div>
              <h2 className='font-bold'>12m+</h2>
              <p className='text-xs'>queries</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
