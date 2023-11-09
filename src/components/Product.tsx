// import { useContext } from 'react'
import { type ProductType } from '../types.d'
// import { CartContext } from '../context/cart'
import { CartAddIcon } from './Icons'
import { Link } from 'react-router-dom'

export const Product = ({ id, name, description, price, image }: ProductType) => {
  // const { onAddProductCart } = useContext(CartContext)

  // const handleClickAddProduct = () => {
  //   // const product = {
  //   //   id,
  //   //   name,
  //   //   description,
  //   //   price,
  //   //   image
  //   // }
  //   // onAddProductCart(product)
  // }

  return (
    <>
      <div className=" w-full">
        <Link to={`/products/${id}`}>
          <div className='flex relative'>
            <div className='bg-[#2493D4]/60 hover:bg-[#2493D4] flex absolute w-[40px] h-[40px]
          [&>svg]:h-max [&>svg]:w-max justify-center items-center bottom-0 left-0 p-1'
            >
              <CartAddIcon/>
            </div>
            <img alt="" className="object-cover h-40 w-[100%]" src={image} />
          </div>
          <div className="bg-transparent flex justify-center items-center p-2 text-white flex-col">
            <p>{name}</p>
            <p>${price}</p>
          </div>
        </Link>
      </div>
    </>
  )
}
