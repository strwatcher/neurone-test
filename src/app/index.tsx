import React from 'react'
import ReactDOM from 'react-dom/client'
import 'normalize.css'
import './index.scss'
import { Provider } from 'react-redux'
import { store } from '@/store'
import { App } from './app'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
