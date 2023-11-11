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
        element: <Home/>
      },
      {
        path: '/products/:id',
        element: <ProductView/>
      },
      {
        path: '/categories/:name',
        element: <h1>Show Category</h1>
      },
      {
        path: '/contact',
        element: <h1>Show Contact</h1>
      }
    ]
  }
])
