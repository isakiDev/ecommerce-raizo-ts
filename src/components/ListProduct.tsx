import { Product } from './Product'
import { Spinner } from './Spinner'
import { type ListProductType } from '../types'

interface Props {
  products: ListProductType
  loading: boolean
}

export const ListProduct = ({ products, loading }: Props) => {
  if (loading) return <Spinner/>

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-2">
      {
      products.map(product => (
        <Product
          category={product.category}
          description={product.description}
          id={product.id}
          image={product.image}
          key={product.id}
          name={product.name}
          price={product.price}
          stock={product.stock}
        />
      ))
    }
    </div>
  )
}
