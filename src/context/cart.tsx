import { createContext, useState, useContext } from 'react'
import {
  type ListProductCartType,
  type ProductPriceType,
  type ProductIdType
} from '../types'
import { ProductContext } from './product'

interface Props {
  cart: ListProductCartType
  onAddProductCart: (id: ProductIdType) => void
  getTotalPrice: () => ProductPriceType
  onRemoveProductCart: (id: ProductIdType) => void
  onLessProductCart: (id: ProductIdType) => void
}

export const CartContext = createContext<Props>({
  cart: [],
  onAddProductCart: () => { },
  getTotalPrice: () => 0,
  onRemoveProductCart: () => { },
  onLessProductCart: () => {}
})

export const CartProvider = ({ children }: { children: JSX.Element }) => {
  const [cart, setCart] = useState<ListProductCartType>([])

  const { products } = useContext(ProductContext)

  const onAddProductCart = (id: ProductIdType) => {
    const productFoundIndex = cart?.findIndex(product => product.id === id)

    if (productFoundIndex === -1) {
      const { ...newProduct } = products?.find(product => product.id === id)

      setCart(prev => [...prev, { ...newProduct, quantity: 1 }])
      return
    }

    if (cart[productFoundIndex].stock === cart[productFoundIndex].quantity) return

    setCart(prev => [
      ...prev.slice(0, productFoundIndex),
      { ...prev[productFoundIndex], quantity: prev[productFoundIndex].quantity + 1 },
      ...prev.slice(productFoundIndex + 1)
    ])
  }

  const onLessProductCart = (id: ProductIdType) => {
    const productFoundIndex = cart?.findIndex(product => product.id === id)

    if (cart[productFoundIndex].quantity === 1) return

    setCart(prev => [
      ...prev.slice(0, productFoundIndex),
      { ...prev[productFoundIndex], quantity: prev[productFoundIndex].quantity - 1 },
      ...prev.slice(productFoundIndex + 1)
    ])
  }

  const onRemoveProductCart = (id: ProductIdType) => {
    const newCart = cart?.filter(product => product.id !== id)
    setCart(newCart)
  }

  const getTotalPrice = () => {
    const price = cart.reduce((acc, current) => {
      return acc + (current.price * current.quantity)
    }, 0)

    return Number(price.toFixed(2))
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        onAddProductCart,
        getTotalPrice,
        onRemoveProductCart,
        onLessProductCart
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
