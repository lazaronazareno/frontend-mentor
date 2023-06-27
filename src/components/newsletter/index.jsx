import { useState } from 'react'
import styles from './styles.module.scss'

export function Newsletter() {
  const [value, setValue] = useState('')
  const [error, setError] = useState(null)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    setValue(e.target.value)
    setError(null)
  }

  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    return regex.test(email)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (value.trim() === '') {
      setError('Email required')
      return
    }

    if (!validateEmail(value)) {
      setError('Valid email required')
      return
    }

    setIsSubmitted(true)
    setValue('')
    setError(null)
  }

  return (
    <div className={styles.newsletter}>
      <div className={styles.newsletter_card}>
        {!isSubmitted
          ? (
            <>
              <div className={styles.illustration} />
              <div className={styles.newsletter_info}>
                <h1>Stay updated!</h1>
                <p>Join 60,000+ product managers receiving monthly updates on:</p>
                <ul>
                  <li>Product discovery and building what matters</li>
                  <li>Measuring to ensure updates are a success</li>
                  <li>And much more!</li>
                </ul>
                <form onSubmit={handleSubmit} className={styles.newsletter_form}>
                  <div className={styles.newsletter_label}>
                    <label htmlFor='email'>Email Address</label>
                    {error && <span>{error}</span>}
                  </div>
                  <input
                    id='email'
                    value={value}
                    className={error ? styles.inputError : ''}
                    onChange={handleChange}
                    type='text'
                    placeholder='email@company.com'
                  />
                  <button type='submit'>Suscribe to monthly newsletter</button>
                </form>
              </div>
            </>
            )
          : (
            <div className={styles.isSubmitted}>
              <div className={styles.isSubmitted_check} />
              <h2>Thanks for subscribing!</h2>
              <p>A confirmation email has been sent to <strong>ash@loremcompany.com.</strong>
                Please open it and click the button inside to confirm your subscription.
              </p>
              <button onClick={() => setIsSubmitted(false)} type='button'>Dismiss message</button>
            </div>
            )}
      </div>
    </div>
  )
}
