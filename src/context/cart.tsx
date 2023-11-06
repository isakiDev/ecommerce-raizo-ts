import { createContext, useState } from 'react'
import { type ProductCartType, type ListProductCartType } from '../types'

interface Props {
  cart: ListProductCartType
  onAddProductCart: (product: ProductCartType) => void
}

export const CartContext = createContext<Props>({
  cart: [],
  onAddProductCart: () => {}
})

export const CartProvider = ({ children }: { children: JSX.Element }) => {
  const [cart, setCart] = useState<ListProductCartType>([])

  const onAddProductCart = (product: ProductCartType) => {
    setCart(prev => [...prev, product])
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        onAddProductCart
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
