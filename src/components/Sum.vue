<template>
  <div class="sum">
    <numbers></numbers>
    {{ sum }}
    <p>You have generated {{ totalNumbers }} random numbers.</p>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import Numbers from './Numbers';

  export default {
    name: 'Sum',
    components: {
      Numbers,
    },
    computed: {
      ...mapGetters(['sum', 'totalNumbers']),
    },
  };
</script>
