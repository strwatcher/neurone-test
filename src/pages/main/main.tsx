import { Error } from '@/entities/error'
import { Todo } from '@/entities/todo'
import { Button } from '@/shared/ui'
import { Input } from '@/shared/ui/input'
import { useAppDispatch, useAppSelector } from '@/store'
import { setValue } from '@/store/form/model'
import { fetchTodoById, toggleChecked } from '@/store/todo/model'
import s from './s.module.scss'

export const Main = () => {
  const dispatch = useAppDispatch()
  const { todo, error, status, value } = useAppSelector((state) => ({
    todo: state.todo.todo,
    status: state.todo.status,
    error: state.todo.error,
    value: state.form.value,
  }))

  return (
    <section className={s.pageWrapper}>
      <Input
        value={value.toString()}
        onChange={(e) => dispatch(setValue(e.target.value))}
        disabled={status === 'loading'}
      />
      <Button
        text="Найти"
        onClick={() => {
          dispatch(fetchTodoById(value))
        }}
        disabled={status === 'loading'}
      />
      {status === 'success' && todo && (
        <Todo data={todo} onToggle={() => dispatch(toggleChecked())} />
      )}
      {status === 'error' && <Error text={error} />}
      {status === 'loading' && 'Загрузка...'}
    </section>
  )
}
