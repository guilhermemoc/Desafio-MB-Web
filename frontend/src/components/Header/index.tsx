import React from 'react';
import { HeaderProps } from './types';

const Header: React.FC<HeaderProps> = ({ step, title }) => {
  return (
    <>
      <p>Etapa <span className="text-amber-500">{step}</span> de 4</p>
      <h1 className="text-3xl font-bold mb-5">{title}</h1>
    </>
  );
};

export default Header;
