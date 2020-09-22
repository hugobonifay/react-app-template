import { 
    MAIN_CHANGE_THEME, 
    MAIN_CHANGE_A2HS
} from "../actionTypes";

const initialState = {
    theme: localStorage.getItem("theme") || "light",
    A2HSpref: localStorage.getItem("A2HS") || "no answer",
};

const main = (state = initialState, action) => {
    switch (action.type) {

        case MAIN_CHANGE_A2HS:
            return { ...state, A2HSpref: action.A2HSresponse }

        case MAIN_CHANGE_THEME: 
            return { ...state, theme: action.theme }

        default: return state;
    }
};

export default main;