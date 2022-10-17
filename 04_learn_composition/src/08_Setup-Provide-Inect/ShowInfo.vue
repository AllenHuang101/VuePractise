<template>
  <div>ShowInfo: {{ name }} - {{ age }} - {{ height }}</div>
</template>

<script>
import { inject } from 'vue';

export default {
  setup() {
    const name = inject('name');
    const age = inject('age');
    const height = inject('height', 1.88);

    return {
      name,
      age,
      height,
    };
  },
};
</script>

<style lang="scss" scoped></style>
