<template>
  <div v-for="line in lines" v-bind:key="line">
    <simple-line>
      {{line}}
    </simple-line>
  </div>
</template>

<script>
export default {
  props: {
    lines: Array,
  },
};
</script>
