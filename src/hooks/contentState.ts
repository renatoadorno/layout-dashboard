import { useState, useEffect } from 'react';

interface IUseChangeWidth {
  contentState: string,
  changeWidth: () => void,
}

export const useChangeWidth = (): IUseChangeWidth => {
  const [contentState, setContentState] = useState('max');

  useEffect(() => {
    const contentInStorage = localStorage.getItem('contentWidthState');

    if (contentInStorage === null ) {
      setContentState('max');
      localStorage.setItem('sidebarState', 'max');
    } else {
      setContentState(contentInStorage === 'max' ? 'max' : 'min');
    }

  }, []);

  const changeWidth = () => {
    const newContentState = contentState === 'max' ? 'min' : 'max';
    localStorage.setItem('contentWidthState', newContentState);
    setContentState(newContentState === 'max' ? 'max' : 'min');
  };

  return {contentState, changeWidth};
};