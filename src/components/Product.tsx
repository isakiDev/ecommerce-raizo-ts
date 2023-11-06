import { type ProductType } from '../types.d'

export const Product = ({ id, name, description, price, image }: ProductType) => {
  return (
    <>
      <div className=" w-full">
        <div>
          <img alt="" className="object-cover h-40 w-[100%]" src={image} />
        </div>
        <div className="bg-transparent flex justify-center items-center p-2">
          <p className="text-white">{price}</p>
        </div>
      </div>
    </>
  )
}
