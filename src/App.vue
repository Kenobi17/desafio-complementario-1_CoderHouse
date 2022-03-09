<template>
  <div id="app" class="container">
    <h1 class="text-center">Desafio Complementario 1</h1>
    <TableComponent
      :columns="studentsHeaders"
      :items="students"
      :title="studentsTitle"
      :table-style="studentsStyle"
    />
    <TableComponent
      :columns="seriesHeaders"
      :items="series"
      :title="seriesTitle"
      :table-style="seriesStyle"
    />
    <TableComponent
      :columns="moviesHeaders"
      :items="movies"
      :title="moviesTitle"
      :table-style="{ color: 'pink', background: 'green' }"
    />
  </div>
</template>

<script>
import TableComponent from './components/TableComponent.vue';
import data from './data.js';
export default {
  name: 'App',
  components: {
    TableComponent,
  },
  data() {
    return data;
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
