import { createContext, useEffect, useState } from 'react'

import { type ListProductType } from '../types.d'
import { getProducts } from '../services/product'
import { getCategories } from '../services/categories'

interface Props {
  products: ListProductType
}

export const ProductContext = createContext<Props>({
  products: []
})

export function ProductProvider ({ children }: { children: JSX.Element }) {
  const [products, setProducts] = useState<ListProductType>([])

  const getProductsStore = () => {
    getProducts()
      .then(products => { setProducts(products) })
      .catch(err => { console.error(err) })
  }

  const getCategoriesStore = () => {
    getCategories()
      .then(categories => { console.log(categories) })
      .catch(err => { console.error(err) })
  }

  useEffect(() => {
    getProductsStore()
    getCategoriesStore()
  }, [])

  return (
    <ProductContext.Provider
      value={{
        products
      }}
    >
      {children}
    </ProductContext.Provider>
  )
}
