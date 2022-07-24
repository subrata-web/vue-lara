<template>
    <div>
        <b-form @submit.prevent="onSubmit">
            <b-form-group id="name" label="Name:" label-for="name" description="">
                <b-form-input id="name" v-model="form.name" type="text" placeholder="Enter name" required></b-form-input>
            </b-form-group>
            <b-form-group id="email" label="Email:" label-for="email" description="">
                <b-form-input id="email" v-model="form.email" type="email" placeholder="Enter email" required></b-form-input>
            </b-form-group>
            <b-button type="submit" variant="primary">Submit</b-button>
        </b-form>
    </div>
</template>
<script>
export default {
    data() {
        return {
            form: {
                name: '',
                email: ''
            }
        }
    },

    methods: {
        onSubmit() {
            
        }
    }
};
</script>

<style scoped></style>
