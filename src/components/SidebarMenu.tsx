import { useContext } from 'react'
import { NavLink } from 'react-router-dom'

import { SidebarContext } from '../context/sidebar'
import { MENU_LINKS } from '../consts'
import { useCategories } from '../hooks/useCategories'

export const SidebarMenu = () => {
  const { sidebarStates, onToggleMenu } = useContext(SidebarContext)

  const { categories, loading } = useCategories()

  const isActive = sidebarStates.menu ? 'translate-x-[0]' : 'translate-x-[-100%]'
  const isHidden = sidebarStates.menu ? '' : 'hidden'

  return (
    <>
      <div
        className={`${isHidden} bg-black/90 min-h-screen w-full fixed top-0 left-0 right-0 z-10`}
        onClick={onToggleMenu}
      />

      <aside className={`${isActive} transition-all duration-300 fixed top-0 left-0 w-[300px] min-h-screen bg-[#101010] shadow-md text-white z-20`}>
        <header className="flex justify-between items-center p-4 border-b-[1px]">
          <h2 className="text-xl">Menu</h2>
          <a href="">Icon</a>
        </header>

        <section className="flex flex-col divide-y divide-gray-500/50">
          {
            MENU_LINKS.map(({ literal, ref }) => (
              <NavLink
                className="text-sm font-semibold py-4 px-4"
                key={literal}
                to={ref}
              >{literal.toUpperCase()}</NavLink>
            ))
          }
        </section>

        {
        loading
          ? <h1>Loading....</h1>
          : (
              categories.map(category => (
                <div
                  className='flex'
                  key={category.id}
                >
                  <a>{category.name}</a>
                </div>
              ))
            )
      }
      </aside>
    </>
  )
}
