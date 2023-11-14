import { ListProduct } from './components/ListProduct'
import { Header } from './components/Header'
import { useContext } from 'react'
import { ProductContext } from './context/product'

export function App () {
  const { products, loading } = useContext(ProductContext)

  return (
    <>
      <Header/>
      <ListProduct
        loading={loading}
        products={products}
      />
    </>
  )
}
