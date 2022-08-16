import { useReducer, createContext } from "react";
import { themeReducer } from "./reducer/Theme_Reducer";
import { TOGGLE_THEME } from "./ActionTypes";

export const ThemeContext = createContext();

const init = {
    theme: 'light'
}

export const ThemeProvider = ({ children }) => {

    const [state, dispatch] = useReducer(themeReducer, init);

    const toggle_theme = (val) => {
        let newTheme = val === "light" ?
            'dark'
            : 'light';

        dispatch({ type: TOGGLE_THEME, payload: newTheme })
    }

    return (
        <ThemeContext.Provider
            value={{
                ...state,
                toggle_theme
            }}>
            {children}
        </ThemeContext.Provider>
    )

}

export default ThemeProvider;