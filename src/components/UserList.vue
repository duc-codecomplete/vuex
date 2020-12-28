<template>
    <div>
        <h1>User List</h1>
        <hr>
        <table style="width:100%">
            <tr>
                <th>Name</th>
                <th>Phone</th> 
                <th>Address</th>
            </tr>
            <tr v-for="(user, index) in users" :key="index">
                <td>{{user.name}}</td>
                <td>{{user.phone}}</td>
                <td>{{user.address.city}}</td>
            </tr>
        </table>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    data() {
        return {
        }
    },
    computed: {
        /////You can using 1 of 2 ways below, recommend using mapState
        // users() {
        //     return this.$store.state.user.users
        // },
        ...mapState({
            users: state => state.user.users,
        }),
    },
    mounted() {
        this.$store.dispatch('user/getUser')
    },
    created() {
        
    },
}
</script>

<style>
    table, th, td {
    border: 1px solid black;
    }
</style>