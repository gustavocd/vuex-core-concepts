<template>
  <div>
    <ul v-if="numbers.length">
      <li v-for="number in numbers">{{ number }}</li>
    </ul>
    <p v-else>Start adding numbers 💩</p>
    <add-number></add-number>
  </div>
</template>

<script>
  import AddNumber from './AddNumber';

  export default {
    components: {
      AddNumber,
    },
    name: 'numbers',
    computed: {
      numbers() {
        return this.$store.getters.numbers;
      },
    },
  };
</script>

<style scoped>
  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin: 0 10px;
    display: inline-block;
  }
</style>
