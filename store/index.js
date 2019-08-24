const TOP_SUBMENU = {
  title: 'index',
  menus: [
    {
      pageId: 'awesome',
      name: 'awesome',
      url: '/awesome/menu1'
    },
    {
      pageId: 'wonderful',
      name: 'wonderful',
      url: '/wonderful/menu1'
    }
  ]
}

const AWESOME_SUBMENU = {
  title: 'awesome',
  pageGroup: 'awesome',
  menus: [
    {
      pageId: 'awesome-menu1',
      name: 'awesome-menu1',
      icon: 'phone',
      url: '/awesome/menu1'
    },
    {
      pageId: 'awesome-menu2',
      name: 'awesome-menu2',
      icon: 'email',
      url: '/awesome/menu2'
    },
    {
      pageId: 'awesome-menu3',
      name: 'awesome-menu3',
      url: '/awesome/menu3'
    }
  ]
}

const WONDERFUL_SUBMENU = {
  title: 'wonderful',
  pageGroup: 'wonderful',
  menus: [
    {
      pageId: 'wonderful-menu1',
      name: 'wonderful-menu1',
      icon: 'inbox',
      url: '/wonderful/menu1'
    },
    {
      pageId: 'wonderful-menu2',
      name: 'wonderful-menu2',
      icon: 'move_to_inbox',
      url: '/wonderful/menu2'
    },
    {
      pageId: 'wonderful-menu3',
      name: 'wonderful-menu3',
      icon: 'send',
      url: '/wonderful/menu3'
    }
  ]
}
export const state = () => ({
  currentPage: 'index',
  submenu: {
    index: TOP_SUBMENU,
    'awesome-menu1': AWESOME_SUBMENU,
    'awesome-menu2': AWESOME_SUBMENU,
    'awesome-menu3': AWESOME_SUBMENU,
    'wonderful-menu1': WONDERFUL_SUBMENU,
    'wonderful-menu2': WONDERFUL_SUBMENU,
    'wonderful-menu3': WONDERFUL_SUBMENU
  }
})

export const getters = {
  currentPage(state) {
    return state.currentPage
  },
  isSamePageGroup: (state) => (pageId) => {
    return pageId.startsWith(state.submenu[state.currentPage].pageGroup)
  },
  submenuOf: (state) => (pageId) => {
    if (state.submenu[pageId]) {
      return state.submenu[pageId]
    }
    return TOP_SUBMENU
  }
}

export const mutations = {
  setCurrentPage(state, payload) {
    state.currentPage = payload
  }
}
