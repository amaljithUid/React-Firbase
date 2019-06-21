import React, { Component } from 'react'
import {connect} from 'react-redux'
import {createProject} from '../../store/actions/projectActions'


export class CreateProject extends Component {
    state = {
        title:'',
        content: ''
    }

    handleChange =(e)=>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }
    handleSubmit =(e)=>{
        e.preventDefault();
        //console.log(this.state);
        this.props.createProject(this.state)
    }

    render() {
        return (
            <div  className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Create New Project</h5>
                    <div className="input-field">
                        <label htmlFor="title">Project Title</label>
                        <input type="text" id="title" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="content">Project Content</label>
                        <textarea className="materialize-textarea" id="content" onChange={this.handleChange}></textarea>
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1">Create</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapDistpatchToProps = (dispatch) =>{
    return{
        createProject: (project) => dispatch(createProject(project))
    }
}

export default connect(null, mapDistpatchToProps)(CreateProject)
