import { NavLink } from 'react-router-dom';
import styles from './AuthNav.module.css';

const AuthNav = title => (
  <div>
    <NavLink
      to="/register"
      className={styles.link}
      activeClassName={styles.activeLink}
    >
      Sign Up
    </NavLink>

    <NavLink
      to="/login"
      exact
      className={styles.link}
      activeClassName={styles.activeLink}
    >
      Log In
    </NavLink>
  </div>
);

export default AuthNav;
