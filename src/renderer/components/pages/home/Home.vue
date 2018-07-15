<template>
  <el-main>
	<el-row :gutter="20">
	  <me-file-item
		  v-for="(file, index) in files"
		  :key="index"
		  :file="file">
	  </me-file-item>
	</el-row>
  </el-main>
</template>

<script>
import { mapState } from 'vuex';
import MeFileItem from './FileItem';

export default {
  name: 'MeHome',
  components: { MeFileItem },
  data() {
    return {};
  },
  computed: {
    ...mapState({
      active: state => state.Files.active,
      files: state => state.Files.files,
    }),
  },
};
</script>
