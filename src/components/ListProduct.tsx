import { Product } from './Product'

interface ProductoType {
  id: number
  name: string
  detail: string
  price: string
  image: string
}

type ListProductType = ProductoType[]

interface Props {
  listState: ListProductType
}

export const ListProduct = ({ listState }: Props) => {
  console.log(listState)

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-2 ">
        { listState?.map(product => (
          <Product key={product.id} id = {product.id} name = {product.name} detail = {product.detail} price = {product.price} image = {product.image} />
        ))}
        {/* <Product/> */}

    </div>
  )
}
