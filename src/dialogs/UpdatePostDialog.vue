<template>
    <v-form ref="form"
            v-model="valid" laz>
    <v-row justify="center">
        <v-dialog v-model="value" persistent max-width="700px">

            <v-card>
                <v-card-title>
                    <span>Add New Post</span>
                </v-card-title>

                <v-card-text>
                    <v-container>

                        <div class="row">
                            <div class="col-12">
                                <v-text-field
                                        :rules="nameRules"
                                        v-model="title"
                                        outlined
                                        label="Title*"
                                        required>
                                </v-text-field>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-12">
                                <v-textarea
                                        :rules="nameRules"
                                        v-model="description"
                                        outlined
                                        label="Description*"
                                        rows="3">
                                </v-textarea>
                            </div>
                        </div>


                        <div class="row">
                            <div class="col-12">
                                <template>
                                        <v-select
                                                v-model="categories"
                                                outlined
                                                :rules="nameRules"
                                                :items="allCategory"
                                                label="Select Category"
                                                required
                                                multiple>
                                            <template v-slot:prepend-item>
                                                <v-list-item>
                                                    <v-list-item-content>
                                                        <v-list-item-title
                                                                @click="openAddCategoryDialog"
                                                                style="cursor: pointer; font-weight:500;">
                                                           Add New Category
                                                        </v-list-item-title>
                                                    </v-list-item-content>
                                                </v-list-item>
                                            </template>
                                        </v-select>
                                </template>
                            </div>
                        </div>

                    </v-container>
                </v-card-text>

                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn :disabled="!valid" class="v-btn-save" text @click="submitAddPostForm">Save</v-btn>
                    <v-btn class="v-btn-close" text @click="$emit('close', false)">Close</v-btn>
                </v-card-actions>

            </v-card>
        </v-dialog>
    </v-row>
        <UpdateCategoryDialog v-on:close="closeDialog" v-model="dialog"/>
    </v-form>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex';
    import Post from '../models/post';
    import UpdateCategoryDialog from '../dialogs/UpdateCategoryDialog';

    export default {
        name: 'UpdatePostDialog',
        computed: mapGetters(['allCategory']),
        props: {
            value: Boolean
        },
        components:{ UpdateCategoryDialog },
        data() {
            return {
                dialog: false,
                valid: false,
                nameRules: [
                    v => !!v || 'This field is required!',
                ],
                title: '',
                description: '',
                categories: null
            }
        },
        methods: {
            ...mapActions(['addPost']),
            submitAddPostForm() {
                var post = new Post(
                    Date.now(),
                    this.title,
                    this.description,
                    this.categories
                );

                this.addPost(post);
                this.$refs.form.reset();
                this.$emit('close', false);
            },
            openAddCategoryDialog() {
                this.dialog = true;
            },
            closeDialog () {
                this.dialog = false;
            }

        }
    }
</script>

<style scoped>
    .v-btn-save {
        text-transform: none;
        background-color: #42b983;
        color: #fff!important;
    }
    .v-btn-close{
        text-transform: none;
    }
</style>

