import { useState } from 'react'
import { Header } from './components/Header'

function App () {
  const [toggleMenu, setToggleMenu] = useState(false)

  const handleClickMenu = () => {
    setToggleMenu(!toggleMenu)
  }

  return (
    <>
      <Header
        active={toggleMenu}
        onToggleMenu={handleClickMenu}
      />
    </>
  )
}

export default App
