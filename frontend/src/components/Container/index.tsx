import React from 'react';
import Header from '../Header';
import { ContainerProps } from './types';

const Container: React.FC<ContainerProps> = ({ title, step, children }) => {
  return (
    <div className='p-5 flex flex-col'>
      <Header title={title} step={step} />
      {children}
    </div>
  );
}

export default Container;
