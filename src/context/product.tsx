import { createContext, useEffect, useState } from 'react'
import { type ListProductType } from '../types.d'
import { getProducts } from '../services/product'

interface Props {
  products: ListProductType | []
  loading: boolean
}

export const ProductContext = createContext<Props>({
  products: [],
  loading: true
})

export function ProductProvider ({ children }: { children: JSX.Element }) {
  const [{ products, loading }, setProducts] = useState<Props>({
    products: [],
    loading: true
  })

  const getProductsStore = () => {
    getProducts()
      .then(data => {
        setProducts({ loading: false, products: data })
      })
      .catch(err => {
        console.error(err)
        setProducts(prev => ({ ...prev, loading: true }))
      })
  }

  useEffect(() => {
    getProductsStore()
  }, [])

  return (
    <ProductContext.Provider
      value={{
        products,
        loading
      }}
    >
      {children}
    </ProductContext.Provider>
  )
}
