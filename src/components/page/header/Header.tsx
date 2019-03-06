import * as React from "react";
import photoSvg from './photo.svg';
import planeSvg from './plane.svg';
import logoSvg from './logo.svg';
import './header.css';

const Header = () => {
  return <div className='header'>
    <div>
      <img src={photoSvg} />
    </div>
    <div className="header-logo">
      <img src={logoSvg} />
    </div>
    <div>
      <img src={planeSvg} />
    </div>
  </div>;
}

export {
  Header
}