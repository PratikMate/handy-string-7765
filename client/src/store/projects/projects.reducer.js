import * as types from "./projects.types";

const projectsInitialState = {
    data: [],
}

export const projectsReducer = (state = projectsInitialState, { type, payload }) => {
    switch (type) {
        case types.GET_PROJECTS: return {
            ...state,
            data: payload,
        }
        case types.ADD_PROJECTS: return {
            data:[...state.data, payload],
        }
        default:
            return state;
    }
}