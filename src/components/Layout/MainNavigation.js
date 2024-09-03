import { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import AuthContext from '../../store/auth-context';

import classes from './MainNavigation.module.css';

const MainNavigation = () => {
  const AuthCtx = useContext(AuthContext);
  const history = useHistory();

  const logouthandler = () => {
    AuthCtx.logout();
    history.replace('/auth');
  }

  return (
    <header className={classes.header}>
      <Link to='/'>
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
          {!AuthCtx.isLoggedIn ? 
            <li>
              <Link to='/auth'>Login</Link>
            </li> 
            :
            <li>
              <Link to='/profile'>Profile</Link>
            </li>
          }
          {AuthCtx.isLoggedIn &&
            <li>
              <button onClick={logouthandler}>Logout</button>
            </li>
          }
          
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
