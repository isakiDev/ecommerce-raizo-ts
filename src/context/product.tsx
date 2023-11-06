import { createContext, useState } from 'react'

import productsMock from '../mock/products.json'
import { type ListProductType } from '../types.d'

interface Props {
  products: ListProductType
}

export const ProductContext = createContext<Props>({
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
