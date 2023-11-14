import { useContext, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

import { SidebarContext } from '../context/sidebar'
import {
  MenuIcon,
  ShoppingCartIcon,
  LogoIcon
} from './Icons'
import { useCategories } from '../hooks/useCategories'
import { type ListCategoriesType } from '../types'

const DropdownMenu = ({ categories }: { categories: ListCategoriesType }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const handleMouseEnter = () => {
    setIsDropdownOpen(true)
  }

  const handleMouseLeave = () => {
    setIsDropdownOpen(false)
  }

  return (
    <div className='md:flex gap-4 justify-center items-center text-sm hidden'>
      <Link className='text-gray-50 hover:text-indigo-400' to='/'>HOME</Link>
      <div
        className='text-gray-50 gap-4 uppercase relative md:flex hidden'
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <span className='hover:cursor-pointer hover:text-indigo-400'>Categories</span>
        {isDropdownOpen && (
        <ul className='absolute bg-neutral-900 p-4 mt-[20px] rounded shadow-md'>
          {categories.map(({ id, name }) => (
            <li
              className='p-2'
              key={id}
            >
              <NavLink
                className='hover:text-indigo-600'
                onClick={handleMouseLeave}
                to={`/categories/${name}`}
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
        )}
      </div>
    </div>
  )
}

export const Navbar = () => {
  const { onToggleMenu, onToggleShopping } = useContext(SidebarContext)
  const { categories } = useCategories()

  return (
    <>
      <nav className='flex justify-between items-center bg-black px-4 py-7'>
        <a
          className='hover:cursor-pointer md:hidden'
          onClick={onToggleMenu}
        >
          <MenuIcon/>
        </a>

        <Link to='/'>
          <LogoIcon/>
        </Link>

        <DropdownMenu categories={categories}/>

        <a
          className='hover:cursor-pointer'
          onClick={onToggleShopping}
        >
          <ShoppingCartIcon/>
        </a>
      </nav>
    </>
  )
}
