<template>
  <el-container>
	<el-aside>
	  <me-left-panel></me-left-panel>
	</el-aside>
	<el-main>
	  <me-edit-name></me-edit-name>
	  <el-tabs
		  type="border-card"
		  editable
		  v-model="tabIndex"
		  @edit="handleTabsEdit"
		  @tab-click="handleClick">
		<el-tab-pane
			v-for="(file, index) in files"
			:key="index"
			:name="file.id"
			:label="file.name">
		  <me-tab :file="file"></me-tab>
		</el-tab-pane>
	  </el-tabs>
	</el-main>
  </el-container>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import MeLeftPanel from './left-panel/LeftPanel';
import MeTab from './tab/Tab';
import MeEditName from './edit-name/EditName';

export default {
  name: 'MeEditor',
  components: { MeLeftPanel, MeTab, MeEditName },
  data() {
    return {
      lastClick: 0,
      lastClickId: -1,
    };
  },
  computed: {
    ...mapState({
      active: state => state.Files.active,
      files: state => state.Files.files,
    }),
    tabIndex: {
      get() {
        if (parseInt(this.active, 10) === 0) {
          return '0';
        }
        return this.active;
      },
      set(newValue) {
        this.select(newValue);
      },
    },
  },
  created() {
    if (this.files.length === 0) {
      this.newFile();
    }
  },
  methods: {
    ...mapActions({
      select: 'select',
      newFile: 'newFile',
      closeFile: 'closeFile',
      switchEditingName: 'switchEditingName',
    }),
    handleTabsEdit(targetName, action) {
      if (action === 'add') {
        this.newFile();
      }
      if (action === 'remove') {
        this.closeFile(targetName);
      }
    },
    handleClick(tab) {
      const id = tab.name;
      const diff = Date.now() - this.lastClick;
      if (this.lastClickId === id && diff < 1000) {
        this.switchEditingName();
      } else {
        this.lastClick = Date.now();
        this.lastClickId = id;
      }
    },
  },
};
</script>

<style scoped>
  main {
	padding: 0;
  }
</style>