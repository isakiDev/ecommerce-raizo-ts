import { type ProductType, type ListProductType } from '../types'

const getProducts = async () => {
  const product = await fetch('http://localhost:8080/products?limit=')

  if (!product.ok) throw new Error('Error in fetch')

  const { products } = await product.json()

  const data: ListProductType = products?.map((product: ProductType) => (
    {
      id: product.id,
      name: product.name,
      description: product.description,
      price: product.price,
      image: product.image,
      quantity: product.quantity,
      category: product.category
    }
  ))

  return data
}

export {
  getProducts
}
