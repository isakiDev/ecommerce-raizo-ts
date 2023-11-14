import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'

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
    <div
      className='text-gray-50 gap-4 text-sm uppercase relative md:flex hidden'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span>Categories</span>
      {isDropdownOpen && (
        <ul className='absolute bg-neutral-900 p-4 mt-[20px] rounded shadow-md'>
          {categories.map(({ id, name }) => (
            <li
              className='p-2'
              key={id}
            >
              <Link
                className='hover:text-indigo-600'
                onClick={handleMouseLeave}
                to={`/categories/${name}`}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      )}
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
