import { createBrowserRouter } from 'react-router-dom'
import { Portfolio } from './pages/app/portfolio'
import { NotFound404 } from './pages/errors/not-found-404'
import { AppLayout } from './pages/layout/app'


export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <NotFound404 />,
    children: [
      {path: '/', element: <Portfolio />},
    ]
  }
])