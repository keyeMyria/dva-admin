import Immutable, { List, Map } from 'immutable'

export default {
  namespace: 'modal',
  state: Immutable.fromJS({
    loading: false,
    visible: false,
    type: 'create',
    curItem: {},
    otherItem: [] //其他对象
  }),
  reducers: {
    showLoading (state) {
      return state.set('loading', true)
    },
    hideLoading (state, action) {
      if(action.payload) {
        const { curItem, otherItem } = action.payload
        return state.set('loading', false).set('curItem', Map(curItem)).set('otherItem', List(otherItem))
      }
      return state.set('loading', false)
    },
    showModal (state, action) {
      const { type, loading } = action.payload
      if(loading) {
        return state.set('visible', true).set('type', type).set('loading', true)
      }
      return state.set('visible', true).set('type', type)
    },
    hideModal (state) {
      return state.set('visible', false).set('loading', false).set('curItem', Map({}))
    }
  }
}
