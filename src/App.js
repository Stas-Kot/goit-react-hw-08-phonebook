import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { useEffect, lazy, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, Redirect } from 'react-router-dom';
import { fetchCurrentUser } from 'redux/auth/auth-operations';
import Spinner from './components/Loader/Loader';
import AppBar from 'components/AppBar/AppBar';
import PrivateRoute from 'components/PrivateRoute';
import PublicRoute from 'components/PublicRoute';
import authSelectors from 'redux/auth/auth-selectors';

const HomeView = lazy(() =>
  import('views/HomeView/HomeView' /* webpackChunkName: "home-view" */),
);
const ContactsView = lazy(() =>
  import(
    'views/ContactsView/ContactsView' /* webpackChunkName: "contacts-view" */
  ),
);
const RegisterView = lazy(() =>
  import(
    'views/RegisterView/RegisterView' /* webpackChunkName: "register-view" */
  ),
);
const LoginView = lazy(() =>
  import('views/LoginView/LoginView' /* webpackChunkName: "login-view" */),
);

const App = () => {
  const dispatch = useDispatch();
  const isFetchinCurrentUser = useSelector(
    authSelectors.getisFetchinCurrentUser,
  );
  console.log(isFetchinCurrentUser);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    !isFetchinCurrentUser && (
      <>
        <AppBar />
        <Suspense fallback={<Spinner />}>
          <Switch>
            <PublicRoute path="/" exact>
              <HomeView />
            </PublicRoute>
            <PublicRoute
              path="/register"
              exact
              restricted
              redirectTo="contacts"
            >
              <RegisterView />
            </PublicRoute>
            <PublicRoute path="/login" exact restricted redirectTo="contacts">
              <LoginView />
            </PublicRoute>
            <PrivateRoute path="/contacts" redirectTo="/login">
              <ContactsView />
            </PrivateRoute>

            {/* <Route>
            <NotFoundView />
          </Route> */}

            <Redirect to="/" />
          </Switch>
        </Suspense>
        <ToastContainer
          theme="colored"
          position="top-center"
          autoClose={3000}
        />
      </>
    )
  );
};

export default App;
