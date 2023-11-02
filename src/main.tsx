import React from 'react'
import ReactDOM from 'react-dom/client'

import { RouterProvider } from 'react-router-dom'
import { ProductProvider } from './context/product'
import { router } from './router'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ProductProvider>
      <RouterProvider router={router}/>
    </ProductProvider>
  </React.StrictMode>
)
