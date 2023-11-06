import { createContext, useState } from 'react'
import { SIDEBAR_STATES } from '../consts'

export const SidebarContext = createContext({
  sidebarStates: SIDEBAR_STATES,
  onToggleMenu: () => {},
  onToggleShopping: () => {}
})

export const SidebarProvider = ({ children }: { children: JSX.Element }) => {
  const [sidebarStates, setSidebarState] = useState({
    menu: false,
    shopping: false
  })

  const onToggleMenu = () => {
    setSidebarState({
      ...sidebarStates,
      menu: !sidebarStates.menu
    })
  }

  const onToggleShopping = () => {
    setSidebarState({
      ...sidebarStates,
      shopping: !sidebarStates.shopping
    })
  }

  return (
    <SidebarContext.Provider
      value={{
        sidebarStates,
        onToggleMenu,
        onToggleShopping
      }}
    >
      {children}
    </SidebarContext.Provider>
  )
}
