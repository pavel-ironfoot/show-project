import { CHANGE_THEME } from "../consts";
import { defaultState } from "./defaultState";

export const changeThemeReducer =(state=defaultState,action) =>{
    switch (action.type){
        case CHANGE_THEME:
            return {...state, mainTheme:action.payload};
          default : return state;
    }
}