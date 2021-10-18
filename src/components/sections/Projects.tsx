import React from "react"
import "../../styles/default.min.css"
import "../../styles/projects.min.css"

import thumbnail1 from "../../res/projects/midd.png"
import thumbnail2 from "../../res/projects/translation.jpg"
import thumbnail3 from "../../res/projects/swerve.png"
import thumbnail4 from "../../res/projects/mlcar.png"
import thumbnail5 from "../../res/projects/roberto.jpg"
import thumbnail6 from "../../res/projects/bioshufflr.png"

interface ProjectProps {
  title: string,
  description: string,
  thumbnail: string,
  url: string
}

export function Project(props: ProjectProps) {
  return (
    <a href={props.url}>
      <div 
        className="project"
        style={{backgroundImage: `url("${props.thumbnail}")`}}>
        
        <div className="overlay-project">
          <h3>{props.title}</h3>
          <p>{props.description}</p>
        </div>
      </div>
    </a>
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
      <div id="projects-underline"></div>
      <ProjectGroup>
        <Project 
          title="Mag Ik Dit Delen?"
          description="GDPR Tool"
          thumbnail={thumbnail1}
          url="https://magikditdelen.nl" />

        <Project 
          title="Noodles Translation"
          description="Translation Service"
          thumbnail={thumbnail2}
          url="https://translation.noodles.services" />

        <Project 
          title="Swerve"
          description="Mobile Arcade Game"
          thumbnail={thumbnail3}
          url="https://apkpure.com/swerve/com.indefect.swerve" />

        <Project 
          title="Machine Learning Car"
          description="Self Explanatory"
          thumbnail={thumbnail4}
          url="https://github.com/alex-lushiku/machine-learning-car" />

        <Project 
          title="Roberto Rodriquez"
          description="Travel Agency"
          thumbnail={thumbnail5}
          url="https://robertojwz.wixsite.com/632373" />

        <Project 
          title="Bioshufflr"
          description="Instagram Bio Updater"
          thumbnail={thumbnail6}
          url="https://github.com/alex-lushiku/bioshufflr" />
      </ProjectGroup>
    </div>
  )
}
