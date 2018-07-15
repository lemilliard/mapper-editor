<template>
  <el-header>
    <me-menu></me-menu>
  </el-header>
</template>

<script>
import MeMenu from './menu/Menu';

export default {
  name: 'MeHeader',
  components: { MeMenu },
  data() {
    return {};
  },
};
</script>

<style scoped>
  .el-header {
	background-color: #545c64
  }
</style>