<template>
    <div>
        <b-overlay :show="isLoading" no-wrap> </b-overlay>
        <div class="table-responsive">
            <table class="table table-bordered table-responsive mt-4">
                <thead class="thead-dark">
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in users" :key="index">
                        <td>{{ item.name }}</td>
                        <td>{{ item.email }}</td>
                        <td>
                            <div class="btn-group" role="group">
                                <router-link
                                    :to="{
                                        name: 'edit',
                                        params: { id: encrypt(item.id) },
                                    }"
                                    class="btn btn-success"
                                    >Edit</router-link
                                >
                                <button
                                    class="btn btn-danger"
                                    @click="deleteItem(item.id)"
                                >
                                    Delete
                                </button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <b-pagination
            pills
            v-model="currentPage"
            :total-rows="rows"
            :per-page="perPage"
            aria-controls="my-div"
        ></b-pagination>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Helper from '../libs/helper';
export default {
    data() {
        return {
            bordered: true,
            perPage: 3,
            currentPage: 1,
            items: [],
            rows: 0,
        };
    },

    methods: {
        ...mapActions("user", ["initApp"]),

        encrypt(id) {
            return Helper.encrypt('salt', String(id));
        },

        deleteItem: async function (id) {
            try {
                console.log("id", id);
            } catch (error) {
                console.log(error);
            }
        },
    },

    mounted() {},

    created() {
        this.initApp();
    },

    computed: {
        users() {
            const items = this.$store.getters["user/getUsers"];
            if (items instanceof Array && items.length > 0) {
                this.rows = items.length;
                return items.slice(
                    (this.currentPage - 1) * this.perPage,
                    this.currentPage * this.perPage
                );
            }
        },
        isLoading() {
            return this.$store.getters["user/getStatus"];
        },
    },
};
</script>

<style scoped></style>
