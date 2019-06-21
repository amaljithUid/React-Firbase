import React from 'react'

const ProjectSummary = ({project}) =>{
    //console.log(this);
    return(
        
        <div className="card z-depth-0 project-summary ">
                <div className="card-content gray-text text-darnken-3">
                    <span className="card-title">{project.title}</span>
                    <p>Posted  by the AJL</p>
                    <p>20th June 07:04PM </p>
                </div>
            </div>
    )
}

export default ProjectSummary