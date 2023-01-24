import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';


const Header = () => {
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
        <h1>Header</h1>
        </div>
        <Outlet />
      </Fragment>
    )
  }

export default Header;
