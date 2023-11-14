import { useContext } from 'react'
import { CartContext } from '../context/cart'
import { type ProductCartType } from '../types'
import { CloseIcon, PlusIcon, SubtractIcon } from './Icons'

interface Props {
  product: ProductCartType
  quantity: number
}

export const ShoppingCardProduct = ({ product, quantity }: Props) => {
  const {
    onRemoveProductCart,
    onAddProductCart,
    onLessProductCart
  } = useContext(CartContext)

  const {
    id,
    name,
    image,
    price
  } = product

  return (
    <li
      className='flex pb-4'
    >
      <img
        alt={`Image product ${name}`}
        className='w-[70px] h-[70px]'
        src={image}
      />

      <div className='flex flex-col w-full justify-center pl-4'>
        <div className='flex w-full justify-between items-center'>
          <span>{name}</span>
          <button
            className='hover:text-indigo-500'
            onClick={() => { onRemoveProductCart(id) }}
          ><CloseIcon/></button>
        </div>
        <div className="flex">
          <button
            className='w-[30px] h-[30px] rounded-full flex justify-center items-center text-center text-white hover:scale-125 transition-all [&>svg]:max-h-full p-1'
            onClick={() => { onLessProductCart(id) }}
          >
            <SubtractIcon/>
          </button>

          <span className='flex items-center text-sm text-gray-300'>
            {quantity} x &nbsp;<strong className='text-white'> {price}</strong>
          </span>
          <button
            className='w-[30px] h-[30px] rounded-full flex justify-center items-center text-center text-white hover:scale-125 transition-all [&>svg]:max-h-full'
            onClick={() => { onAddProductCart(id) }}
          >
            <PlusIcon/>
          </button>
        </div>
      </div>
    </li>
  )
}
