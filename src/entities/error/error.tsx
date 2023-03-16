import s from './s.module.scss'
import { ErrorProps } from './types'

export const Error = (props: ErrorProps) => {
  return (
    <article className={s.error}>
      <h1>Ошибка</h1>
      <p>{props.text}</p>
    </article>
  )
}
