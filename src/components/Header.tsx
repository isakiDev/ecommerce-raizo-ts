import { Navbar } from '../components/Navbar'
import { Sidebar } from '../components/Sidebar'

interface Props {
  active: boolean
  onToggleMenu: () => void
}

export const Header = ({ active, onToggleMenu }: Props) => {
  return (
    <header>
      <Navbar
        onToggleMenu={onToggleMenu}
      />

      <Sidebar
        onToggleMenu={onToggleMenu}
        active={active}
      />
    </header>
  )
}
