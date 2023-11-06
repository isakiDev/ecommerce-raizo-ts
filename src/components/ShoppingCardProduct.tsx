import { type ProductType } from '../types'
import { CloseIcon } from './Icons'

interface Props {
  product: ProductType
}

export const ShoppingCardProduct = ({ product }: Props) => {
  return (
    <li
      className='flex pb-4'
      key={product.id}
    >
      <img
        alt={`Image product ${product.name}`}
        className='w-[60px] h-[60px]'
        src={product.image}
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
