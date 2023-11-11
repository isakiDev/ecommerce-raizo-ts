import { useState, useEffect } from 'react'
import { getCategories } from '../services/categories'
import { type ListCategoriesType } from '../types'

interface Props {
  loading: boolean
  categories: ListCategoriesType | []
}
export function useCategories () {
  const [{ categories, loading }, setCategories] = useState<Props>({
    categories: [],
    loading: true
  })

  const getCategoriesStore = async () => {
    try {
      const categoriesData = await getCategories()
      setCategories({ loading: false, categories: categoriesData })
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getCategoriesStore()
      .catch(err => { console.log(err) })
  }, [])

  return {
    categories,
    loading
  }
}
