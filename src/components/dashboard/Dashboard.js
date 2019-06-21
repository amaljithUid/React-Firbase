import React, { Component } from 'react'
import Notification from './Notifications'
import ProjectList from '../porjects/ProjectList'
import { connect } from 'react-redux'


class Dashboard extends Component{
    render(){
        //console.log(this.props)
        const {projects} = this.props;
        console.log(this.props.projects)
        return(
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m8">
                        <ProjectList projects={projects} />
                    </div>
                    <div className="col s12 m4 ">
                        <Notification />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        projects: state.project.projects
    }
}

export default connect(mapStateToProps)(Dashboard)