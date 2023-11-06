import React from 'react'
import ReactDOM from 'react-dom/client'

import { RouterProvider } from 'react-router-dom'
import { ProductProvider } from './context/product'
import { router } from './router'

import './index.css'
import { SidebarProvider } from './context/sidebar'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SidebarProvider>
      <ProductProvider>
        <RouterProvider router={router}/>
      </ProductProvider>
    </SidebarProvider>
  </React.StrictMode>
)
