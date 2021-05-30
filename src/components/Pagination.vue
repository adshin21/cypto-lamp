<template>
    <nav>
        <ul class="pagination">
            <li @click="handleClick(-1)" :class="['page-item', pageNumber - 1 == 0 ? 'disabled' : '']">
                <a class="page-link" href="#">Previous</a>
            </li>
            <li @click="handleClick(-1)" v-if="pageNumber - 1 > 0" class="page-item">
                <a class="page-link" href="#">{{pageNumber - 1}}</a>
            </li>
            <li @click="handleClick(0)" class="page-item active">
                <a class="page-link" href="#">{{ pageNumber }}<span class="sr-only">(current)</span></a>
            </li>
            <li @click="handleClick(1)" class="page-item">
                <a class="page-link" href="#">{{ pageNumber + 1}}</a>
            </li>
            <li @click="handleClick(2)" v-if="pageNumber - 1 == 0" class="page-item">
                <a class="page-link" href="#">{{ pageNumber + 2}}</a>
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
    props: {
        pageNumber: Number
    },
    methods: {
        handleClick(val) {
            if(this.pageNumber == 1 && val == -1)
                return;
            this.$emit("page-number-change", val);
        }
    }
}
</script>

<style scoped>
.pagination {
    justify-content: flex-end
}
</style>