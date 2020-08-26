import React from 'react';
import { styles } from './styles.scss';

const LoadingScreen = ({ children }) => (
  <div className="lds-ripple"><div></div><div></div></div>
);

export default LoadingScreen;
