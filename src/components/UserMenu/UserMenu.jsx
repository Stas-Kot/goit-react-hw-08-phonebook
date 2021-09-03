import Button from 'react-bootstrap/Button';
import { FaUser } from 'react-icons/fa';
import s from './UserMenu.module.css';
import { useSelector, useDispatch } from 'react-redux';
import authSelectors from 'redux/auth/auth-selectors';
import { logOut } from 'redux/auth/auth-operations';

const UserMenu = () => {
  const name = useSelector(authSelectors.getUserName);
  const dispatch = useDispatch();

  return (
    <div className={s.divUser}>
      <div className={s.divUser}>
        <span className={s.span}>
          <FaUser />{' '}
        </span>
        <span className={s.span}>
          Welcome,
          {name}!
        </span>
      </div>
      <Button variant="secondary" onClick={() => dispatch(logOut())}>
        Log Out
      </Button>{' '}
    </div>
  );
};

export default UserMenu;
