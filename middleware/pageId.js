export default function({ route, store }) {
  store.commit('setCurrentPage', route.name)
}
