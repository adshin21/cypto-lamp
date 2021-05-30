<template>
  <div class="row">
      <div class="col">
        <table class="table table-reponsive table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Icon</th>
              <th scope="col">Name</th>
              <th scope="col">Symbol</th>
              <th scope="col">Price ( in USD )</th>
              <th scope="col">Change ( in % )</th>
            </tr>
          </thead>
          <tbody>
            <tr :key="coin.uuid" v-for="(coin, idx) in $store.state.data.coins">
              <TableRow :coin="coin" :idx="idx" />
            </tr>
          </tbody>
        </table>
      </div>
  </div>
</template>


<script>
import TableRow from './TableRow';
export default {
  name: 'Table',
  components: {
    TableRow,
  }
}
</script>