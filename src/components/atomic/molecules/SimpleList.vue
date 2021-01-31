<template>
  <div v-for="line in lines" v-bind:key="line">
    <Text>
      {{line}}
    </Text>
  </div>
</template>

<script>
import { Text } from '@/components/atomic';

export default {
  props: {
    lines: Array,
  },
  components: {
    Text,
  },
};
</script>
