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
                v-on:close="closeDialog"
                v-model="dialog"/>
        <div class="row" style="padding-top: 20px;">
            <div class="col-12 col-sm-4" v-for="post in allPost" v-bind:key="post.id">

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
                        <v-btn text>
                            <v-icon>mdi-pencil</v-icon>
                        </v-btn>
                        <v-btn text>
                            <v-icon>mdi-delete</v-icon>
                        </v-btn>
                    </v-card-actions>

                </v-card>

            </div>
        </div>
    </div>
</template>


<script>
    import {mapGetters, mapActions} from 'vuex';
    import UpdatePostDialog from '../dialogs/UpdatePostDialog';
    import Post from '../models/post';

    export default {
        name: 'Posts',
        components: { UpdatePostDialog },
        computed: mapGetters(['allPost']),
        data() {
            return {
                dialog: false
            }
        },
        methods: {
            openAddPostDialog() {
                this.dialog = true;
            },
            closeDialog () {
             this.dialog = false;
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

