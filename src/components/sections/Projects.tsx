import React from 'react'
import "../../styles/default.min.css"
import "../../styles/projects.min.css"

interface ProjectProps {
  title: string,
  description: string,
  shortDescription: string,
  thumbnail: string,
  url: string
}

export function Project(props: ProjectProps) {
  return (
    <div className="project">
      
    </div>
  )
}

interface ProjectGroupProps {
  children: React.ReactNode
}

export function ProjectGroup({ children }: ProjectGroupProps) {
  return (
    <div className="group-projects">
      {children}
    </div>
  )
}

export default function Projects() {
  return (
    <div id="section-projects">
      <h2 className="title-section">Projects</h2>
      <ProjectGroup>
        <Project 
          title="Mag Ik Dit Delen?"
          description="Test"
          shortDescription=""
          thumbnail=""
          url="" />

        <Project 
          title="Mag Ik Dit Delen?"
          description="Test"
          shortDescription=""
          thumbnail=""
          url="" />

        <Project 
          title="Mag Ik Dit Delen?"
          description="Test"
          shortDescription=""
          thumbnail=""
          url="" />

        <Project 
          title="Mag Ik Dit Delen?"
          description="Test"
          shortDescription=""
          thumbnail=""
          url="" />

        <Project 
          title="Mag Ik Dit Delen?"
          description="Test"
          shortDescription=""
          thumbnail=""
          url="" />

        <Project 
          title="Mag Ik Dit Delen?"
          description="Test"
          shortDescription=""
          thumbnail=""
          url="" />
      </ProjectGroup>
    </div>
  )
}
