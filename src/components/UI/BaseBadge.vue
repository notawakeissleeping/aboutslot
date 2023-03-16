<template>
	<span class="badge" :class="classes"
		>{{ caption }}这是badge子组件，在这个框里被运用了</span
	>
</template>

<script>
export default {
	props: ["type", "caption"], //badge是badgelist的父组件，props给子组件传值
	// 	computed用来监控自己定义的变量，该变量不在data里面声明，直接在computed里面定义.
	// 然后就可以在页面上进行双向数据绑定展示出结果或者用作其他处理；
	// computed比较适合对多个变量或者对象进行处理后返回一个结果值，也就是数多个变量中的某一个值发生了变化则我们监控的这个值也就会发生变化，
	// 举例：总金额=价格*数量
	// ————————————————
	// 版权声明：本文为CSDN博主「zlting~」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
	// 原文链接：https://blog.csdn.net/sunshineTing2/article/details/105711990
	computed: {
		classes() {
			return {
				"badge--admin": this.type === "admin",
				"badge--author": this.type === "author"
			};
		}
	}
};
</script>

<style scoped>
.badge {
	display: inline-block;
	padding: 0.5rem 1rem;
	border-radius: 30px;
	background-color: #ccc;
	color: #2e2e2e;
}

.badge--admin {
	background-color: #810036;
	color: white;
}

.badge--author {
	background-color: #002c8a;
	color: white;
}
</style>
