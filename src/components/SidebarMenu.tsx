import { useContext, useState } from 'react'

import { SidebarContext } from '../context/sidebar'
import { useCategories } from '../hooks/useCategories'
import { ShowCategories } from './ShowCategories'
import { ShowMenu } from './ShowMenu'

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
