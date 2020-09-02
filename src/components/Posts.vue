<template >
    <div>
        <div class="row">
            <div class="col-12">
                <v-btn small
                       text
                       class="v-btn-add-post"
                       @click="openAddPostDialog" >
                    Add Post</v-btn>
            </div>
        </div>

        <UpdatePostDialog
                v-on:close="closeAddPostDialog"
                v-on:save="onAddPost"
                v-model="dialog"/>

        <div class="row" style="padding-top: 20px;">
            <div class="col-12 col-sm-4" v-for="post in getPosts" v-bind:key="post.id">
                <Post v-bind:post="post"/>

            </div>
        </div>
    </div>
</template>


<script>
    import {mapGetters, mapActions} from 'vuex';
    import UpdatePostDialog from '../dialogs/UpdatePostDialog';
    import Post from './Post';

    export default {
        name: 'Posts',
        components: { UpdatePostDialog, Post },
        computed: mapGetters(['getPosts']),
        data() {
            return {
                dialog: false
            }
        },
        methods: {
            ...mapActions(['addPost', 'sharePost']),
            openAddPostDialog() {
                this.dialog = true;
            },
            closeAddPostDialog () {
             this.dialog = false;
            },
            onAddPost(post) {
                this.dialog = false;
                this.addPost(post);
            }
        }
    }
</script>

<style scoped>
    .v-card__actions {
        display: block;
    }
    .v-btn-add-post {
        background-color: #42b983!important;
        color: #fff!important;
        padding: 20px!important;
    }
</style>

