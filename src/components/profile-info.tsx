export function ProfileInfo(){
  return (
    <div className='flex justify-center pt-9'>
      <div className='flex'>
        <img className='h-56 rounded' src="../../../public/images/profile.jpg" alt="Profile Picture"/>
        <div className='flex flex-col'>
          <span className='text-xl pl-8 py-4'>Guilherme Fragnani Bez Fontana</span>
          <span className='text-xl pl-8 py-4 '>FullStack Software Engineer</span>
        </div>
      </div>
    </div>
  )
}