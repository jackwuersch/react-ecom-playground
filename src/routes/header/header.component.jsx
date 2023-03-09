import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import './header.component.styles.scss'

import { UserContext } from '../../contexts/user.context'


const Header = () => {
    const { currentUser } = useContext(UserContext)
    console.log(currentUser)
    return (
      <Fragment>
        <div className='header'>
            <Link className='logo-container' to='/'>
                <div>Logo</div>
            </Link>
            <div className='header-links-container'>
                <Link className='header-link' to='/shop'>
                    SHOP
                </Link>
            </div>
            <div className='header-links-container'>
                <Link className='header-link' to='/auth'>
                    Sign In
                </Link>
            </div>
        </div>
        <Outlet />
      </Fragment>
    )
  }

export default Header;
