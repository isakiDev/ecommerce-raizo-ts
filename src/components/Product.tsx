import { type ProductoType } from '../types.d'

export const Product = ({ id, name, detail, price, image }: ProductoType) => {
  return (
    <>
        <div className="bg-black h-[250px] w-[250px]">
            <div className="bg-red-400 ">
                <img src={image} alt="" className="object-cover h-40 w-[100%]" />
            </div>
            <div className="bg-transparent h-[29%] flex justify-center items-center">
                <p className="text-white">{price}</p>
            </div>
        </div>

    </>
  )
}
