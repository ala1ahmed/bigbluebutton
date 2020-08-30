import React from 'react';
import './styles.scss';

const LoadingScreen = ({ children }) => (
  <div className="arrow-container animated fadeInDown">
    <div className="arrow-2">
      <i className="icon-taderok" ></i>
    </div>
    <div className="arrow-1 animated hinge forever zoomIn"></div>
  </div>
);

export default LoadingScreen;
