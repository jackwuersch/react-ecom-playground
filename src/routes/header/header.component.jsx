import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';

import { UserContext } from '../../contexts/user.context';

import { signOutUser } from '../../utils/firebase/firebase.utils';

import './header.styles.scss';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <Fragment>
      <div className='header'>
        <Link className='logo-container' to='/'>
        </Link>
        <div className='header-links-container'>
          <Link className='header-link' to='/shop'>
            SHOP
          </Link>

          {currentUser ? (
            <span className='header-link' onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link className='header-link' to='/auth'>
              SIGN IN
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;