import { type SIDEBAR_STATES } from './consts'

// products
export interface ProductType {
  id: string
  name: string
  description: string
  price: number
  image: string
}

export type ListProductType = ProductType[]
export type ProductIdType = Pick<ProductType, 'id'>
export type ProductPriceType = Pick<ProductType, 'price'>
export type ProductImagenType = Pick<ProductType, 'image'>
export type ProductNameType = Pick<ProductType, 'name'>

// sidebars
export type SidebarValues = keyof typeof SIDEBAR_STATES

// cart
export type ProductCartType = Omit<ProductType, 'description'> & { quantity: number }
export type ListProductCartType = ProductCartType[]
export type ProductCartQuantityType = Pick<ProductCartType, 'quantity'>

// categories
export interface ListCategoriesType {
  categories: Category[]
}

export interface Category {
  name: string
  state: boolean
  id: string
  user: string
}
