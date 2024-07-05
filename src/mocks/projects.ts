import { Project } from '@/types/project'

export const PROJECTS: Project[] = [
  {
    name: 'Portfolio',
    description: 'My personal portfolio',
    link: 'https://github.com/guilhermefrag/portfolioV2',
    liveLink: 'https://github.com/guilhermefrag/portfolioV2',
    imagePath: '../../images/portfolio.png'
  },
  {
    name: 'Compiler',
    description: 'A compiler made in Rust for my compiler class in University',
    link: 'https://github.com/guilhermefrag/compiler',
    liveLink: 'https://github.com/guilhermefrag/compiler',
    imagePath: 'https://codequotient.com/blog/wp-content/uploads/2022/05/Difference-Between-Compiler-And-Interpreter-In-Java.jpg'
  },
  {
    name: 'Weather Report',
    description: 'A global weather report app',
    link: 'https://github.com/guilhermefrag/weather-report',
    liveLink: 'https://weather-report-alpha.vercel.app/',
    imagePath: '../../images/weather-report.png'
  },
  {
    name: 'Image Cloud',
    description: 'A cloud storage for images',
    link: 'https://github.com/guilhermefrag/images_cloud',
    liveLink: 'https://imagescloud-production.up.railway.app/login/',
    imagePath: '../../images/image-cloud.png'
  },
  {
    name: 'pg_dump scheduler',
    description: 'A simple pg_dump scheduler for PostgreSQL databases',
    link: 'https://github.com/guilhermefrag/pgdump-scheduler',
    liveLink: 'https://github.com/guilhermefrag/pgdump-scheduler',
    imagePath: 'https://simplebackups.com/images/uploads/pg_dump-postgresql-pg_restore.png'
  },
  {
    name: 'Postgres Management API',
    description: 'An API to manage a Postgres database',
    link: 'https://github.com/guilhermefrag/postgres_management_api',
    liveLink: 'https://github.com/guilhermefrag/postgres_management_api',
    imagePath: 'https://www.matillion.com/uploads/cards/Blog-API.png'
  }
]