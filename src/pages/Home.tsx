import { useState } from 'react'
import { ListProduct } from '../components/ListProduct'

import products from '../mock/products.json'

const initialState = products

export const Home = () => {
  const [listState] = useState(initialState)

  return (
    <>
      <ListProduct listState = {listState} />
    </>
  )
}
