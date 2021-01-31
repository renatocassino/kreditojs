<template>
  <div :class="{
    'list-columns__wrapper': true,
    [`list-columns__wrapper--columns-${columns}`]: columns >=2 && columns < 5,
  }">
    <div class="list-columns__column" v-for="line in lines" v-bind:key="line">
      <Text>
        {{line}}
      </Text>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.list-columns{
  &__wrapper {
    display: flex;
    flex-basis: 50%;
    justify-content: space-evenly;
    flex-wrap: wrap;

    &--columns-2 {
      .list-columns__column {
        flex-basis: 50%;
      }
    }

    &--columns-3 {
      .list-columns__column {
        flex-basis: 33.333333%;
      }
    }

    &--columns-4 {
      .list-columns__column {
        flex-basis: 25%;
      }
    }
  }

  &__column {
    flex-basis: 50%;
    display: flex;
    justify-content: center;
  }
}
</style>

<script>
import { Text } from '@/components/atomic';

export default {
  props: {
    lines: Array,
    columns: {
      type: Number,
      default: 2,
    },
  },
  components: {
    Text,
  },
};
</script>
