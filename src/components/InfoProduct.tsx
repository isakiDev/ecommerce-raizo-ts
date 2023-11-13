import {
  HeartTransparentIcon,
  RandomIcon
} from './Icons'
import { type ProductPriceType, type ProductNameType, type ProductQuantityType } from '../types.d'
import { Link } from 'react-router-dom'

interface Props {
  name: ProductNameType
  price: ProductPriceType
  quantity: ProductQuantityType
  category: string
}

export const InfoProduct = ({ name, price, quantity, category }: Props) => {
  return (
    <>
      <nav className='text-sm'>
        <Link to="/">home / </Link>
        <Link to={`/categories/${category}`}>{category}</Link>
      </nav>
      <h1 className='text-2xl'>{name}</h1>
      <h1 className='text-xl'>${price}</h1>
      {quantity < 0 && <h1 className='text-red-600'>Sold Out</h1>}

      <div className='flex justify-left items-center [&>a]:mr-3 [&>svg]:w-[25px] [&>svg]:h-[25px] [&>a]:cursor-pointer [&>svg]:cursor-pointer'>
        <RandomIcon />
        <a>Compare</a>
        <HeartTransparentIcon />
        <a>Add list</a>
      </div>
    </>
  )
}
