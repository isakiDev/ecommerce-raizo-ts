import { PreviewProduct } from '../components/PreviewProduct'
import { InfoProduct } from '../components/InfoProduct'
import { DescriptionProduct } from '../components/DescriptionProduct'
import { useParams } from 'react-router-dom'
import { ProductContext } from '../context/product'
import { useContext } from 'react'
import { Spinner } from '../components/Spinner'

export const ProductView = () => {
  const { id } = useParams()

  const { products } = useContext(ProductContext)

  const product = products?.find(product => product?.id === id)

  if (product === undefined) return <Spinner/>

  return (
    <div className='bg-neutral-900'>
      <div className="lg:mx-[315px] p-4">
        <div className=' bg-neutral-900 grid grid-cols-1 lg:grid-cols-2'>
          <section className="mt-[20px]">
            <PreviewProduct image={product.image} quantity={product.quantity} />
          </section>

          <section className='mt-[20px] text-white [&>h1]:mt-[10px] [&>div]:mt-[10px] '>
            <InfoProduct
              category={product.category.name}
              name={product.name}
              price={product.price}
              quantity={product.quantity}
            />
          </section>
        </div>
        <DescriptionProduct description={product.description} />
      </div>
    </div>
  )
}
