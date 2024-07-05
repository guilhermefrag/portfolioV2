import { Project } from '@/types/project'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '../ui/card'
import { Button } from '../ui/button'
import { GitBranch } from 'lucide-react'

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="flex flex-col md:flex-row w-full md:w-[80%] max-h-60 md:max-h-36 h-auto md:h-36 m-4 md:m-0">
      <a href={project.liveLink} className="flex-shrink-0 h-40 md:h-full w-full md:max-w-60">
        <img src={project.imagePath} alt="project" className="h-full w-full object-cover" />
      </a>
      <div className="flex flex-col overflow-hidden mt-2 md:mt-0">
        <CardHeader>
          <CardTitle>
            <Button 
              variant={'ghost'}
              onClick={() => window.open(project.link, '_blank')}
            >
              <GitBranch className="w-6 h-6 mr-2" />
              <span className="text-xl font-montserrat truncate">
                {project.name}
              </span>
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent className="flex">
          <span className="text-base font-montserrat px-4 overflow-hidden text-ellipsis">
            {project.description}
          </span>
        </CardContent>
      </div>
    </Card>
  )
}
