import { type SIDEBAR_STATES } from './consts'

// products
export interface ProductType {
  id: string
  name: string
  description: string
  price: string
  image: string
}

export type ListProductType = ProductType[]
export type ProductIdType = Pick<ProductType, 'id'>
export type ProductPriceType = Pick<ProductType, 'price'>

// sidebars
export type SidebarValues = keyof typeof SIDEBAR_STATES

// cart
export type ProductCartType = Omit<ProductType, 'description'> & { quantity: number }
export type ListProductCartType = ProductCartType[]
export type ProductCartQuantityType = Pick<ProductCartType, 'quantity'>
