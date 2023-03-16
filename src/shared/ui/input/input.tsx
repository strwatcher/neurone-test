import { joinClasses } from '@/shared/lib'
import s from './s.module.scss'
import resp from '../styles/responsable.module.scss'
import { InputProps } from './types'

export const Input = (props: InputProps) => {
  return (
    <input
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
  )
}
