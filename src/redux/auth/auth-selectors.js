const getIsLoggedIn = state => state.auth.isLoggedIn;

const getUserName = state => state.auth.user.name;

const getisFetchinCurrentUser = state => state.auth.isFetchinCurrentUser;

const authSelectors = {
  getIsLoggedIn,
  getUserName,
  getisFetchinCurrentUser,
};

export default authSelectors;
