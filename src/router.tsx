import { createBrowserRouter } from 'react-router-dom'

import { Layout } from './layouts/Layout'
import { Home } from './pages/Home'
import { ProductView } from './pages/ProductView'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        index: true,
        element: <ProductView />
      }
    ]
  }
])
