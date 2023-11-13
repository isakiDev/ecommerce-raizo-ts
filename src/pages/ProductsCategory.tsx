import { useContext } from 'react'
import { ListProduct } from '../components/ListProduct'
import { ProductContext } from '../context/product'
import { useParams } from 'react-router-dom'
import { Spinner } from '../components/Spinner'

export const ProductsCategory = () => {
  const { name } = useParams()
  const { products, loading } = useContext(ProductContext)

  if (loading) return <Spinner/>

  const productsFiltered = products.filter(product => product.category.name === name)

  const hasProducts = productsFiltered.length >= 1

  return (
    <section className='bg-neutral-900 p-4 h-screen'>
      {
        hasProducts
          ? <div className='max-w-[1400px] mx-auto'><ListProduct loading={loading} products={productsFiltered}/></div>
          : <p className='text-gray-50 font-bold text-center'>Products not found</p>
      }
    </section>
  )
}
