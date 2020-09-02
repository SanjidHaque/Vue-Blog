<template>
    <v-form ref="form"
            v-model="valid">
        <v-row justify="center">
            <v-dialog v-model="value" persistent max-width="700px">

                <v-card>
                    <v-card-title>
                        <span> {{ headerText }} </span>
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
                                                :items="getCategories"
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
                        <v-btn :disabled="!valid" class="v-btn-save" text @click="submitUpdatePostForm">Save</v-btn>
                        <v-btn class="v-btn-close" text @click="$emit('close', false)">Close</v-btn>
                    </v-card-actions>

                </v-card>
            </v-dialog>
        </v-row>
        <UpdateCategoryDialog
                v-bind:headerText="'Add New Category'"
                v-on:save="onAddCategory"
                v-on:close="closeAddCategoryDialog" v-model="dialog"/>
    </v-form>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex';
    import Post from '../models/post';
    import UpdateCategoryDialog from '../dialogs/UpdateCategoryDialog';

    export default {
        name: 'UpdatePostDialog',
        computed: mapGetters(['getCategories', 'getPost']),
        props: ['value', 'editMode', 'headerText', 'post'],
        components: {UpdateCategoryDialog},
        data() {
            return {
                dialog: false,
                valid: false,
                nameRules: [
                    v => !!v || 'This field is required!'
                ],
                title: '',
                description: '',
                categories: null
            }
        },
        created() {
            if (this.post !== undefined) {
                this.initialPostObject();
            }
        },
        methods: {
            ...mapActions(['addCategory', 'editPost']),
            initialPostObject() {
                this.title = this.post.title;
                this.description = this.post.description;
                this.categories = this.post.categories;
            },
            submitUpdatePostForm() {
                var post;
                if (this.editMode) {
                    post = new Post(
                        this.post.id,
                        this.title,
                        this.description,
                        this.categories
                    );

                } else {
                    post = new Post(
                        Date.now(),
                        this.title,
                        this.description,
                        this.categories
                    );
                    this.$refs.form.reset();
                }
                this.$emit('save', post);
            },
            onAddCategory(title) {
                this.dialog = false;
                this.addCategory(title);
            },
            openAddCategoryDialog() {
                this.dialog = true;
            },
            closeAddCategoryDialog() {
                this.dialog = false;
            }
        }
    }
</script>

<style scoped>
    .v-btn-save {
        text-transform: none;
        background-color: #42b983;
        color: #fff !important;
    }

    .v-btn-close {
        text-transform: none;
    }
</style>

