<template>
  <div :class="{
    title: true,
    'title--small': isSmall,
    'title--large': isLarge,
  }">
    <slot v-if="title === ''"></slot>
    <v-else>
      {{title}}
    </v-else>
  </div>
</template>

<style scoped lang="scss">
  .title {
    font-size: 24px;
    font-weight: 600;
    margin: 2rem 0 1.5rem;

    &--small {
      font-size: 16px;
    }

    &--large {
      font-size: 40px;
    }
  }
</style>

<script>
export default {
  props: {
    isLarge: {
      type: Boolean,
      default: false,
    },
    isSmall: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: '',
    },
  },
};
</script>
