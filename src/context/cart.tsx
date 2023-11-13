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
  onRemoveProductCart: ({ id }: { id: ProductIdType }) => void
}

export const CartContext = createContext<Props>({
  cart: [],
  onAddProductCart: () => { },
  getTotalPrice: () => 0,
  onRemoveProductCart: () => { }
})

export const CartProvider = ({ children }: { children: JSX.Element }) => {
  const [cart, setCart] = useState<ListProductCartType>([])

  const { products } = useContext(ProductContext)

  const onAddProductCart = (id: ProductIdType) => {
    // const productFoundInCart = cart?.find(product => product.id === id)
    const productFoundInCart = cart?.findIndex(product => product?.id === id)

    if (productFoundInCart === -1) {
      const productFoundInDB = products?.find(product => product?.id === id)
      console.log('a')

      setCart(prev => [...prev, { ...productFoundInDB, quantity: 1 }])
    } else {
      console.log(productFoundInCart)
      const dataUp = cart.map(product => {
        if (product.id === id) {
          return { ...product, quantity: product.quantity + 1, price: (product.quantity + 1) * product.price }
        }
        return product
      })
      setCart(dataUp)

      // setCart(prev => { [...prev, { ...prev[productFoundInCart], quantity: prev[productFoundInCart].quantity + 1 }] })
    }

    // const productFoundDb = products?.find(product => product?.id === id)

    // if (productFoundDb === undefined) {
    //   console.log('a')
    // } else {
    //   const quantity = productFoundInCart.quantity > 1 ? 1 : 0

    //   setCart(prev => ([...prev, { ...productFoundDb, quantity: 1 }]))
    // }
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
