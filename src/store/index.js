import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate"
import Cookies from 'js-cookie'

Vue.use(Vuex)

// modules
import cart from './cart/#index';
import auth from './auth/#index';
import phonesObj from './phones/#index';

const authState = createPersistedState({
    key: 'token',
    paths: ['auth'],
    storage: {
        getItem: (key) => Cookies.get(key),
        setItem: (key, value) => Cookies.set(key, value, { expires: 1, secure: true }),
        removeItem: (key) => Cookies.remove(key),
    },
});

export default new Vuex.Store({
    modules: {
        auth,
        cart,
        phonesObj
    },
    plugins: [authState]
});