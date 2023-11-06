import { type SIDEBAR_STATES } from './consts'

export interface ProductType {
  id: number
  name: string
  detail: string
  price: string
  image: string
}

export type ListProductType = ProductType[]
export type SidebarValues = keyof typeof SIDEBAR_STATES

export interface ProductCartType extends ProductType {
  quantity: 0
}

export type ListProductCartType = ProductCartType[]
