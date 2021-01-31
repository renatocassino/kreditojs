<template>
  <div :class="{
    text: true,
    [`text--${type}`]: true,
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

    &--title {
      font-size: 32px;
      font-weight: 600;
    }

    &--subtitle {
      font-size: 24px;
      font-weight: 600;
    }

    &--text {
      font-size: 20px;
      font-weight: 400;
    }

    &--large {
      font-size: 40px;
      font-weight: 600;
    }
  }
</style>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'text',
    },
    text: {
      type: String,
      default: '',
    },
  },
};
</script>
