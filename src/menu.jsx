import { Link } from 'react-router-dom'

export default function Menu() {
  return (
    <div className='menu container min-h-screen min-w-full'>
      <h1 className='text-2xl'>FrontEnd Mini Challenges</h1>
      <div className='flex flex-wrap justify-center gap-2'>
        <Link to='/results-summary'>Results Summary</Link>
        <Link to='/product-card'>Product Card</Link>
        <Link to='/rating'>Rating</Link>
        <Link to='/qr-code'>Qr Code</Link>
        <Link to='/nft-card'>NFT Card</Link>
        <Link to='/order-summary'>Order Summary</Link>
        <Link to='/stats-preview-card'>Stats Preview Card</Link>
        <Link to='/3-columns-card'>3 Column Card</Link>
        <Link to='/newsletter'>Newsletter</Link>
      </div>
      <footer className='attribution'>
        Challenge by <a href='https://www.frontendmentor.io?ref=challenge' target='_blank' rel='noreferrer'>Frontend Mentor</a>.
        Coded by <a href='http://github.com/lazaronazareno' target='_blank' rel='noopener noreferrer'>lazaronazareno</a>.
      </footer>
    </div>
  )
}
