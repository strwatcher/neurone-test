import { ButtonProps } from './types'
import s from './s.module.scss'

export const Button = (props: ButtonProps) => {
  return (
    <button className={s.button} onClick={props.onClick}>
      {props.text}
    </button>
  )
}
