import { createContext, useState } from 'react'

import { type ListProductType } from '../types'
import productsMock from '../mock/products.json'

interface ContextData {
  products: ListProductType
}

export const ProductContext = createContext<ContextData>({
  products: []
})

const initialState = productsMock

export function ProductProvider ({ children }: { children: JSX.Element }) {
  const [products] = useState(initialState)

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
