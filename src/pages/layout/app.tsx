import { Header } from '../../components/headers'
import { Outlet } from 'react-router-dom'

export function AppLayout() {
  return (
    <div className='flex w-full h-screen flex-row justify-between'>
      <div className='h-full w-[50%]'>
        <Header />
      </div>
      <div className='h-full w-[50%]'>
        <Outlet />
      </div>
    </div>
  )
}