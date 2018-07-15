<template>
  <el-header>
	<el-button-group v-for="(menuGroup, i) in menuGroups" :key="i">
	  <template v-for="(menu, j) in menuGroup">
		<el-dropdown v-if="menu.submenus" @command="handleCommand">
		  <el-button>
			{{menu.text}}
			<i class="el-icon-arrow-down el-icon--right"></i>
		  </el-button>
		  <el-dropdown-menu slot="dropdown">
			<el-dropdown-item v-for="(submenu, k) in menu.submenus" v-if="displayMenu(submenu)" :command="`${i}-${j}-${k}`">
			  {{submenu.text}}
			</el-dropdown-item>
		  </el-dropdown-menu>
		</el-dropdown>
		<template v-else-if="displayMenu(menu)">
		  <el-button v-if="menu.text" @click.stop="handleCommand(`${i}-${j}`)">
			{{menu.text}}
		  </el-button>
		  <el-button v-if="menu.icon" :icon="menu.icon" @click.stop="handleCommand(`${i}-${j}`)"></el-button>
		</template>
	  </template>
	</el-button-group>
	<!--<el-menu-->
	<!--:default-active="activeIndex"-->
	<!--mode="horizontal"-->
	<!--text-color="#fff"-->
	<!--background-color="#545c64"-->
	<!--active-text-color="#ffd04b">-->
	<!--<template v-for="(menu, index) in menus">-->
	<!--<me-sub-menu v-if="menu.submenus" :menu="menu" :index="index"></me-sub-menu>-->
	<!--<me-item v-else :menu="menu" :index="index"></me-item>-->
	<!--</template>-->
	<!--</el-menu>-->
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
      menuGroups: [
        [
          { icon: 'el-icon-menu', pages: ['Editor'], action: this.openHome },
          { icon: 'el-icon-edit', pages: ['Home'], action: this.openEditor },
        ],
        [
          {
            text: 'Fichier',
            submenus: [
              { text: 'Nouveau', action: this.newFile },
              { text: 'Ouvrir' },
              { text: 'Enregistrer', pages: ['Editor'] },
              { text: 'Enregistrer sous...', pages: ['Editor'] },
              { text: 'Fermer', pages: ['Editor'], action: this.closeFile },
            ],
          },
        ],
        [
          { text: 'Annuler', pages: ['Editor'] },
          { text: 'Rétablir', pages: ['Editor'] },
        ],
      ],
    };
  },
  methods: {
    ...mapActions({
      newFile: 'newFile',
      closeFile: 'closeFile',
    }),
    displayMenu(menu) {
      const currentPage = this.$route.name;
      return (!menu.pages) || (menu.pages && menu.pages.includes(currentPage));
    },
    handleCommand(command) {
      this.openEditor();
      const splitIndex = command.split('-');
      if (splitIndex.length > 0) {
        const groupIndex = splitIndex[0];
        if (this.menuGroups[groupIndex] && splitIndex.length > 1) {
          const menuIndex = splitIndex[1];
          if (this.menuGroups[groupIndex][menuIndex]) {
            let action;
            if (splitIndex.length > 2) {
              const submenuIndex = splitIndex[2];
              if (this.menuGroups[groupIndex][menuIndex].submenus
                && this.menuGroups[groupIndex][menuIndex].submenus[submenuIndex]) {
                action = this.menuGroups[groupIndex][menuIndex].submenus[submenuIndex].action;
              }
            } else {
              action = this.menuGroups[groupIndex][menuIndex].action;
            }
            if (action) {
              action();
            }
          }
        }
      }
    },
    openHome() {
      if (this.$route.name !== 'Home') {
        this.$router.push('Home');
      }
    },
    openEditor() {
      if (this.$route.name !== 'Editor') {
        this.$router.push('Editor');
      }
    },
  },
};
</script>

<style scoped>
  .el-header {
	background-color: #545c64;
	padding-top: 7px;
  }

  .el-button-group {
	padding-right: 10px;
  }

  .el-button-group > :only-child > :first-child {
	border-radius: 4px;
  }

  .el-button-group, .el-button {
	float: left;
  }
</style>