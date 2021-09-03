import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import AppBar from 'components/AppBar/AppBar';
import ContactsView from 'views/ContactsView/ContactsView';
import RegisterView from 'views/RegisterView/RegisterView';
import LoginView from 'views/LoginView/LoginView';
import HomeView from 'views/HomeView/HomeView';
import { fetchCurrentUser } from 'redux/auth/auth-operations';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      <AppBar />
      <Switch>
        <Route path="/contacts" exact>
          <ContactsView />
        </Route>

        <Route path="/register" exact>
          <RegisterView />
        </Route>

        <Route path="/login">
          <LoginView />
        </Route>

        <Route path="/" exact>
          <HomeView />
        </Route>

        {/* <Route>
            <NotFoundView />
          </Route> */}

        <Redirect to="/" />
      </Switch>
      <ToastContainer theme="colored" position="top-center" autoClose={3000} />
    </>
  );
};

export default App;
