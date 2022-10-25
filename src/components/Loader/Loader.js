import React from 'react';
import { Spinner, Overlay } from './Loader.styled';


const Loader = () => {
  return (
    <Overlay role="alert">
      <Spinner />
    </Overlay>
  );
};

export default Loader;
