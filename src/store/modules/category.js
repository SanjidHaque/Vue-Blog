
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
    editCategory({commit}, name, index) {
        commit('updateCategory',name, index);
    },
    deleteCategory({commit}, index) {
        commit('removeCategory', index);
    },
};

const mutations = {
    newCategory: (state, name) => state.categories.unshift(name),
    updateCategory: (state, name, index) => {
        state.categories[index] = name;
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
