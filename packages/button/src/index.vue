<template>
  <button
    class="x-button"
    type="button"
    :class="classes"
    @click="onClick"
    :style="style"
  >
    <template v-if="label">
      {{ label }}
    </template>

    <template v-else>
      <slot></slot>
    </template>
  </button>
</template>

<script>
export default {
  name: "ad-button",

  props: {
    label: {
      type: String,
      required: false,
    },
    primary: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: "medium",
      validator: function (value) {
        return ["small", "medium", "large"].indexOf(value) !== -1;
      },
    },
    backgroundColor: {
      type: String,
    },
  },

  computed: {
    classes() {
      return {
        "ad-button": true,
        "ad-button--primary": this.primary,
        "ad-button--secondary": !this.primary,
        [`ad-button--${this.size}`]: true,
      };
    },
    style() {
      return {
        backgroundColor: this.backgroundColor,
      };
    },
  },

  methods: {
    onClick() {
      this.$emit("onClick");
    },
  },
};
</script>

<style scoped lang="less">
@import "./index.less";
</style>
