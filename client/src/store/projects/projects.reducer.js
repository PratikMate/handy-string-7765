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
            data: [...state.data, payload],
        }
        case types.REMOVE_PROJECTS: return {
            data:[...state.data.filter((e) => e._id !== payload)]
        }
        default:
            return state;
    }
}