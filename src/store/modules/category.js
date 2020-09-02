
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

        let getCategory = state.categories.find(x => x === 'Top');
        getCategory = 'sa';
       // state.categories[payload.index] = 'ksksk';
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
