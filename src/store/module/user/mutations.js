export default {
  setUser(state, user) {
    state.user = user;
  },
  setLoginStatus(state, status) {
    state.isLogged = status;
  },
  setLikelist(state, list) {
    state.likelist = list;
  },
  delFromLikelist(state, id) {
    let index = state.likelist.findIndex(songid => id === songid);
    state.likelist.splice(index, 1);
  },
  addToLikelist(state, id) {
    state.likelist.push(id);
  },
  setCreatedList(state, list) {
    state.createdList = list;
  }
};
