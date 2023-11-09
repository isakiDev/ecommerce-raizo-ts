import { type Category, type ListCategoriesType } from '../types'

const getCategories = async (): Promise<ListCategoriesType> => {
  const categoriesFound = await fetch('http://localhost:8080/categories')

  if (!categoriesFound.ok) throw new Error('Error in fetch categories')

  const { categories } = await categoriesFound.json()

  const data = categories?.map((category: Category) => (
    {
      id: category.id,
      name: category.name,
      state: category.state,
      user: category.user
    }
  ))

  return data
}

export {
  getCategories
}
