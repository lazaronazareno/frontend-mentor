import { Link, Route, Routes } from 'react-router-dom'
import Menu from './menu'
import ProductPreviewCard from './product-preview-card'
import Results from './results-summary'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Menu />} />
      <Route path='/results-summary' element={<Results />} />
      <Route path='/product-card' element={<ProductPreviewCard />} />
    </Routes>
  )
}

export default App
