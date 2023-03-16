import s from './s.module.scss'
import { respClasses } from '@/shared/ui'
import { TodoProps } from './types'
import { joinClasses } from '@/shared/lib'

export const Todo = (props: TodoProps) => {
  return (
    <section className={s.todo}>
      <h1>Todo</h1>
      <article
        className={joinClasses(s.todoCard, respClasses.responsableWidth)}
      >
        <p>{props.data.title}</p>
        <input
          type={'checkbox'}
          checked={props.data.completed}
          onChange={props.onToggle}
        />
      </article>
    </section>
  )
}
