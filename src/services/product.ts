import { type ListProductType } from '../types'

interface ProductInterface {
  _id: string
  name: string
  description: string
  price: number
  image: string
}

const getProduct = async () => {
  const product = await fetch('http://localhost:8080/products')

  const { products } = await product.json()

  const data: ListProductType = products?.map((product: ProductInterface) => (
    {
      id: product._id,
      name: product.name,
      description: product.description,
      price: product.price,
      image: product.image

    }
  ))

  //   if (!result.ok) {
  //     throw new Error('Error in fetch product')
  //   }

  return data
}

export { getProduct }
