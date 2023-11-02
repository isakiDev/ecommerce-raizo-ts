import { useState } from 'react'
import { Navbar } from '../components/Navbar'
import { Sidebar } from '../components/Sidebar'

export const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  const handleClickMenu = () => {
    setToggleMenu(!toggleMenu)
  }

  return (
    <header>
      <Navbar
        onToggleMenu={handleClickMenu}
      />

      <Sidebar
        onToggleMenu={handleClickMenu}
        active={toggleMenu}
      />
    </header>
  )
}
