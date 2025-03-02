import React, { createContext, useState, useContext } from 'react';

const DarkModeContext = createContext();

export const useDarkMode = () => useContext(DarkModeContext);

export const DarkModeProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(() => localStorage.getItem('darkMode') === 'true');
    const toggleDarkMode = () => setDarkMode(prevMode => !prevMode);

    return (
        <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
            {children}
        </DarkModeContext.Provider>
    );
};
