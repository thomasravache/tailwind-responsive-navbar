import React, { useState, useEffect } from 'react';
import MyContext from '.';

const ContextProvider = ({ children }) => {
  const [theme, setActualTheme] = useState('light');
  const rootElement = document.documentElement;

  const changeThemeTo = (toggleTheme) => {
    localStorage.setItem('theme', toggleTheme);
    setActualTheme(toggleTheme);
  }

  useEffect(() => {
    let localStorageTheme = localStorage.getItem('theme');
    if(localStorageTheme === null) {
      localStorageTheme = localStorage.setItem('theme', 'light');
    }
    setActualTheme(localStorageTheme);
    rootElement.className = theme;
    rootElement.style = theme === 'dark' ? 'color-scheme: dark' : 'color-scheme: light';
  }, [theme, rootElement])

  const contextValue = {
    theme,
    changeThemeTo,
  };

  return (
    <MyContext.Provider value={ contextValue }>
      {children}
    </MyContext.Provider>
  )
};

export default ContextProvider;
