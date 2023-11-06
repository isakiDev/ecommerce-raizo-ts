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
  const [cart, setCart] = useState<ListProductCartType>([
    {
      id: '2',
      image: 'https://images.samsung.com/is/image/samsung/p6pim/cl/ls34a650ublxzs/gallery/cl-s65ua-461876-ls34a650ublxzs-536828514?$730_584_PNG$',
      name: 'Monitor LG',
      price: '$5000',
      quantity: 1
    },
    {
      id: '3',
      image: 'https://cdnx.jumpseller.com/centralgamer/image/15214471/thumb/610/610?1686082908',
      name: 'Mouse Logitech',
      price: '$600',
      quantity: 4
    }
  ])

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
