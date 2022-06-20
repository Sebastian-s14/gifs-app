import { SubmitHandler, useForm } from 'react-hook-form'

interface FormInput {
  name: string
}

interface AddCategoryProps {
  // setCategories: React.Dispatch<React.SetStateAction<string[]>>
  onAddCategory: (name: string) => void
}
export const AddCategory = ({ onAddCategory }: AddCategoryProps) => {
  const { register, handleSubmit, reset } = useForm<FormInput>()
  const onSubmit: SubmitHandler<FormInput> = (data) => {
    console.log('submit', data)
    const newName = data.name.trim()
    if (newName.length <= 1) return
    // setCategories((categories) => [data.name, ...categories])
    onAddCategory(newName)
    reset()
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        className="flex p-2 w-full rounded-md outline-blue-400"
        {...register('name')}
        autoComplete="none"
        placeholder="Agrega una categoría"
      />
    </form>
  )
}
