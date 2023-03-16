import { joinClasses } from '@/shared/lib'
import s from './s.module.scss'
import resp from '../styles/responsable.module.scss'
import { InputProps } from './types'

export const Input = (props: InputProps) => {
  return (
    <article className={s.inputWrapper}>
      <label className={s.label} htmlFor={props.id}>
        {props.title}
      </label>
      <input
        id={props.id}
        className={joinClasses(
          s.input,
          resp.responsableWidth,
          props.disabled && s.disabled
        )}
        type="text"
        value={props.value}
        onChange={props.onChange}
        disabled={props.disabled}
      />
    </article>
  )
}
