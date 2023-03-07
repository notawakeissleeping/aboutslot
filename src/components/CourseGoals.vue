<template>
  <ul>
    <li v-for="goal in goals" :key="goal">
      <slot :item="goal" anotherprop="..."></slot>
      <!-- 这里的anotherprop仅被定义成一个字符串，所以没有用：绑定 -->
      <!-- {{ goal }} -->
    </li>
  </ul>
</template>
<script>
export default {
  data() {
    return {
      goals: ["Finish the course", "Learn Vue"],
    };
  },
};
</script>
