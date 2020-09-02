
const state = {
    categories: ['Top', 'Important', 'Stared', 'Rated', 'Old']
};

const getters = {
    getCategories: (state) => state.categories
};

const actions = {
    addCategory({commit}, name) {
        commit('newCategory', name);
    },
    editCategory({commit}, payload ) {
        commit('updateCategory', payload);
    },
    deleteCategory({commit}, index) {
        commit('removeCategory', index);
    },
};

const mutations = {
    newCategory: (state, name) => state.categories.unshift(name),
    updateCategory: (state, payload ) => {
        state.categories.splice(payload.index, 1, payload.title);
    },
    removeCategory: (state, index) => {
        state.categories.splice(index, 1)
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}
