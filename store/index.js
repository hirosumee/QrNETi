export const state = () => {
  return {
    value: 'null',
    handleValue: 'null'
  }
}
export const mutations = {
  updateValue(state, nextValue) {
    state.value = nextValue
  },
  updateHandleValue(state) {
    state.handleValue = state.value
  }
}
export const actions = {
  updateValue(context, nextValue) {
    context.commit('updateValue', nextValue)
  },
  updateHandleValue(context) {
    context.commit('updateHandleValue')
  }
}
export const getters = {
  value: function(state) {
    return state.handleValue
  }
}
