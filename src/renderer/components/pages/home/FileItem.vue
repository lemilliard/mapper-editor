<template>
  <el-col :xs="24" :sm="12" :md="8" :lg="6">
	<el-card shadow="hover">
	  <div slot="header">
		<span>{{file.name}}</span>
		<el-button
			style="float: right; padding: 3px 0"
			icon="el-icon-close">
		</el-button>
	  </div>
	</el-card>
  </el-col>
</template>

<script>
export default {
  name: 'MeFileItem',
  props: ['file'],
  data() {
    return {};
  },
};
</script>

<style scoped>
  .el-col {
	margin-bottom: 20px;
  }
</style>