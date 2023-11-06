import { useContext } from 'react'
import { Link } from 'react-router-dom'

import { SidebarContext } from '../context/sidebar'
import {
  MenuIcon,
  ShoppingCartIcon,
  LogoIcon
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

      <Link to='/'>
        <LogoIcon/>
      </Link>

      <a
        className='hover:cursor-pointer'
        onClick={onToggleShopping}
      >
        <ShoppingCartIcon/>
      </a>
    </nav>
  )
}
