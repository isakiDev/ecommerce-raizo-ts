import { type ListProductType } from '../types'

interface ProductInterface {
  id: string
  name: string
  description: string
  price: number
  image: string
  quantity: number
  state: boolean
}

const getProduct = async () => {
  const product = await fetch('http://localhost:8080/products')

  const { products } = await product.json()

  const data: ListProductType = products?.map((product: ProductInterface) => (
    {
      id: product.id,
      name: product.name,
      description: product.description,
      price: product.price,
      image: product.image,
      quantity: product.quantity,
      state: product.state
    }
  ))

  //   if (!result.ok) {
  //     throw new Error('Error in fetch product')
  //   }

  return data
}

export { getProduct }
