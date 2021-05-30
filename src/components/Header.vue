<template>
    <div class="row header">
        <div class="col-sm-6 title">Crypto List</div>
        <div class="col-sm-6" >
            <span class="entries">Entries Per Page:   </span> 
            <input type="radio" v-model="$store.state.pageSize" v-on:input="$store.dispatch('updatePageSize', $event.target.value)" value="10">10
            <input type="radio" v-model="$store.state.pageSize" v-on:input="$store.dispatch('updatePageSize', $event.target.value)" value="25">25
            <input type="radio" v-model="$store.state.pageSize" v-on:input="$store.dispatch('updatePageSize', $event.target.value)" value="50">50
            <input type="radio" v-model="$store.state.pageSize" v-on:input="$store.dispatch('updatePageSize', $event.target.value)" value="100">100 
        </div>
    </div>
</template>

<script>
export default {
    name: 'Header',
}
</script>

<style scoped>
.header {
    align-items: center;
}
.title {
    font-size: 36px;
    font-weight: bold;
}
.entries {
    font-size: 18px;
    font-weight: bold;
}
input {
    margin-left: 10px;
}
</style>