import {
  type ProductStockType,
  type ProductImagenType
} from '../types.d'

import { FullScreenIcon } from './Icons'

interface Props {
  image: ProductImagenType
  stock: ProductStockType
}

export const PreviewProduct = ({ image, stock }: Props) => {
  return (
    <>
      <div className='flex items-center align-middle justify-center'>
        <div className="flex justify-center items-center relative w-auto">
          {stock <= 0 &&
            <div className="bg-black w-[50px] h-[40px] rounded-full flex justify-center items-center text-center text-white absolute right-0 top-0">
              <span className=" text-ellipsis text-sm">Sold out</span>
            </div>
          }
          <img alt="" className="h-max w-[300px]" src={image} />
          <div className="bg-black w-[30px] h-[30px] rounded-full flex justify-center items-center text-center text-white absolute bottom-0 left-0 hover:scale-125 transition-all">
            <FullScreenIcon />
          </div>
        </div>
      </div>
    </>
  )
}
