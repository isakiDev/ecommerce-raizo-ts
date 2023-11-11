import { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'

import { SidebarContext } from '../context/sidebar'
import { MENU_LINKS } from '../consts'
import { useCategories } from '../hooks/useCategories'
import { type ListCategoriesType } from '../types'

import { ArrowLeftIcon, CloseIcon } from './Icons'

const ShowCategories = ({ categories, onToggleCategories }: { categories: ListCategoriesType, onToggleCategories: () => void }) => {
  return (
    <>
      <HeaderSidebarMenu>
        <a onClick={onToggleCategories}>
          <ArrowLeftIcon/>
        </a>
      </HeaderSidebarMenu>
      {
        categories.map(({ id, name }) => (
          <NavLink
            className="text-sm font-semibold py-4 px-4"
            key={id}
            to={`/categories/${name}`}
          >{name}</NavLink>
        ))
      }
    </>
  )
}

const ShowMenu = ({ onToggleCategories }: { onToggleCategories: () => void }) => {
  return (
    <>
      <HeaderSidebarMenu>
        <h2 className='text-xl'>Menu</h2>
      </HeaderSidebarMenu>
      {
        MENU_LINKS.map(({ literal, ref }) => {
          const showCategories = literal === 'Categorias' ? onToggleCategories : () => {}

          return (
            <NavLink
              className="text-sm font-semibold py-4 px-4"
              key={literal}
              onClick={showCategories}
              to={ref}
            >{literal.toUpperCase()}</NavLink>
          )
        })
      }
    </>
  )
}

const HeaderSidebarMenu = ({ children }: { children: JSX.Element }) => {
  const { onToggleMenu } = useContext(SidebarContext)

  return (
    <header className="flex justify-between items-center p-4 border-b-[1px]">
      {children}
      <a onClick={onToggleMenu}>
        <CloseIcon/>
      </a>
    </header>
  )
}

export const SidebarMenu = () => {
  const [isActiveCategories, setIsActiveCategories] = useState(false)

  const { sidebarStates, onToggleMenu } = useContext(SidebarContext)
  const { categories } = useCategories()

  const isActive = sidebarStates.menu ? 'translate-x-[0]' : 'translate-x-[-100%]'
  const isHidden = sidebarStates.menu ? '' : 'hidden'

  const handleClickToggleCategories = () => {
    setIsActiveCategories(!isActiveCategories)
  }

  return (
    <>
      <div
        className={`${isHidden} bg-black/90 min-h-screen w-full fixed top-0 left-0 right-0 z-10`}
        onClick={onToggleMenu}
      />

      <aside className={`${isActive} transition-all duration-300 fixed top-0 left-0 w-[300px] min-h-screen bg-[#101010] shadow-md text-white z-20`}>
        <section className="flex flex-col divide-y divide-gray-500/50">
          {
            isActiveCategories
              ? <ShowCategories
                  categories={categories}
                  onToggleCategories={handleClickToggleCategories}
                />
              : <ShowMenu onToggleCategories={handleClickToggleCategories}/>
          }
        </section>
      </aside>
    </>
  )
}
