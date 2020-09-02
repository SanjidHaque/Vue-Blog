
<template>
    <div style="padding-top: 20px;">

        <UpdateCategoryDialog
                v-bind:category="category"
                v-bind:editMode="editMode"
                v-bind:headerText="headerText"
                v-on:close="closeEditCategoryDialog"
                v-on:save="onEditCategory"
                v-model="dialog"/>
        <v-card
                class="mx-auto"
                max-width="344">
            <v-card-text>
                <p style="font-weight: 400; font-size: 25px; " class="text--primary">
                    {{ category }}
                </p>
            </v-card-text>

            <v-card-actions style="text-align: right;">
                <v-btn @click="openEditCategoryDialog()" text>
                    <v-icon>mdi-pencil</v-icon>
                </v-btn>
                <v-btn @click="onDeleteCategory()" text>
                    <v-icon>mdi-delete</v-icon>
                </v-btn>
            </v-card-actions>

        </v-card>
    </div>
</template>


<script>

    import {mapActions} from 'vuex';
    import UpdateCategoryDialog from '../dialogs/UpdateCategoryDialog';

    export default {
        name: 'Category',
        props: ['category','index'],
        components: { UpdateCategoryDialog },
        data() {
            return {
                headerText: 'Edit Category',
                editMode: true,
                dialog: false
            }
        },
        methods: {
            ...mapActions(['addCategory', 'editCategory', 'deleteCategory']),
            openEditCategoryDialog() {
                this.dialog = true;
            },
            closeEditCategoryDialog () {
                this.dialog = false;
            },
            onEditCategory(title) {
                this.dialog = false;
                var payload = { 'title': title, 'index': this.index };
                this.editCategory(payload);
            },
            onDeleteCategory() {
                this.dialog = false;
                this.deleteCategory(this.index);
            }
        }
    }
</script>


<style scoped>
    .v-card__actions {
        display: block;
    }
</style>
