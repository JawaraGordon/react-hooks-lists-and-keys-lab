import React from 'react';
import user from '../data/user';

function NavBar() {
  const links = ['home', 'about', 'projects'];

  const newLinks = links.map((link) => (
    <a key={link} href={'#' + link}>
      {link}
    </a>
  ));
  return <nav>{newLinks}</nav>;
}

export default NavBar;
