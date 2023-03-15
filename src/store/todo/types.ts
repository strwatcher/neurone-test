import { Todo } from '@/shared'

export type TodoState = {
  todo: Todo | null
  status: PendingStatus
  error: string
}

type PendingStatus = 'idle' | 'loading' | 'success' | 'error'
