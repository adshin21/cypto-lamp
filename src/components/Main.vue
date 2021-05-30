<template>
  <div class="container">
    <Header />
    <br />
    <LastUpdate />
    <br/>
    <Table 
      v-if="$store.state.data.coins && $store.state.data.coins.length > 0"
    />
    <Pagination 
      v-if="$store.state.data.coins && $store.state.data.coins.length > 0"
    />
  </div>
</template>


<script>
import _ from 'lodash';
import Header from './Header';
import Table from './Table';
import Pagination from './Pagination';
import Error from './Error';
import LastUpdate from './LastUpdate'
export default {
  name: 'Main',
  components: {
    Header,
    Table,
    Pagination,
    Error,
    LastUpdate
  },
  created () {
    this.$store.dispatch('setData');
    setInterval(function() {
        this.$store.dispatch('setData');
    }.bind(this), 3000)
  },
}
</script>

<style scoped>
.container {
  margin-top: 30px;
  text-align: start;
}
</style>
