import { Todo } from '@/shared'

const BASE_URL = 'https://jsonplaceholder.typicode.com/todos'

export const fetchTodoById = async (id: number) => {
  const response = await fetch(`${BASE_URL}/${id}`, { method: 'GET' })
  if (response.ok) {
    const data = await response.json()
    return data as Todo
  } else {
    return {
      error: await response.text(),
    }
  }
}
