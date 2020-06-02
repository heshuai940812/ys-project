<template>
  <div class="hello">
    <BackGround></BackGround>
    <Header></Header>
    <LeftMenu></LeftMenu>
    <Content></Content>
  </div>
</template>

<script>
import LeftMenu from '@/views/leftMenu/leftMenu'
import BackGround from '@/views/background'
import Content from '@/views/content/content'
import Header from '@/views/content/header'
export default {
  name: 'helloworld',
  components: {
    LeftMenu,
    BackGround,
    Content,
    Header
  },
  data () {
    return {}
  }
}
</script>

<style>
</style>
