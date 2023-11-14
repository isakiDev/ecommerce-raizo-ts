import { useContext } from 'react'
import { ListProduct } from '../components/ListProduct'
import { ProductContext } from '../context/product'
import { useParams } from 'react-router-dom'
import { Spinner } from '../components/Spinner'

export const ProductsCategory = () => {
  const { name: nameCategory } = useParams()
  const { products, loading } = useContext(ProductContext)

  if (loading) return <Spinner/>

  const productsFiltered = products.filter(product => product.category.name === nameCategory)

  const hasProducts = productsFiltered.length >= 1

  return (
    <section className='bg-neutral-900 text-gray-50 h-screen flex flex-col items-center p-4'>
      <h2 className='text-xl pb-8'>{nameCategory}</h2>

      {
        hasProducts
          ? <div className='max-w-[1400px] mx-auto'><ListProduct loading={loading} products={productsFiltered}/></div>
          : <p className='font-bold'>Products not found</p>
      }
    </section>
  )
}
