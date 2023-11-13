import { type ListProductCartType } from '../types'
import { ShoppingCardProduct } from './ShoppingCardProduct'

interface Props {
  cart: ListProductCartType
}

export const ListProductCart = ({ cart }: Props) => {
  console.log(cart)

  return (
    <ul className='flex flex-col p-4'>
      {
        cart?.map(product => (
          <ShoppingCardProduct
            key={product.id}
            product={product}
            quantity={product.quantity}
          />
        ))
      }

    </ul>
  )
}
