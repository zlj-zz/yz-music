export default {
  setUser(state, user) {
    state.user = user;
  },
  setLoginStatus(state, status) {
    state.isLogged = status;
  }
};
