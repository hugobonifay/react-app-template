import { 
    MAIN_CHANGE_THEME, 
    MAIN_CHANGE_TITLE 
} from "../actionTypes";

const initialState = {
    title: "",
    theme: localStorage.getItem("theme") || "light",
};

const main = (state = initialState, action) => {
    switch (action.type) {

        case MAIN_CHANGE_TITLE: 
            return { ...state, title: action.title }

        case MAIN_CHANGE_THEME: 
            return { ...state, theme: action.theme }

        default: return state;
    }
};

export default main;