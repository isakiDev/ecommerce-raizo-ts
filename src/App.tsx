import { useState } from 'react'
import { ListProduct } from './components/ListProduct'
import products from './mock/products.json'

const initialState = products

function App () {
  const [listState] = useState(initialState)

  return (
    <>
      <ListProduct listState = {listState} />
    </>
  )
}

export default App
