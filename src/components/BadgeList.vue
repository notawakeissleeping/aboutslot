<template>
	<section>
		<base-card>
			<!-- <template v-slot:header> -->
			<!-- 也可以写作 #header -->
			<!-- <h2>Available Badges</h2> -->
			<template v-slot:header>hello,这一个方框是badgelist </template>
			<!-- 如果在插槽中没有对应的元素就会使用定义的默认值 -->
			<!-- </template> -->
			<template v-slot:default>
				<!-- 第一个框里的两个直边圆角方框按钮 -->
				<ul>
					<li>
						<base-badge type="admin" caption="ADMIN"></base-badge>
						<!-- 在这父组件里使用子组件badge，并赋参数 -->
					</li>
					<li>
						<base-badge type="author" caption="AUTHOR"></base-badge>
					</li>
				</ul>
			</template>
		</base-card>
		<!-- 在这里使用了base-card就要完全按照其规定好的框架来写，只能少不能多，比如在author和admin这两个矩形圆角框上方的文字，要想添加上就只能使用这个template v-slot:header-->
	</section>
</template>

<style scoped>
/* section {
	margin: 2rem auto;
	max-width: 30rem;
	border-radius: 12px;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
	padding: 1rem;
} */
section h2 {
	margin: 0.5rem 0;
	color: #3a3a3a;
}

ul {
	list-style: none;
	margin: 0;
	padding: 0;
	display: flex;
	flex-direction: row;
}

li {
	margin-right: 1rem;
}
</style>
