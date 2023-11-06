import { type ProductoType } from '../types'
import { CloseIcon } from './Icons'

interface Props {
  product: ProductoType
}

export const ShoppingCardProduct = ({ product }: Props) => {
  return (
    <li
      className='flex pb-4'
      key={product.id}
    >
      <img
        className='w-[60px] h-[60px]'
        src={product.image}
        alt={`Image product ${product.name}`}
      />
      <div className='flex w-full justify-between items-center'>
        <a
          className='p-4'
        >{product.name}</a>
        <button
          onClick={() => {}}
        >
          <CloseIcon/>
        </button>
      </div>
    </li>
  )
}
