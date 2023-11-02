import { ListProduct } from '../components/ListProduct'
import { Banner } from '../components/Banner'

export const Home = () => {
  return (
    <main className='bg-black/95'>
      <Banner/>

      <section className='max-w-[1000px] mx-auto p-4'>
        <ListProduct/>
      </section>
    </main>
  )
}
