import * as types from "./projects.types";
import axios from "axios";

const getProjects = () =>(dispatch)=> {
    axios
        .get("http://localhost:8080/user/62daba56ba3ab659165da800/projects")
        .then((r) => dispatch({ type:types.GET_PROJECTS , payload:r.data }));
}
const addProject = (payload) =>(dispatch)=> {
    console.log('payload:', payload)
    axios
        .post("http://localhost:8080/user/62daba56ba3ab659165da800/projects",payload)
        .then((r) => dispatch({ type:types.ADD_PROJECTS , payload:r.data }));
}
const removeProject = (payload) =>(dispatch)=> {
    axios
        .delete("http://localhost:8080/user/62daba56ba3ab659165da800/projects",payload)
        .then((r) => dispatch({ type:types.REMOVE_PROJECTS , payload:r.data }));
}

export { getProjects, addProject, removeProject }