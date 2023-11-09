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
  onRemoveProductCart: ({ id }: ProductIdType) => void
}

export const CartContext = createContext<Props>({
  cart: [],
  getTotalPrice: () => ({ price: '$0' }),
  onRemoveProductCart: () => {}
})

export const CartProvider = ({ children }: { children: JSX.Element }) => {
  const [cart, setCart] = useState<ListProductCartType>([])

  const onAddProductCart = (product: ProductCartType) => {
    setCart(prev => [...prev, product])
  }

  const onRemoveProductCart = ({ id }: ProductIdType) => {
    const newCart = cart?.filter(product => product.id !== id)
    setCart(newCart)
  }

  const getTotalPrice = () => {
    const price = cart.reduce((acc, current) => {
      return acc + ((parseFloat(current.price.replace(/[^0-9.]/g, ''))) * current.quantity)
    }, 0)

    return { price: price.toString() }
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
