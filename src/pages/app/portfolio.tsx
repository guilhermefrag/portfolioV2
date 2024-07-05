import { ProjectCard } from '@/components/cards/project'
import { Card } from '@/components/ui/card'
import { PROJECTS } from '@/mocks/projects'

export function Portfolio(){
  return (
    <Card className='h-full w-full px-11 pt-24 relative overflow-y-auto'>
      <div className='flex flex-col mb-14'>
        <div className='flex flex-col'>
          <span className='text-3xl font-montserrat'>About</span>
          <span className='text-xl font-montserrat py-10 text-justify'>
            <p>
              I am a dedicated full-stack engineer with over 3 years of experience in software development. 
              My current expertise includes working with NestJs and React for building dynamic applications,
              and utilizing Postgres and MongoDB for robust database storage solutions.
            </p>
            <p>
              In addition to my primary skill set, I have a strong background in GIS and geospatial data, having worked extensively with PostGIS and Django. 
              This experience has allowed me to tackle complex spatial data challenges effectively.
            </p>
            <p>
              I am also a student of Computer Science at UNESC University, continuously expanding my knowledge. 
            </p>
          </span>
        </div>
        <span className='text-3xl font-montserrat'>Projects</span>
        <div className='pt-16 flex flex-col gap-6 justify-center items-center'>
          {PROJECTS.map((project) => (
            <ProjectCard 
              key={project.name} 
              project={project}
            />
          ))}
        </div>
      </div>
    </Card>
  )
}