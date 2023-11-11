import { type SIDEBAR_STATES } from './consts'

// products
export interface ProductType {
  id: string
  name: string
  description: string
  price: number
  image: string
  quantity: number
}

export type ListProductType = ProductType[]
export type ProductIdType = ProductType['id']
export type ProductPriceType = ProductType['price']
export type ProductImagenType = ProductType['image']
export type ProductNameType = ProductType['name']
export type ProductDescriptionType = ProductType['description']
export type ProductQuantityType = ProductType['quantity']

// sidebars
export type SidebarValues = keyof typeof SIDEBAR_STATES

// cart
export type ProductCartType = Omit<ProductType, 'description'> & { quantity: number }
export type ListProductCartType = ProductCartType[]
export type ProductCartQuantityType = Pick<ProductCartType, 'quantity'>

// categories
export type ListCategoriesType = Category[]

export interface Category {
  name: string
  state: boolean
  id: string
  user: string
}
