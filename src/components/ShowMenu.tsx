import { NavLink } from 'react-router-dom'

import { HeaderSidebarMenu } from './HeaderSidebarMenu'
import { MENU_LINKS } from '../consts'

export const ShowMenu = ({ onToggleCategories }: { onToggleCategories: () => void }) => {
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
