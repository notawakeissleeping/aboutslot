<template>
  <div>
    <!-- Vue会自动将TheHeader翻译成带破折号的样式 <the-header></the-header> -->
    <!-- 在vue中，两种风格的作用都是相同的，可以任意选择一种 <TheHeader /> -->
    <TheHeader />
    <!-- <badge-list></badge-list>
    <user-info
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></user-info>
    <course-goals>
      <template #default="slotProps">
        <h2>{{ slotProps.item }}</h2>
        <p>{{ slotProps["anotherprop"] }}</p>
      </template>
    </course-goals> 在p114集被注释掉 -->
    <button @click="setSelectComponent('active-goals')">ActiveGoals</button>
    <button @click="setSelectComponent('manage-goals')">ManageGoals</button>
    <!-- <active-goals v-if="selectComponent === 'active-goals'"></active-goals>
    <manage-goals v-if="selectComponent === 'manage-goals'"></manage-goals> 在有很多个组件的情况下，重复使用v-if会显得很繁琐，所以我们使用另外的方法，也是p114的主题————动态组件,如下所示-->
    <keep-alive>
      <component :is="selectComponent"></component>
    </keep-alive>
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
// import BadgeList from "./components/BadgeList.vue";
// import UserInfo from "./components/UserInfo.vue";
// import CourseGoals from "./components/CourseGoals.vue";
import ActiveGoals from "./components/ActiveGoals.vue";
import ManageGoals from "./components/ManageGoals.vue";
export default {
  components: {
    //"the-header": TheHeader,
    //TheHeader,也可以这样写，和下面相同
    TheHeader: TheHeader, //注意是在这种写法的情况下，才有两种应用组件的写法
    // BadgeList,
    // UserInfo,
    // CourseGoals,
    ActiveGoals,
    ManageGoals,
  }, //在这个component里注册的组件，只能在这个文件中使用
  data() {
    return {
      selectComponent: "active-goals",
      activeUser: {
        name: "Maximilian Schwarzmüller",
        description: "Site owner and admin",
        role: "admin",
      },
    };
  },
  methods: {
    setSelectComponent(cmp) {
      this.selectComponent = cmp;
      //console.log("click");
    },
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
