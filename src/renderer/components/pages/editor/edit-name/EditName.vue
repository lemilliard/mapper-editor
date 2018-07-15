<template>
  <el-dialog
	  :visible.sync="display"
	  title="Renommer"
	  width="30%"
	  center>
	<el-form :inline="true">
	  <el-input v-model="editName" placeholder="Nom"></el-input>
	</el-form>
  </el-dialog>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';

export default {
  name: 'MeTab',
  data() {
    return {
      editName: null,
    };
  },
  computed: {
    ...mapState({
      editingName: state => state.Files.editingName,
      active: state => state.Files.active,
    }),
    display: {
      get() {
        return this.editingName;
      },
      set() {
        this.switchEditingName();
      },
    },
  },
  methods: {
    ...mapGetters({
      getCurrentFile: 'getCurrentFile',
    }),
    ...mapActions({
      switchEditingName: 'switchEditingName',
    }),
  },
  watch: {
    display() {
      this.editName = this.getCurrentFile().name;
    },
  },
};
</script>

<style scoped>

</style>