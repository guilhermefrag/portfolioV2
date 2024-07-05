import { ModeToggle } from './mode-toggle'
import { ProfileInfo } from './profile-info'
import { SocialMedias } from './social-medias'
import {
  Card,
} from './ui/card'

export function Header(){
  return (
    <Card className='h-full w-full'>
      <ModeToggle />
      
      <ProfileInfo />

      <div className='pt-32'>
        <SocialMedias />

      </div>
        
    </Card>
  )
}