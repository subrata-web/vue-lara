import http from "../../../apis/axios";

const state = {
    isLoading: false,
    users: []
};

const mutations = {
    initUsers(state, users) {
        state.users = users;
    },
    loader(state, status) {
        state.isLoading = status;
    },
    deleteIndex(userId) {
        state.users.findIndex(id => {
            return id === userId;
        });
    }
};

const actions = {
    initApp({ commit }) {
        commit("loader", true);
        return http.get("/users").then(response => {
            if (response.data.error === false && response.data.payload.length > 0) {
                commit("initUsers", response.data.payload);
                commit("loader", false);
            }
        }).catch(err => {
            commit("loader", false);
            console.log(err);
        });
    },

    deleteItem({ commit }, id) {
        commit('loader', true);
        return http.delete(`/users/delete/${id}`).then(response => {
            if (response.data.error === false) {
                commit('loader', false);
                commit('deleteIndex', id);
            }
        }).catch(error => {
            commit('loader', false);
            console.log(error);
        });
    }
};

const getters = {
    getUsers(state) {
        return state.users;
    },
    getStatus(state) {
        return state.isLoading;
    }
};


export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};