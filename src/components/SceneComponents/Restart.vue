<template>
  <div :class="{
    wrapper: true,
    'wrapper--hidden': isHidden,
  }">
    <button @click="handleReset" class="replay__button">
      <div class="replay__message">Play again?</div>

      <img class="replay__icon" src="@/assets/replay-24px.svg" alt="replay button" />
    </button>
  </div>
</template>

<style lang="scss" scoped>
@import "../../scss/_variables.scss";

.wrapper {
  align-items: center;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-flow: column;
  transition: opacity 2s;
  opacity: 1;
  &--hidden {
    opacity: 0;
  }
}

.replay {
  &__button {
    cursor: pointer;
    background: none;
    border: 2px solid #fff;
    border-bottom: 6px solid #fff;;
    padding: 1rem;
    border-radius: 10px;
    transition: transform 0.2s, border-bottom 0.2s;
    outline: none;

    &:hover {
      border-bottom: 2px solid #fff;
      transform: translateY(4px);
    }

    > img {
      fill: #fff;
      filter: invert(1);
    }
  }

  &__message {
    color: #fff;
    font-size: 20px;
    font-family: $font-primary;
  }

  &__icon {
    width: 40px;
  }
}
</style>

<script>
import { ref } from 'vue';

export default {
  props: {
    restart: Function,
  },
  setup(props) {
    const isHidden = ref(true);

    setTimeout(() => {
      isHidden.value = false;
    }, 2000);

    const handleReset = () => {
      isHidden.value = true;

      setTimeout(() => {
        props.restart();
      }, 3000);
    };

    return {
      isHidden,
      handleReset,
    };
  },
};
</script>
