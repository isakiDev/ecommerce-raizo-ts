import { useContext } from 'react'

import { SidebarContext } from '../context/sidebar'
import {
  MenuIcon,
  ShoppingCart,
  Logo
} from './Icons'

export const Navbar = () => {
  const { onToggleMenu, onToggleShopping } = useContext(SidebarContext)

  return (
    <nav className='flex justify-between items-center bg-black px-4 py-7'>
      <a
        className='hover:cursor-pointer'
        onClick={onToggleMenu}
       >
        <MenuIcon/>
      </a>

      <Logo/>

      <a
        className='hover:cursor-pointer'
        onClick={onToggleShopping}
      >
        <ShoppingCart/>
      </a>
    </nav>
  )
}
