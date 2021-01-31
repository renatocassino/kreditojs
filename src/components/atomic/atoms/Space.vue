<template>
  <div :class="{
    space: true,
    [`space--${size}`]: Boolean(size)
  }"></div>
</template>

<style lang="scss" scoped>
.space {
  width: 100%;
  display: block;
  height: 20px;

  &--small {
    height: 8px;
  }

  &--medium {
    height: 16px
  }

  &--large {
    height: 32px;
  }

  &--xlarge {
    height: 64px;
  }
}
</style>

<script>
export default {
  props: {
    size: {
      type: String,
      default: 'md',
    },
  },
};
</script>
