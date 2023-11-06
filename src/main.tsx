import React from 'react'
import ReactDOM from 'react-dom/client'

import { RouterProvider } from 'react-router-dom'
import { ProductProvider } from './context/product'
import { router } from './router'

import './index.css'
import { SidebarProvider } from './context/sidebar'
import { CartProvider } from './context/cart'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SidebarProvider>
      <ProductProvider>
        <CartProvider>
          <RouterProvider router={router}/>
        </CartProvider>
      </ProductProvider>
    </SidebarProvider>
  </React.StrictMode>
)
