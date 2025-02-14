import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routers/Router'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='max-w-[1440px] mx-auto bg-cloudWhite'>
    <RouterProvider router={router} />
    </div>
  </StrictMode>,
)
