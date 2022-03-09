<template>
  <div>
    <h2 class="text-center">{{ title }}</h2>
    <table :style="tableStyle" class="table table-striped}">
      <tr>
        <th v-for="column in columns" :key="column">
          {{ column }}
        </th>
      </tr>
      <tr v-for="item in items" :key="item.id">
        <td v-for="property in item" :key="property">
          {{ property }}
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'TableComponent',
  props: {
    columns: Array,
    items: Array,
    title: String,
    tableStyle: Object,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
