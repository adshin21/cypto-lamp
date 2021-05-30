<template>
  <div class="container">
    <Header 
      :pageSize="pageSize" 
      @page-size-change="updatePageSize"
    />
    <br />
    <Table 
      v-if="data.coins && data.coins.length > 0"
      :data="data"
      :countStart="(pageNumber - 1) * pageSize"
    />
    <Pagination
      v-if="data.coins && data.coins.length > 0"
      :pageNumber="pageNumber"
      @page-number-change="updatePageNumber"
    />

    <Error
      v-if="!data.coins || data.coins.length == 0"
    />
  </div>
</template>


<script>
import _ from 'lodash';
import Header from './Header';
import Table from './Table';
import Pagination from './Pagination';
import Error from './Error'
export default {
  name: 'Main',
  props: {
    msg: String
  },
  components: {
    Header,
    Table,
    Pagination,
    Error
  },
  data() {
    return {
      data: { },
      pageSize: 10,
      pageNumber: 1,
    }
  },
  methods: {
    updatePageSize(val) {
      this.pageSize = Number(val);
      this.pageNumber = 1;
    },
    updatePageNumber(val) {
      this.pageNumber += Number(val);
    },
    async fetchData() {
      const res = await fetch(`https://api.coinranking.com/v1/public/coins/?limit=${this.pageSize}&offset=${(this.pageNumber - 1) * this.pageSize}`, {
        method: 'GET'
      });
      const data = await res.json();
      return data.data;
    },
    intervalfun: function() {
      setInterval(async function() {
        this.data = await this.fetchData();
      }.bind(this), 3000)
    }
  },
  async created () {
    this.data = await this.fetchData();
    this.intervalfun();
  },
  watch: {
    pageSize: async function() {
      this.data = await this.fetchData();
    },
    pageNumber: async function() {
      this.data = await this.fetchData();
    }
  }
}
</script>

<style scoped>
.container {
  margin-top: 30px;
  text-align: start;
}
</style>
