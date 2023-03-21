import { Route, Routes } from 'react-router-dom'
import Layout from './layout'
import Menu from './menu'
import NftCard from './components/nft-card-component'
import OrderSummary from './components/order-summary'
import ProductPreviewCard from './components/product-preview-card'
import QrCode from './components/qr-code-component'
import Rating from './components/rating-component'
import Results from './components/results-summary'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Menu />} />
      <Route element={<Layout />}>
        <Route path='/results-summary' element={<Results />} />
        <Route path='/product-card' element={<ProductPreviewCard />} />
        <Route path='/rating' element={<Rating />} />
        <Route path='/qr-code' element={<QrCode />} />
        <Route path='/nft-card' element={<NftCard />} />
        <Route path='/order-summary' element={<OrderSummary />} />
      </Route>
    </Routes>
  )
}

export default App
