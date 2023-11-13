import { type ProductType } from '../types.d'
import { CartAddIcon } from './Icons'
import { Link } from 'react-router-dom'

export const Product = ({ id, name, price, image, stock }: ProductType) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'instant'
    })
  }
  return (
    <div className=" w-full">
      <Link to={`/products/${id}`}>
        <div className='flex relative' onClick={scrollToTop}>
          {stock < 0 &&
          <div className="bg-black/50 w-[40px] h-[40px] rounded-full flex justify-center items-center text-center text-white absolute right-0 top-0">
            <span className=" text-ellipsis text-sm">{stock}</span>
          </div>
          }
          <img alt="" className="object-cover h-40 w-[100%]" src={image} />
          <div className='bg-[#2493D4]/60 hover:bg-[#2493D4] flex absolute w-[40px] h-[40px]
          [&>svg]:h-max [&>svg]:w-max justify-center items-center bottom-0 left-0 p-1'
          >
            <CartAddIcon/>
          </div>
        </div>
        <div className="bg-transparent flex justify-center items-center p-2 text-white flex-col">
          <p>{name}</p>
          <p>${price}</p>
        </div>
      </Link>
    </div>
  )
}
