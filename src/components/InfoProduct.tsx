import {
  HeartTransparentIcon,
  RandomIcon
} from './Icons'
import { type ProductPriceType, type ProductNameType, type ProductQuantityType, type ProductIdType } from '../types.d'
import { CartContext } from '../context/cart'
import { useContext } from 'react'
import { SidebarContext } from '../context/sidebar'

interface Props {
  id: ProductIdType
  name: ProductNameType
  price: ProductPriceType
  quantity: ProductQuantityType
  category: string
}

export const InfoProduct = ({ id, name, price, quantity }: Props) => {
  const { onAddProductCart } = useContext(CartContext)
  const { onToggleShopping } = useContext(SidebarContext)

  const handleClick = () => {
    onAddProductCart(id)
    onToggleShopping()
  }

  return (
    <>
      <nav className='text-sm'>
        <Link to="/">home / </Link>
        <Link to={`/categories/${category}`}>{category}</Link>
      </nav>
      <h1 className='text-2xl'>{name}</h1>
      <h1 className='text-xl'>${price}</h1>
      {quantity < 0
        ? <h1 className='text-red-600'>Sold Out</h1>
        : <div>
          <h1 className='text-sky-600'>{quantity} available</h1>
          <button className='text-white bg-[#5A5FDE] hover:bg-indigo-600 mt-2 px-5 py-3 rounded' onClick={ handleClick }>Agregar al Carro</button>
        </div>
      }

      <div className='flex justify-left items-center [&>a]:mr-3 [&>svg]:w-[25px] [&>svg]:h-[25px] [&>a]:cursor-pointer [&>svg]:cursor-pointer'>
        <RandomIcon />
        <a>Compare</a>
        <HeartTransparentIcon />
        <a>Add list</a>
      </div>
    </>
  )
}
