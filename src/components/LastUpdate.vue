<template>
    <div class="lastUpdate">
        <span>Last Updated at: </span>
        <span class="timeShow">{{' ' + (new Date($store.state.lastUpdate)).toLocaleString() }}</span>
    </div>
</template>

<script>
export default {
    name: 'LastUpdate'
}
</script>

<style scoped>
.lastUpdate {
    display: flex;
    justify-content: center;
}

.timeShow { 
    margin-left: 5px;
    font-weight: bold 
}
</style>
