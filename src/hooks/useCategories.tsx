import { useState, useEffect } from 'react'
import { getCategories } from '../services/categories'
import { type ListCategoriesType } from '../types'

export function useCategories () {
  const [categories, setCategories] = useState<ListCategoriesType>([])

  const getCategoriesStore = async () => {
    try {
      const categoriesData = await getCategories()
      setCategories([...categoriesData])
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getCategoriesStore()
      .catch(err => { console.log(err) })
  }, [])

  return {
    categories
  }
}
