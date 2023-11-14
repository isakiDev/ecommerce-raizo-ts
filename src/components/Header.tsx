import { Navbar } from '../components/Navbar'
import { SidebarMenu } from './SidebarMenu'
import { SidebarShopping } from './SidebarShopping'

export const Header = () => {
  return (
    <header>
      <Navbar/>
      <SidebarMenu/>
      <SidebarShopping/>
    </header>
  )
}
