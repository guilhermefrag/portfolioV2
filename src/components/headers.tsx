import { ModeToggle } from './mode-toggle'
import { ProfileInfo } from './profile-info'
import {
  Card,
} from './ui/card'

export function Header(){
  return (
    <Card className='h-full w-full'>

      <ProfileInfo />

      <div className='pt-32'>
        <ModeToggle />

      </div>
        
    </Card>
  )
}