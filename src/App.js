import React from 'react';
import { FaDev } from 'react-icons/fa';

import styles from './App.module.css';
import useNavigation from './hooks/useNavigation';
import navigationElements from './data/navigation';

import Navbar from './components/Navbar';
import Tabbar from './components/Tabbar';

function App() {
  const { currentRoute, setCurrentRoute } = useNavigation();

  return (
    <div className={styles.container}>
      <Navbar
        navigationData={navigationElements}
        currentRoute={currentRoute}
        setCurrentRoute={setCurrentRoute}
      />
      <Tabbar
        navigationData={navigationElements}
        currentRoute={currentRoute}
        setCurrentRoute={setCurrentRoute}
      />
      <div className={styles.devLogo}>
        <FaDev />
      </div>
    </div>
  );
}

export default App;
