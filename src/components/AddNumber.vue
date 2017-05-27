<template>
  <a href="#" @click.prevent="addNumber">Add random number</a>
</template>

<script>
  import { mapActions } from 'vuex';

  export default {
    name: 'add-number',
    methods: {
      ...mapActions(['fetchNumber']),
      addNumber() {
        this.fetchNumber({
          max: 100,
          min: 1,
        });
      },
    },
  };
</script>
