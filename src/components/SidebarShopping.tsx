import { useContext } from 'react'
import { Link } from 'react-router-dom'

import { SidebarContext } from '../context/sidebar'
import { CartContext } from '../context/cart'

import { ListProductCart } from './ListProductCart'
import { FooterCart } from './FooterCart'
import { CloseIcon, CartRemoveIcon } from './Icons'

export const SidebarShopping = () => {
  const { cart } = useContext(CartContext)
  const { sidebarStates, onToggleShopping } = useContext(SidebarContext)

  const isActive = sidebarStates.shopping ? 'translate-x-[0]' : 'translate-x-[100%]'
  const isHidden = sidebarStates.shopping ? '' : 'hidden'
  const hasProductsInCart = cart.length > 0

  return (
    <>
      <div
        className={`${isHidden} bg-black/90 min-h-screen w-full fixed top-0 left-0 right-0 z-10`}
        onClick={onToggleShopping }
      />

      <aside className={`${isActive} flex flex-col h-screen transition-all duration-300 fixed top-0 right-0 w-[300px] min-h-screen bg-[#101010] shadow-md text-white z-20`}>
        <header className="flex justify-between items-center p-4 border-b-[1px]">
          <h2 className="text-xl">SHOPPING CART</h2>
          <button
            className='hover:text-indigo-500'
            onClick={onToggleShopping}
          >
            <CloseIcon/>
          </button>
        </header>

        <section className='overflow-y-auto flex-grow'>
          {hasProductsInCart
            ? <ListProductCart cart={cart}/>
            : (
              <div className='flex flex-col justify-center items-center p-4'>
                <CartRemoveIcon/>
                <h2 className='font-bold p-2'>EMPY CART</h2>
                <Link className='p-2 bg-indigo-600 mt-4 font-bold' onClick={onToggleShopping} to='/'>RETURN TO SHOP</Link>
              </div>
              )
          }
        </section>

        {hasProductsInCart && <FooterCart/>}
      </aside>
    </>
  )
}
