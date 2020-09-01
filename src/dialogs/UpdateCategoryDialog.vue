<template>
    <v-form ref="form"
            v-model="valid" laz>
        <v-row justify="center">
            <v-dialog v-model="value" persistent max-width="600px">

                <v-card>
                    <v-card-title>
                        <span>Add New Category</span>
                    </v-card-title>

                    <v-card-text>
                        <v-container>

                            <div class="row">
                                <div class="col-12">
                                    <v-text-field
                                            :rules="nameRules"
                                            v-model="name"
                                            outlined
                                            label="Name*"
                                            required>
                                    </v-text-field>
                                </div>
                            </div>

                        </v-container>
                    </v-card-text>

                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn :disabled="!valid" class="v-btn-save" text @click="submitAddCategoryForm">Save</v-btn>
                        <v-btn class="v-btn-close" text @click="$emit('close', false)">Close</v-btn>
                    </v-card-actions>

                </v-card>
            </v-dialog>
        </v-row>
    </v-form>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex';

    export default {
        name: 'UpdateCategoryDialog',
        props: {
            value: Boolean
        },
        data() {
            return {
                valid: false,
                nameRules: [
                    v => !!v || 'This field is required!',
                ],
                name: ''
            }
        },
        methods: {
            ...mapActions(['addCategory']),
            submitAddCategoryForm() {
                this.addCategory(this.name);
                this.$refs.form.reset();
                this.$emit('close', false);
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
