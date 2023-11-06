import { useContext } from 'react'

import { SidebarContext } from '../context/sidebar'
import { CartContext } from '../context/cart'
import { CloseIcon } from './Icons'
import { ListProductCart } from './ListProductCart'

export const SidebarShopping = () => {
  const { cart } = useContext(CartContext)
  const { sidebarStates, onToggleShopping } = useContext(SidebarContext)

  const isActive = sidebarStates.shopping ? 'translate-x-[0]' : 'translate-x-[100%]'
  const isHidden = sidebarStates.shopping ? '' : 'hidden'

  return (
    <>
      <div
        className={`${isHidden} bg-black/90 min-h-screen w-full fixed top-0 left-0 right-0 z-10`}
        onClick={onToggleShopping }
      />

      <aside className={`${isActive} flex flex-col h-screen transition-all duration-300 fixed top-0 right-0 w-[300px] min-h-screen bg-[#101010] shadow-md text-white z-20`}>
        <header className="flex justify-between items-center p-4 border-b-[1px]">
          <h2 className="text-xl">SHOPPING CART</h2>
          <button onClick={onToggleShopping} >
            <CloseIcon/>
          </button>
        </header>

        <section className='overflow-y-auto flex-grow'>
          {cart.length <= 0
            ? <h1>No tiene</h1>
            : <ListProductCart cart={cart}/>
          }
        </section>

        <footer className='flex flex-col gap-4 p-4 border-t-[1px] flex-grow-0'>
          <div className='flex justify-between items-center'>
            <p>SUBTOTAL :</p>
            <p>$32132</p>
          </div>
          <button
            className='bg-indigo-600 h-[42px] w-full'
          >FINALIZAR COMPRA</button>
        </footer>
      </aside>
    </>
  )
}
