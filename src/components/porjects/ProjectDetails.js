import React from 'react'

const ProjectDetails = (props) =>{
    const id = props.match.params.id;
    return(
        <div className="container section project-details">

            <div className="card">
                <div className="card-content">
                    <span className="card-title">Project Title - {id}</span>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, </p>
                </div>
                <div className="card-action grey lighten-4 gray-text">
                    <div>Posted  by the AJL</div>
                    <div>20th June 07:04PM </div>
                </div>
            </div>

        </div>
    )
}

export default ProjectDetails