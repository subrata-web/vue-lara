<template>
    <div>
        <h3 class="text-center">Edit User</h3>
        <div class="row">
            <div class="col-md-6">
                <form @submit.prevent="updateUser">
                    <div class="form-group">
                        <label>Name</label>
                        <input type="text" class="form-control" v-model="user.name">
                    </div>
                    <div class="form-group">
                        <label>Email</label>
                        <input type="email" class="form-control" v-model="user.email">
                    </div>
                    <button type="submit" class="btn btn-primary">Update</button>
                </form>
            </div>
        </div>
    </div>
</template>
 
<script>
    import http from '../../apis/axios';
    export default {
        name: "Edit",
        data() {
            return {
                user: {}
            }
        },
        created() {
            console.log(this.$route.params.id);

            // this.axios
            //     .get(`http://localhost:8000/api/products/${this.$route.params.id}`)
            //     .then((res) => {
            //         this.product = res.data;
            //     });
        },
        methods: {
            getSingleUser() {
                
            },
            updateUser() {
                // this.axios
                //     .patch(`http://localhost:8000/api/products/${this.$route.params.id}`, this.product)
                //     .then((res) => {
                //         this.$router.push({ name: 'home' });
                //     });
            }
        }
    }
</script>