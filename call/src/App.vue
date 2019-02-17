<template>
  <div id="app" class="el-container">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
	body,
	html {
		/* min-width: 1300px; */
		width: 100%;
		height: 100%
	}
	*{padding: 0;margin: 0;}
	#app{
		position: relative;
	}
</style>
