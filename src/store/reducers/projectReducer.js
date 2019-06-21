const initState = {
    
    projects: [
        {id:'1', title:'This is First', content:'Special content write here'},
        {id:'2', title:'This is Second', content:'Special content write here'},
        {id:'3', title:'This is Third', content:'Special content write here'}
    ]
}

const projectReducer = (state = initState, action) => {
    switch (action.type){
        case 'CREATE_PROJECT' :
            console.log('created project', action.project)
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log ('create project error', action.err)
            return state;
        default:
            return state;
    }
    return state
}



export default projectReducer