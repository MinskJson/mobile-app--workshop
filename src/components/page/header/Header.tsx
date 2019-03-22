import * as React from "react";
import photoSvg from './photo.svg';
import planeSvg from './plane.svg';
import logoSvg from './logo.svg';
import './header.css';
import { useTranslation } from "react-i18next";

const langs = ['en', 'ru', '123', 'en', 'ru', '123', 'en', 'ru', '123'];

const Header = () => {
  const {i18n} = useTranslation();
  const onChangeLang = () => {
    i18n.changeLanguage(langs[Math.floor(Math.random() * 10000) % langs.length]);
  }

  return <div className='header'>
    <div>
      <img src={photoSvg} />
    </div>
    <div className="header-logo" onClick={onChangeLang}>
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