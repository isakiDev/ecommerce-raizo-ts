import { ListProduct } from '../components/ListProduct'
import { Banner } from '../components/Banner'
import { ProductContext } from '../context/product'
import { useContext } from 'react'

export const Home = () => {
  const { products, loading } = useContext(ProductContext)

  return (
    <main className='bg-black/95'>
      <Banner/>

      <section className='max-w-[1000px] mx-auto p-4'>
        <ListProduct loading={loading} products={products}/>
      </section>
    </main>
  )
}
