<template>
    <div class="header">
        <h2>Total users: {{activeUser}}</h2>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    computed: {
        ...mapGetters({
            activeUser: 'user/activeUser'
        }),
    }
}
</script>

<style>
    .header {
        height: 80px;
        background-color: red;
    }
</style>