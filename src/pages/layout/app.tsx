import { Header } from '../../components/headers'
import { Outlet } from 'react-router-dom'

export function AppLayout() {
  return (
    <div className='flex w-full h-screen flex-col lg:flex-row justify-between'>
      <div className='h-full w-full lg:w-[50%]'>
        <Header />
      </div>
      <div className='h-full w-full lg:w-[50%]'>
        <Outlet />
      </div>
    </div>
  )
}