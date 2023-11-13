import { useContext } from 'react'
import { SidebarContext } from '../context/sidebar'
import { CloseIcon } from './Icons'

export const HeaderSidebarMenu = ({ children }: { children: JSX.Element }) => {
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
