import { NavLink } from 'react-router-dom'

import { HeaderSidebarMenu } from './HeaderSidebarMenu'
import { type ListCategoriesType } from '../types'
import { ArrowLeftIcon } from './Icons'
import { useContext } from 'react'
import { SidebarContext } from '../context/sidebar'

interface Props {
  categories: ListCategoriesType
  onToggleCategories: () => void
}

export const ShowCategories = ({ categories, onToggleCategories }: Props) => {
  const { onToggleMenu } = useContext(SidebarContext)

  return (
    <>
      <HeaderSidebarMenu>
        <a onClick={onToggleCategories}>
          <ArrowLeftIcon/>
        </a>
      </HeaderSidebarMenu>
      {
        categories.map(({ id, name }) => (
          <NavLink
            className="text-sm font-semibold py-4 px-4"
            key={id}
            onClick={onToggleMenu}
            to={`/categories/${name}`}
          >{name}</NavLink>
        ))
      }
    </>
  )
}
