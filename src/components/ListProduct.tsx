import { useContext } from 'react'

import { ProductContext } from '../context/product'
import { Product } from './Product'

export const ListProduct = () => {
  const { products } = useContext(ProductContext)

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-2">
      { products.map(product => (
        <Product
          description={product.description}
          id={product.id}
          image={product.image}
          key={product.id}
          name={product.name}
          price={product.price}
        />
      ))
      }
    </div>
  )
}
