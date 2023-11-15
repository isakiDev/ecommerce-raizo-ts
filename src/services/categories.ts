import { type CategoryType, type ListCategoriesType } from '../types'

const host = import.meta.env.VITE_API

const getCategories = async (): Promise<ListCategoriesType> => {
  const categoriesFound = await fetch(`${host}/categories`)

  if (!categoriesFound.ok) throw new Error('Error in fetch categories')

  const { categories } = await categoriesFound.json()

  const data = categories?.map((category: CategoryType) => (
    {
      id: category.id,
      name: category.name
    }
  ))

  return data
}

export {
  getCategories
}
