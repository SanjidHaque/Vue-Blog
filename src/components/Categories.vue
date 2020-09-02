<template >
    <div>
        <div class="row">
            <div class="col-12">
                <v-btn small
                       text
                       class="v-btn-add"
                       @click="openAddCategoryDialog" >
                    Add Category
                </v-btn>
            </div>
        </div>

        <UpdateCategoryDialog
                v-bind:headerText="headerText"
                v-bind:editMode="editMode"
                v-on:close="closeAddCategoryDialog"
                v-on:save="onAddCategory"
                v-model="dialog"/>

        <div v-if="getCategories.length !== 0" class="row" style="padding-top: 20px;">
            <div class="col-12 col-sm-4" v-for="(category, index) in getCategories" v-bind:key="category">
                <Category v-bind:category="category" v-bind:index="index" />

            </div>
        </div>

        <div v-else class="row" style="text-align: center; font-weight: 500;">
            <div class="col-12">

                No category is available, it's easy to create one.

            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex';
    import UpdateCategoryDialog from '../dialogs/UpdateCategoryDialog';
    import Category from '../components/Category';

    export default {
        name: 'Categories',
        components: { UpdateCategoryDialog, Category },
        computed: mapGetters(['getCategories']),
        data() {
            return {
                dialog: false,
                editMode: false,
                headerText: 'Add New Category'
            }
        },
        methods: {
            ...mapActions(['addCategory']),
            openAddCategoryDialog() {
                this.dialog = true;
            },
            closeAddCategoryDialog () {
                this.dialog = false;
            },
            onAddCategory(title) {
                this.dialog = false;
                this.addCategory(title);
            }
        }
    }
</script>


<style scoped>
    .v-btn-add {
        background-color: #42b983!important;
        color: #fff!important;
        padding: 20px!important;
    }
</style>

