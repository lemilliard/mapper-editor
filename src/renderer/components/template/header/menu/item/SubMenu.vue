<template>
  <el-submenu :index="index">
	<template slot="title">{{ menu.text }}</template>
	<template v-for="(subMenu, subIndex) in menu.submenus">
	  <me-sub-menu v-if="subMenu.submenus" :menu="subMenu" :index="`${index}-${subIndex}`"></me-sub-menu>
	  <me-item v-else :menu="subMenu" :index="`${index}-${subIndex}`"></me-item>
	</template>
  </el-submenu>
</template>

<script>
import MeItem from './Item';

export default {
  name: 'MeSubMenu',
  components: { MeItem },
  props: { index: String, menu: Object },
  data() {
    return {
      activeIndex: '1',
    };
  },
};
</script>