<template>
  <div class="wrapper">
    <div class="centered" v-for="[ left, right ] in values" v-bind:key="left">
      <div class="centered__left">
        <Text type="subtitle" :text="left" />
      </div>
      <div class="centered__right">
        <Text
          v-for="rightItem in (typeof right === 'string' ? [right] : right)"
          v-bind:key="rightItem"
          type="medium-light"
          :text="rightItem"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.centered {
  display: flex;
  justify-content: space-around;

  > div {
    padding: 0 0.25rem;
    width: 50%;
  }

  &__left {
    text-align: right;
    align-self: flex-start;
    font-weight: bold;
  }

  &__right {
    text-align: left;
    align-self: flex-end;
  }
}
</style>

<script>
import { Text } from '@/components/atomic';

export default {
  props: {
    values: Array,
  },
  components: {
    Text,
  },
};
</script>
