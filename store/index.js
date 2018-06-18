export const state = () => ({
  counter: window.sessionStorage.getItem('counter') || 0
})

export const mutations = {
  increment: state => {
    state.counter++
    window.sessionStorage.setItem('counter', state.counter)
  },
  decrement: state => {
    state.counter--
    window.sessionStorage.setItem('counter', state.counter)
  }
}
