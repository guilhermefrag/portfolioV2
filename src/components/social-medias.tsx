import { Button } from './ui/button'
import { Github, Linkedin, Mail } from 'lucide-react'

export function SocialMedias(){
  return (
    <div className='flex justify-center gap-7'>
      <Button 
        variant={'outline'} 
        className='border-none rounded-full'
        onClick={() => window.open('https://www.linkedin.com/in/guilherme-fragnani-2b201a1b5/') }
      >
        <Linkedin className='h-8' />
      </Button>

      <a href='mailto:guilhermefragnani.dev@gmail.com'>
        <Button 
          variant={'outline'} 
          className='border-none rounded-full'
        >
          <Mail className='h-8' />
        </Button>
      </a>
      
      <Button 
        variant={'outline'} 
        className='border-none rounded-full'
        onClick={() => window.open('https://github.com/guilhermefrag') }
      >
        <Github className='h-8' />
      </Button>
    </div>
  )
}