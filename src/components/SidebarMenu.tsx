import { useContext } from 'react'

import { SidebarContext } from '../context/sidebar'
import { MENU_LINKS } from '../consts'

export const SidebarMenu = () => {
  const { sidebarStates, onToggleMenu } = useContext(SidebarContext)

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
              <a
                className="text-sm font-semibold py-4 px-4"
                href={ref}
                key={literal}
              >{literal.toUpperCase()}</a>
            ))
          }
        </section>
      </aside>
    </>
  )
}
