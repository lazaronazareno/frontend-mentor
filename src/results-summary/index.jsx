import './assets/fonts/HankenGrotesk-VariableFont_wght.ttf'
import './styles.css'
import { data } from './data'
import Header from '../header'

export default function Results() {
  return (
    <div className='background'>
      <Header />
      <div className='results-container'>
        <div className='title'>
          <h4>Your Result</h4>
          <div className='title-circle'>
            <h4>76</h4>
            <p>of 100</p>
          </div>
          <div className='title-text'>
            <h3>Great</h3>
            <p>You scored higher than 65% of the people who have taken these tests.</p>
          </div>
        </div>
        <div className='summary-container'>
          <h4>Summary</h4>
          <div className='summary-list'>
            {data.map(item => (
              <div className={`summary-item ${item.category.toLowerCase()}`} key={item.category}>
                <div>
                  <img src={item.icon} alt={item.category} />
                  <h4>{item.category}</h4>
                </div>
                <h4><strong>{item.score}</strong> / 100</h4>
              </div>
            ))}
          </div>
          <button className='results-button' type='button'>Continue</button>
        </div>
      </div>
    </div>
  )
}
