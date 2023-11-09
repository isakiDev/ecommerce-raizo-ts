import { PreviewProduct } from '../components/PreviewProduct'
import { InfoProduct } from '../components/InfoProduct'
import { DescriptionProduct } from '../components/DescriptionProduct'
import { useParams } from 'react-router-dom'
import { ProductContext } from '../context/product'
import { useContext } from 'react'

export const ProductView = () => {
  const { id } = useParams()

  const { products } = useContext(ProductContext)

  const product = products.find(product => product.id === id)

  const hasProduct =
  {
    name: product?.name ?? '',
    description: product?.description ?? '',
    price: product?.price ?? 0,
    image: product?.image ?? '',
    quantity: product?.quantity ?? 0
  }

  return (
    <div className='bg-neutral-900 '>
      <div className="lg:mx-[315px] p-4">
        <div className=' bg-neutral-900 grid grid-cols-1 lg:grid-cols-2'>
          <section className="mt-[20px]">
            <PreviewProduct image={hasProduct.image} quantity={hasProduct.quantity} />
          </section>

          <section className='mt-[20px] text-white [&>h1]:mt-[10px] [&>div]:mt-[10px] '>
            <InfoProduct name={hasProduct.name} price={hasProduct.price} quantity={hasProduct.quantity}/>
          </section>
        </div>
        <DescriptionProduct description={hasProduct.description} />
      </div>
    </div>
  )
}
