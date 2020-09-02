import Post from '../../models/post';

const state = {
    posts:
        [
            new Post(1, 'Economy', 'This is a good news', ['Important', 'Stared']),
            new Post(2, 'World', 'This is a good news', ['Top', 'Stared']),
            new Post(3, 'Inside', 'This is a good news', ['Old'])
        ]
};

const getters = {
    getPosts : (state) => state.posts
};

const actions = {
    addPost({ commit }, post) {
        commit('newPost', post);
    },
    editPost({ commit }, post) {
        commit('updatePost', post);
    },
    deletePost({ commit }, index) {
        commit('removePost', index);
    }
};

const mutations = {
    newPost: (state, post) => state.posts.unshift(post),
    updatePost: (state, post) => {
        const getPost = state.posts.find(x => x.id === post.id);

        if (getPost !== undefined) {
            getPost.title = post.title;
            getPost.description = post.description;
            getPost.categories = post.categories;
        }
    },
    removePost: (state, index) => {
        state.posts.splice(index, 1);
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}
