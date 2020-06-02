<template>
  <h3 class="headTitle">
    自我研究
    <el-tag>科学健身</el-tag>
    <el-tag>食品养生</el-tag>
    <router-link :to="{path:'wangeditor'}">
      <el-button class="editor" type="primary" icon="el-icon-edit" circle></el-button>
    </router-link>
  </h3>
</template>

<style scoped>
.headTitle {
  vertical-align: top;
  text-align: center;
  color: #f6f9fc;
}
.editor {
  float: right;
}
</style>

<script>
export default {
  name: 'header',
  methods: {
    toEditor() {
      this.$router.push({ path: 'wangeditor' })
    }
  }
}
</script>
