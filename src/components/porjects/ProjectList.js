import React from 'react'
import ProjectSummary from './ProjectSummary'

const ProjectList = ({projects}) =>{
    //console.log(this);
    return(
        <div className="projectdetails section card">
           { projects && projects.map(project => {
               
               return(
                   <ProjectSummary project={project} key={project.id} />
               )
           })}
        </div>
    )
}

export default ProjectList