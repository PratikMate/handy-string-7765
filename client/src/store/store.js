import {
    legacy_createStore,
    combineReducers,
    applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import { projectsReducer } from "./projects/projects.reducer";
import { authReducer } from "./auth/auth.reducer";


const rootReducer = combineReducers({
    auth: authReducer,
    projects: projectsReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
