<template>
  <div :class="{
    text: true,
    'text--small': isSmall,
    'text--large': isLarge,
  }">
    <slot v-if="text === ''"></slot>
    <v-else>
      {{text}}
    </v-else>
  </div>
</template>

<style scoped lang="scss">
  .text {
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
    text: {
      type: String,
      default: '',
    },
  },
};
</script>
