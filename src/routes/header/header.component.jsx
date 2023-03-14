import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import './header.component.styles.scss'

import { UserContext } from '../../contexts/user.context'

import { signOutUser } from '../../utils/firebase/firebase.utils';


const Header = () => {
    const { currentUser, setCurrentUser } = useContext(UserContext);

    const signOutHandler = async () => {
      await signOutUser();
      setCurrentUser(null);
    };

    
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
            {
                currentUser ? (
                    <span className='header-link' onClick={signOutHandler}>SIGN OUT</span>
                ) : (
                    <div className='header-links-container'>
                        <Link className='header-link' to='/auth'>
                            Sign In
                        </Link>
                    </div>
                )
            }
        </div>
        <Outlet />
      </Fragment>
    )
  }

export default Header;
