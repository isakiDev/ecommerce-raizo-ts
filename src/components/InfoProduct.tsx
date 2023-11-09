import {
  HeartTransparentIcon,
  RandomIcon
} from './Icons'
import { type ProductPriceType, type ProductNameType } from '../types.d'

interface Props {
  name: ProductNameType
  price: ProductPriceType
}

export const InfoProduct = ({ name, price }: Props) => {
  console.log(price)

  return (
    <>
      <nav className='text-sm'>
        <a href="">home / </a>
        <a href="">category / </a>
        <a href="">brand category</a>
      </nav>
      <h1 className='text-2xl'>{name}</h1>
      <h1 className='text-xl'>${price}</h1>
      <ul className='list-disc pl-4 text-sm'>
        <li>characteristic</li>
        <li>.</li>
        <li>.</li>
        <li>.</li>
        <li>.</li>
        <li>.</li>
      </ul>
      <h1 className='text-red-600'>Sold Out</h1>

      <div className='flex justify-left items-center [&>a]:mr-3 [&>svg]:w-[25px] [&>svg]:h-[25px] [&>a]:cursor-pointer [&>svg]:cursor-pointer'>
        <RandomIcon />
        <a>Compare</a>
        <HeartTransparentIcon />
        <a>Add list</a>
      </div>
    </>
  )
}
