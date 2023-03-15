import { Link, Route, Routes } from 'react-router-dom'
import Menu from './menu'
import Results from './results-summary'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Menu />} />
      <Route path='/results-summary' element={<Results />} />
    </Routes>
  )
}

export default App
