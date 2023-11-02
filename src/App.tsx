import { useState } from 'react'

import { ListProduct } from './components/ListProduct'
import { Header } from './components/Header'
import products from './mock/products.json'

const initialState = products

export function App () {
  const [listState] = useState(initialState)
  const [toggleMenu, setToggleMenu] = useState(false)

  const handleClickMenu = () => {
    setToggleMenu(!toggleMenu)
  }

  return (
    <>
      <Header
        active={toggleMenu}
        onToggleMenu={handleClickMenu}
      />
      <ListProduct listState = {listState} />
    </>
  )
}
