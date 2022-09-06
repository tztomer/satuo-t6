import { createStore } from 'vuex'
import { toyService } from '../services/toy-service.js'

// create a store instance
const store = createStore({
  strict: true,
  state: {
    toys: null,
    filterBy: '',
  },
  getters: {
    toysToDisplay({ toys }) {
      return toys
    },
    getLabelsCount({ toys }) {
      if (!toys) return
      let labelsCount = {}
      toys.forEach((toy) => {
        toy.labels.forEach((label) => {
          if (!labelsCount[label]) labelsCount[label] = 0
          labelsCount[label]++
        })
      })
      return labelsCount
    },
    getToysStock({ toys }) {
      if (!toys) return
      let toysStock = [0, 0]
      toys.forEach((toy) => (toy.inStock ? toysStock[0]++ : toysStock[1]++))
      return toysStock
    },
  },
  mutations: {
    setToys(state, { toys }) {
      state.toys = toys
    },
    updateToy(state, { toy }) {
      const idx = state.toys.findIndex((t) => t._id === toy._id)
      state.toys.splice(idx, 1, toy)
    },
    addToy(state, { toy }) {
      state.toys.unshift(toy)
    },
    removeToy(state, { toyId }) {
      const idx = state.toys.findIndex((t) => t._id === toyId)
      state.toys.splice(idx, 1)
    },
    setFilterBy(state, { filterBy }) {
      state.filterBy = filterBy
    },
  },
  actions: {
    loadToys({ commit }) {
      toyService
        .query()
        .then((toys) => {
          commit({ type: 'setToys', toys })
          return toys
        })
        .catch((err) => {
          console.log(err)
        })
    },
    saveToy({ commit }, { toy }) {
      let actionType = toy._id ? 'updateToy' : 'addToy'
      return toyService
        .saveToy(toy)
        .then((savedToy) => {
          commit({ type: actionType, toy: savedToy })
          return savedToy
        })
        .catch((err) => {
          console.log(err)
        })
    },
    removeToy({ commit }, { toyId }) {
      return toyService
        .removeToy(toyId)
        .then(() => {
          commit({ type: 'removeToy', toyId })
        })
        .catch((err) => {
          console.log(err)
        })
    },
    setFilterBy({ commit }, { filterBy }) {
      toyService.query(filterBy).then((toys) => {
        commit({ type: 'setToys', toys })
      })
    },
  },
  modules: {},
})

export default store
