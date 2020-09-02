<template>
    <div style="padding-top: 20px;">

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
                        <v-btn text>
                            <v-icon>mdi-delete</v-icon>
                        </v-btn>
                    </v-card-actions>

                </v-card>
            </div>
</template>


<script>
    import {mapActions} from 'vuex';
    export default {
        name: 'Post',
        props: ['post'],
        data() {
            return {
                dialog: false
            }
        },
        methods: {
            ...mapActions(['editPost']),
            openEditPostDialog() {
                this.dialog = true;
            },
            closeEditPostDialog () {
                this.dialog = false;
            },
            onEditPost(post) {
                this.dialog = false;
                this.editPost(post);
            }
        }
    }
</script>

<style scoped>
    .v-card__actions {
        display: block;
    }
</style>

