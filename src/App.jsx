import { Route, Routes } from 'react-router-dom'
import Menu from './menu'
import NftCard from './nft-card-component'
import ProductPreviewCard from './product-preview-card'
import QrCode from './qr-code-component'
import Rating from './rating-component'
import Results from './results-summary'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Menu />} />
      <Route path='/results-summary' element={<Results />} />
      <Route path='/product-card' element={<ProductPreviewCard />} />
      <Route path='/rating' element={<Rating />} />
      <Route path='/qr-code' element={<QrCode />} />
      <Route path='/nft-card' element={<NftCard />} />
    </Routes>
  )
}

export default App
