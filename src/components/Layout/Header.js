import React, { Fragment } from 'react';

import HeaderCartButton from './HeaderCartButton';
import styles from './Header.module.css';
import reactIcon from '../../assets/logo192.png';

const Header = (props) => {
  return (
    <Fragment>
      <header>
        <div className={styles.logo}>
          <img src={reactIcon} alt='React logo' />
          <h1>SpaceLots</h1>
        </div>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
    </Fragment>
  );
};

export default Header;
