<template>
  <img :src="url" :alt="alt" />
</template>

<script>
export default {
  props: {
    url: String,
    alt: {
      type: String,
      default: 'Image',
    },
  },
};
</script>
