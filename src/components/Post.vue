<template>
    <div style="padding-top: 20px;">

        <UpdatePostDialog
                v-bind:post="post"
                v-bind:editMode="editMode"
                v-bind:headerText="headerText"
                v-on:close="closeEditPostDialog"
                v-on:save="onEditPost"
                v-model="dialog"/>
                <v-card
                        class="mx-auto"
                        max-width="344">
                    <v-card-text>
                        <p class="display-1 text--primary">
                            {{ post.title }}
                        </p>

                        <div class="text--primary">
                            {{ post.description }}
                        </div>

                        <span v-for="category in post.categories" v-bind:key="category">
                            {{ category }}
                        </span>
                    </v-card-text>

                    <v-card-actions style="text-align: right;">
                        <v-btn @click="openEditPostDialog()" text>
                            <v-icon>mdi-pencil</v-icon>
                        </v-btn>
                        <v-btn @click="onDeletePost()" text>
                            <v-icon>mdi-delete</v-icon>
                        </v-btn>
                    </v-card-actions>

                </v-card>
            </div>
</template>


<script>
    import {mapActions} from 'vuex';
    import UpdatePostDialog from '../dialogs/UpdatePostDialog';

    export default {
        name: 'Post',
        props: ['post','index'],
        components: { UpdatePostDialog },
        data() {
            return {
                headerText: 'Edit Post',
                editMode: true,
                dialog: false
            }
        },
        methods: {
            ...mapActions(['editPost', 'deletePost']),
            openEditPostDialog() {
                this.dialog = true;
            },
            closeEditPostDialog () {
                this.dialog = false;
            },
            onEditPost(post) {
                this.dialog = false;
                this.editPost(post);
            },
            onDeletePost() {
                this.deletePost(this.index);
            }
        }
    }
</script>

<style scoped>
    .v-card__actions {
        display: block;
    }
</style>

