import { createContext, useState } from 'react'
import {
  type ProductCartType,
  type ListProductCartType,
  type ProductPriceType,
  type ProductIdType
} from '../types'

interface Props {
  cart: ListProductCartType
  onAddProductCart?: (product: ProductCartType) => void
  getTotalPrice: () => ProductPriceType
  onRemoveProductCart: ({ id }: { id: ProductIdType }) => void
}

export const CartContext = createContext<Props>({
  cart: [],
  getTotalPrice: () => 0,
  onRemoveProductCart: () => {}
})

export const CartProvider = ({ children }: { children: JSX.Element }) => {
  const [cart, setCart] = useState<ListProductCartType>([])

  const onAddProductCart = (product: ProductCartType) => {
    setCart(prev => [...prev, product])
  }

  const onRemoveProductCart = ({ id }: { id: ProductIdType }) => {
    const newCart = cart?.filter(product => product.id !== id)
    setCart(newCart)
  }

  const getTotalPrice = () => {
    const price = cart.reduce((acc, current) => {
      return acc + (current.price * current.quantity)
    }, 0)

    return price
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        onAddProductCart,
        getTotalPrice,
        onRemoveProductCart
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
