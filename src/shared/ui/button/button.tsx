import { ButtonProps } from './types'
import s from './s.module.scss'
import resp from '../styles/responsable.module.scss'
import { joinClasses } from '@/shared/lib'

export const Button = (props: ButtonProps) => {
  return (
    <button
      className={joinClasses(
        s.button,
        resp.responsableWidth,
        props.disabled && s.disabled
      )}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.text}
    </button>
  )
}
