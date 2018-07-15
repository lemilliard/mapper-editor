<template>
  <el-header>
	<el-menu
		:default-active="activeIndex"
		mode="horizontal"
		text-color="#fff"
		background-color="#545c64"
		active-text-color="#ffd04b">
	  <template v-for="(menu, index) in menus">
		<me-sub-menu v-if="menu.submenus" :menu="menu" :index="index"></me-sub-menu>
		<me-item v-else :menu="menu" :index="index"></me-item>
	  </template>
	</el-menu>
  </el-header>
</template>

<script>
import { mapActions } from 'vuex';
import MeSubMenu from './item/SubMenu';
import MeItem from './item/Item';

export default {
  name: 'MeMenu',
  components: { MeSubMenu, MeItem },
  data() {
    return {
      activeIndex: '1',
      menus: [
        {
          text: 'Fichier',
          submenus: [
            { text: 'Nouveau', action: this.newFile },
            { text: 'Ouvrir' },
            { text: 'Enregistrer' },
            { text: 'Enregistrer sous...' },
            { text: 'Fermer' },
          ],
        },
        { text: 'Annuler' },
        { text: 'Rétablir' },
      ],
    };
  },
  methods: {
    ...mapActions({
      newFile: 'newFile',
    }),
  },
};
</script>

<style scoped>
  .el-header {
	background-color: #545c64
  }
</style>