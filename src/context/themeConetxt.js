import {createContext} from 'react';

export const ThemeContext = createContext();


export const ThemeProvider = ({children})=>{

    <>
        {children}
    </>
}