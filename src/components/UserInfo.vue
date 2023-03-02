<template>
	<section>
		<base-card>
			<template v-slot:header>
				<h3>{{ fullName }}这是userinfo的header插槽内容</h3>
				<base-badge
					:type="role"
					:caption="role.toUpperCase()"
				></base-badge>
			</template>

			<template v-slot:default>
				<p>{{ infoText }}这是userinfo的default插槽内容</p>
			</template>
		</base-card>
	</section>
</template>

<script>
export default {
	props: ["fullName", "infoText", "role"]
};
</script>
<!-- <style scoped>
/* section header {
	display: flex;
	justify-content: space-between;
	align-items: center;
} */
/* 这里的样式会影响到整个的template，但是不能影响到通过slot送入basecard的那一部分template */
/* section {
	margin: 2rem auto;
	max-width: 30rem;
	border-radius: 12px;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
	padding: 1rem;
} */
</style> -->
