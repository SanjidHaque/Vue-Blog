import Post from '../../models/post';

const state = {
    posts:
        [
            new Post(1, 'Economy', 'This is a good news', ['Important', 'Stared']),
            new Post(2, 'World', 'This is a good news', ['Top', 'Stared']),
            new Post(3, 'Inside', 'This is a good news', ['Old'])
        ],
    post: null
};

const getters = {
    getPosts : (state) => state.posts,
    getPost : (state) => state.post
};

const actions = {
    addPost({ commit }, post) {
        commit('newPost', post);
    },
    editPost({ commit }, post) {
        commit('updatePost', post);
    },
    deletePost({ commit }, id) {
        commit('removePost', id);
    },
    sharePost({ commit }, post) {
        commit('shareSinglePost', post);
    },
};

const mutations = {
    newPost: (state, post) => state.posts.unshift(post),
    shareSinglePost: (state, post) => state.post = post,
    updatePost: (state, post) => {
        const getPost = state.posts.find(x => x.Id === post.Id);
        getPost.title = post.title;
        getPost.description = post.description;
        getPost.categories = post.categories;
    },
    removePost: (state, id) => {
        state.posts.splice(state.posts.indexOf(id), 1)
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}
