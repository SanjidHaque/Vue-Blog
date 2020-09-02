<template>
    <v-form ref="form"
            v-model="valid">
        <v-row justify="center">
            <v-dialog v-model="value" persistent max-width="540px">

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
                                            v-model="categoryTitle"
                                            outlined
                                            label="Title*"
                                            required>
                                    </v-text-field>
                                </div>
                            </div>

                        </v-container>
                    </v-card-text>

                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn :disabled="!valid"
                               class="v-btn-save"
                               text
                               @click="submitUpdateCategoryForm">Save</v-btn>
                        <v-btn class="v-btn-close" text @click="$emit('close', false)">Close</v-btn>
                    </v-card-actions>

                </v-card>
            </v-dialog>
        </v-row>
    </v-form>
</template>


<script>
    export default {
        name: 'UpdateCategoryDialog',
        props: ['value', 'editMode', 'headerText', 'category'],
        data() {
            return {
                dialog: false,
                valid: false,
                nameRules: [
                    v => !!v || 'This field is required!'
                ],
                categoryTitle: ''
            }
        },
        created() {

        },
        methods: {
            submitUpdateCategoryForm() {

                if (!this.editMode) {
                    this.$refs.form.reset();
                }
                console.log(this.categoryTitle);
                this.$emit('save', this.categoryTitle);

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


