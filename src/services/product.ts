import { type ProductType, type ListProductType } from '../types'

const getProducts = async () => {
  const product = await fetch('https://api-ecommerce-raizo.vercel.app/products?limit=')

  if (!product.ok) throw new Error('Error in fetch')

  const { products } = await product.json()

  const data: ListProductType = products?.map((product: ProductType) => (
    {
      id: product.id,
      name: product.name,
      description: product.description,
      price: product.price,
      image: product.image,
      stock: product.stock,
      category: product.category
    }
  ))

  return data
}

export {
  getProducts
}
