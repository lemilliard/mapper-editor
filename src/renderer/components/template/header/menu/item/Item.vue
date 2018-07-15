<template>
  <el-menu-item :index="index" @click="execAction">
	{{ menu.text }}
  </el-menu-item>
</template>

<script>
export default {
  name: 'MeItem',
  props: { index: String, menu: Object },
  methods: {
    execAction() {
      if (this.menu.action) {
        this.menu.action();
      }
    },
  },
};
</script>