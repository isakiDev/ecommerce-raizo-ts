import { ListProduct } from '../components/ListProduct'
import { Banner } from '../components/Banner'

export const Home = () => {
  return (
    <main className='px-4 bg-black/95'>
      <Banner/>
      <ListProduct/>
    </main>
  )
}
