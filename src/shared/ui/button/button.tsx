import { ButtonProps } from './types'
import s from './s.module.scss'
import resp from '../styles/responsable.module.scss'
import { joinClasses } from '@/shared/lib'

export const Button = (props: ButtonProps) => {
  return (
    <button
      className={joinClasses(s.button, resp.responslableWidth)}
      onClick={props.onClick}
    >
      {props.text}
    </button>
  )
}
