import React, { useCallback } from 'react';
import classNames from 'classnames';
import { AiFillHome, AiFillCompass } from 'react-icons/ai';
import { BsFillBagFill, BsFillPersonFill } from 'react-icons/bs';
import { CgInbox } from 'react-icons/cg';

import styles from './tailwindStyles/tabbarStyles';
import ThemeSwitch from './ThemeSwitch';

const Tabbar = ({ navigationData, currentRoute, setCurrentRoute }) => {
  const getTabIcon = useCallback((item) => {
    switch(item) {
      case 'Home':
        return <AiFillHome />;
      case 'Discover':
        return <AiFillCompass />;
      case 'Store':
        return <BsFillBagFill />
      case 'Inbox':
        return <CgInbox />
      case 'Profile':
        return <BsFillPersonFill />;
      default:
        return console.log('nenhum dos cases foi selecionado');
    }
  }, []);

  return (
    <nav className={styles.tabbar}>
      {
        navigationData.map((item, index) => (
          <span
            key={ index }
            className={ classNames([styles.tabItem, currentRoute === item && styles.tabItemActive]) }
            onClick={() => setCurrentRoute(item)}
          >
            <span className={styles.icon}>
              {getTabIcon(item)}
            </span>
          </span>
        ))
      }
      <div className="pl-5 pr-3 -mb-1">
      <ThemeSwitch />
      </div>
    </nav>
  );
};

export default Tabbar;
