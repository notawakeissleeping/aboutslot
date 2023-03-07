<template>
  <div>
    <h2>Manage Goals</h2>
    <input type="text" ref="goal" />
    <!-- 如果在这里输入数据，在没有保存的情况下，切换到active组件，再切换回来就会发现，原来的数据丢失，这是因为，我们在切换组件的过程中，是真真实实的 destroy了这个组件，并且从dom中移除了,  对此的解决方法是：<keep-alive>包裹住component-->
    <button @click="setGoal">set goal</button>
    <Teleport to="#app">
      <!-- 传送到：to中填入的选择器 -->
      <error-alert v-if="inputIsInvalid">
        <h2>Input Is Invalid!</h2>
        <p>Please enter at east a few characters...</p>
        <button @click="comfirmError">Okay</button>
      </error-alert>
    </Teleport>
  </div>
</template>
<script>
import ErrorAlert from "./ErrorAlert.vue";
export default {
  components: {
    ErrorAlert,
  },
  data() {
    return {
      inputIsInvalid: false,
    };
  },
  methods: {
    setGoal() {
      const enteredValue = this.$refs.goal.value;
      if (enteredValue === "") {
        //输入不得为空，否则弹出警告框alert("Input must not be empty");
        this.inputIsInvalid = true;
      }
    },
    comfirmError() {
      this.inputIsInvalid = false;
    },
  },
};
</script>
<!-- vue也有自带的获取DOM的方法，那就是ref。它不仅可以获取DOM元素还可以获取组件。 -->
