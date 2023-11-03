import { type SIDEBAR_STATES } from './consts'

export interface ProductoType {
  id: number
  name: string
  detail: string
  price: string
  image: string
}

export type ListProductType = ProductoType[]
export type SidebarValues = keyof typeof SIDEBAR_STATES
