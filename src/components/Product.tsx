import { type ProductoType } from '../types.d'

export const Product = ({ id, name, detail, price, image }: ProductoType) => {
  return (
    <>
      <div className=" w-full">
          <div>
              <img src={image} alt="" className="object-cover h-40 w-[100%]" />
          </div>
          <div className="bg-transparent flex justify-center items-center p-2">
              <p className="text-white">{price}</p>
          </div>
      </div>
    </>
  )
}
