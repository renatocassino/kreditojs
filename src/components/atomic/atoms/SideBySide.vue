<template>
  <div class="wrapper">
    <div class="centered" v-for="[ left, right ] in values" v-bind:key="left">
      <div class="centered__left">{{left}}</div>
      <div class="centered__right" v-if="typeof right === 'string'">{{right}}</div>
      <div class="centered__right" v-if="Array.isArray(right)">
        <div v-for="rightItem in right" v-bind:key="rightItem">
          {{rightItem}}
        </div>
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
    font-weight: 600;
    align-self: flex-start;
  }

  &__right {
    text-align: left;
    align-self: flex-end;
  }
}
</style>

<script>
export default {
  props: {
    values: Array,
  },
};
</script>
