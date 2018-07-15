<template>
  <el-container direction="vertical">
	<me-header></me-header>
	<me-body></me-body>
  </el-container>
</template>

<script>
import MeHeader from '@/components/template/header/Header';
import MeBody from '@/components/template/body/Body';

export default {
  name: 'mapper-editor',
  components: {
    MeHeader,
    MeBody,
  },
  data() {
    return {};
  },
};
</script>

<style>
  .el-aside {
	background-color: #D3DCE6;
	color: #333;
	text-align: center;
	line-height: 100%;
  }

  .el-main {
	color: #333;
	text-align: center;
	line-height: 100%;
  }

  html, body, body > .el-container {
	height: 100%;
	padding: 0;
	margin: 0;
  }

  .el-tabs__new-tab {
	margin-right: 10px;
  }
</style>
