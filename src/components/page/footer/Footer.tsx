import * as React from "react";

const footerStyles = {
  backgroundColor: '#FAFAFA',
  display: 'flex',
  justifyContent: 'center',
  boxShadow: '0 -.5px 0 0 #B3B3B3',
}

const Footer = () => {
  return <div style={footerStyles}>
    <svg width="375" height="86" viewBox="0 0 375 86" xmlns="http://www.w3.org/2000/svg">
      <g fill="none" fill-rule="evenodd">
        <path fill="#FAFAFA" d="M0 1h375v85H0z"/>
        <rect y="20" width="134" height="5" rx="2.5" transform="translate(121 52)" fill="#000"/>
        <g transform="translate(102 18)" stroke="#000">
          <circle cx="9" cy="9" r="9"/>
          <path d="M20 21l-4.5-4.5" stroke-linecap="square"/>
        </g>
        <g transform="translate(177 18)" stroke="#000">
          <rect width="22" height="22" rx="6"/>
          <path d="M11 6v10M16 11H6" stroke-linecap="square"/>
        </g>
        <g transform="translate(327 18)" stroke="#000">
          <circle cx="10.5" cy="5.5" r="5.5"/>
          <path d="M0 22v-3a4 4 0 0 1 4-4h13c2.21 0 4 1.795 4 4v3"/>
        </g>
        <path d="M262.9 39l-1.581-1.433C255.706 32.47 252 29.109 252 24.995c0-3.363 2.632-5.995 5.995-5.995 1.896 0 3.716.883 4.904 2.272 1.188-1.39 3.008-2.272 4.905-2.272 3.362 0 5.994 2.632 5.994 5.995 0 4.114-3.705 7.476-9.318 12.572L262.9 39z" stroke="#000"/>
        <path d="M40.619 39.649v-6.381a2.619 2.619 0 1 0-5.238 0v6.38H28a1 1 0 0 1-1-1V28.092a1 1 0 0 1 .327-.74l10-9.09a1 1 0 0 1 1.346 0l10 9.09a1 1 0 0 1 .327.74v10.558a1 1 0 0 1-1 1h-7.381z" fill="#000"/>
        {/* <path d="M0 1h375" stroke="#B3B3B3" stroke-width=".4" stroke-linecap="square"/> */}
      </g>
    </svg>
  </div>
}

export {
  Footer
}