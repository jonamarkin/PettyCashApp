import Vue from 'vue'
import Vuex from 'vuex'

import user from './modules/user'

Vue.use(Vuex)

export default new Vuex.Store({
    // state: {
    //     posts: [
    //     { title: 'Post Title 1' },
    //     { title: 'Post Title 2' },
    //     { title: 'Post Title 3' },
    //     { title: 'Post Title 4' },
    //     { title: 'Post Title 5' }
    //     ]
    // },
    // mutations: {
    //     setPosts (state, posts) {
    //         state.posts = posts
    //         }
    // },
    // actions: {
    //     fetchPosts ({ commit }) {
    //         return client
    //         .fetchPosts()
    //         .then(posts => commit('setPosts', posts))
    //         }
    // }

    state: {

    },
    getters: {

    },
    mutations: {

    },
    actions: {

    },
    modules: {
        user
    }
})