import { useContext } from 'react'
import { CartContext } from '../context/cart'
import { type ProductCartType } from '../types'
import { CloseIcon } from './Icons'

interface Props {
  product: ProductCartType
  quantity: number
}

export const ShoppingCardProduct = ({ product, quantity }: Props) => {
  const { onRemoveProductCart } = useContext(CartContext)

  const {
    id,
    name,
    image,
    price
  } = product

  return (
    <li
      className='flex pb-4'
      key={id}
    >
      <img
        alt={`Image product ${name}`}
        className='w-[60px] h-[60px]'
        src={image}
      />

      <div className='flex flex-col w-full justify-center pl-4'>
        <div className='flex w-full justify-between items-center'>
          <span>{name}</span>
          <button
            className='hover:text-indigo-500'
            onClick={() => { onRemoveProductCart({ id }) }}
          ><CloseIcon/></button>
        </div>

        <span className='text-sm text-gray-300'>
          {quantity} x <strong className='text-white'>{price}</strong>
        </span>
      </div>
    </li>
  )
}
