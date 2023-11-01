import {
  MenuIcon,
  ShoppingCart,
  Logo
} from './Icons'

interface Props {
  onToggleMenu: () => void
}

export const Navbar = ({ onToggleMenu }: Props) => {
  return (
    <nav className='flex justify-between items-center bg-black px-4 py-7'>
      <a
        className='hover:cursor-pointer'
        onClick={onToggleMenu}
       >
        <MenuIcon/>
      </a>
      <Logo/>
      <ShoppingCart/>
    </nav>
  )
}
