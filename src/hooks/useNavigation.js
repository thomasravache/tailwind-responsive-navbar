import { useState, useCallback } from 'react';
import navigationElements from '../data/navigation';

const useNavigation = () => {
  const [firstNavigationElement] = navigationElements;
  const [route, setRoute] = useState(firstNavigationElement);

  // O hook usecallback serve para questão de performance, poderia ter sido usada uma function comum
  // mas o usecallback serve para que a função não seja recriada desnecessariamente sempre que o componente em questão for chamado, somente sendo recriada caso seja necessario
  // otimizando a performance 
  const selectAction = useCallback((option) => {
    if (route === option) return;
    setRoute(option);
  }, [route]);

  return { currentRoute: route, setCurrentRoute: selectAction };
};

export default useNavigation;
