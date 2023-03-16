import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header>
      <Link className='back' to='/'>Back</Link>
    </header>
  )
}
