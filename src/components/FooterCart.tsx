import { useContext } from 'react'
import { CartContext } from '../context/cart'

export const FooterCart = () => {
  const { getTotalPrice } = useContext(CartContext)

  const price = getTotalPrice()

  return (
    <footer className='flex flex-col gap-4 p-4 border-t-[1px] flex-grow-0'>
      <div className='flex justify-between items-center font-bold'>
        <p>SUBTOTAL :</p>
        <p>${price}</p>
      </div>
      <button className='bg-indigo-600 h-[42px] hover:bg-indigo-800'>FINALIZAR COMPRA</button>
    </footer>
  )
}
