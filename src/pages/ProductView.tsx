import { PreviewProduct } from '../components/PreviewProduct'
import { InfoProduct } from '../components/InfoProduct'
import { DescriptionProduct } from '../components/DescriptionProduct'

export const ProductView = () => {
  return (
    <div className='bg-neutral-900 '>
      <div className="lg:mx-[315px] p-4">

      <div className=' bg-neutral-900 grid grid-cols-1 lg:grid-cols-2'>
        <section className="mt-[20px]">
          <PreviewProduct />
        </section>

        <section className='mt-[20px] text-white [&>h1]:mt-[10px] [&>div]:mt-[10px] '>
          <InfoProduct />
        </section>
      </div>
      <DescriptionProduct/>
      </div>
    </div>
  )
}
