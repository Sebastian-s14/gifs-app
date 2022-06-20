import { useState } from 'react'
import { MainLayout } from '../shared/layouts'
import { AddCategory, GifGrid } from './components'

export const App = () => {
  // console.log('app')
  const [categories, setCategories] = useState<string[]>(['dragon ball'])

  const onAddCategory = (newCategory: string) => {
    console.log(newCategory)
    if (categories.includes(newCategory)) return
    setCategories([newCategory, ...categories])
  }

  return (
    <MainLayout>
      <h1 className="text-3xl font-bold text-blue-800">
        {import.meta.env.VITE_APP_TITLE}
      </h1>
      <AddCategory onAddCategory={onAddCategory} />
      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </MainLayout>
  )
}
