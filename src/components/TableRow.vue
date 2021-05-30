<template>
    <td>{{ countStart + idx + 1 }}</td>
    <td><img :src="coin.iconUrl" class="size" :alt="coin.symbol" /></td>
    <td>{{ coin.name }}</td>
    <td>{{ coin.symbol }}</td>
    <td>{{ coin.price }}</td>
    <td class="coin.change >= 0 ? positive : negative">{{ coin.change }} %</td>
</template>

<script>
export default {
    name: 'TableRow',
    props: {
        coin: Object,
        idx: Number,
        countStart: Number,
    },
}
</script>

<style scoped>
.size {
    max-width: 25px;
    max-height: 25px;
}

.negative {
    color: red;
    font-weight: bold;
}
</style>