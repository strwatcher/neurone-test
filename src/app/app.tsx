import { Button } from '@/shared/ui'
import { useAppDispatch, useAppSelector } from '@/store'
import { fetchTodoById } from '@/store/todo/model'
import { useEffect } from 'react'

export const App = () => {
  const dispatch = useAppDispatch()
  const { todo, status } = useAppSelector((state) => ({
    todo: state.todo.todo,
    status: state.todo.status,
  }))

  useEffect(() => {
    console.log(todo)
  }, [todo])

  return (
    <section>
      <Button
        text="Найти"
        onClick={() => {
          console.log('here')
          dispatch(fetchTodoById(5))
        }}
      />
      {status === 'loading' && 'Загрузка'}
    </section>
  )
}
