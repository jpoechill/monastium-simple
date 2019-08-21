export const state = () => ({
  loggedIn: false,
  userIsHost: false
})

export const mutations = {
  login(state) {
    state.loggedIn = true
  },
  loginAsHost(state) {
    state.loggedIn = true
    state.userIsHost = true
  },
  logout(state) {
    state.loggedIn = false
    state.userIsHost = false
  }
}
