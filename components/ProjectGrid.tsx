'use client'

import { useState } from 'react'
import ProjectCard from './ProjectCard'
import { projects } from '../data/projects'

export default function ProjectGrid() {
  const [visibleProjects, setVisibleProjects] = useState(6)

  const loadMore = () => {
    setVisibleProjects((prev) => Math.min(prev + 6, projects.length))
  }

  return (
    <section id="projects" className="py-16">
      <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.slice(0, visibleProjects).map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
      {visibleProjects < projects.length && (
        <div className="text-center mt-12">
          <button
            onClick={loadMore}
            className="bg-primary-color hover:bg-secondary-color text-white font-bold py-2 px-4 rounded transition-colors"
          >
            Load More Projects
          </button>
        </div>
      )}
    </section>
  )
}
