export function ProfileInfo(){
  return (
    <div className='flex flex-col md:flex-row items-center justify-center pt-8 md:pt-11'>
      <img className='h-56 md:h-auto rounded mb-4 md:mb-0 md:mr-8 lg:pl-20' src="../../../images/profile.jpg" alt="Profile Picture"/>
      <div className='text-center md:text-left flex flex-col gap-2'>
        <span className='text-3xl font-montserrat'>Guilherme Fragnani Bez Fontana</span>
        <span className='block md:inline-block text-2xl font-montserrat mb-2 md:ml-2'>FullStack Software Engineer</span>
        <span className='block md:inline-block text-xl font-montserrat mb-2 md:ml-2'>3+ years of development experience</span>
      </div>
    </div>
  )
}