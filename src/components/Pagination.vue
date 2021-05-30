<template>
    <nav>
        <ul class="pagination">
            <li @click="handleClick(-1)" :class="['page-item', $store.state.pageNumber - 1 == 0 ? 'disabled' : '']">
                <a class="page-link" href="#">Previous</a>
            </li>
            <li @click="handleClick(-1)" v-if="$store.state.pageNumber - 1 > 0" class="page-item">
                <a class="page-link" href="#">{{$store.state.pageNumber - 1}}</a>
            </li>
            <li @click="handleClick(0)" class="page-item active">
                <a class="page-link" href="#">{{ $store.state.pageNumber }}<span class="sr-only">(current)</span></a>
            </li>
            <li @click="handleClick(1)" class="page-item">
                <a class="page-link" href="#">{{ $store.state.pageNumber + 1}}</a>
            </li>
            <li @click="handleClick(2)" v-if="$store.state.pageNumber - 1 == 0" class="page-item">
                <a class="page-link" href="#">{{ $store.state.pageNumber + 2}}</a>
            </li>
            <li @click="handleClick(1)" class="page-item">
                <a class="page-link" href="#">Next</a>
            </li>
        </ul>
    </nav>
</template>

<script>

export default {
    name: 'Pagination',
    methods: {
        handleClick(val) {
            if(this.$store.state.pageNumber == 1 && val == -1)
                return;
            this.$store.dispatch('updatePageNumber', val);
        }
    }
}
</script>

<style scoped>
.pagination {
    justify-content: flex-end
}
</style>