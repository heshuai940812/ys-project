<template>
  <div class="leftMenu">
    <el-col :span="16">
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        :default-openeds="openeds"
      >
        <el-submenu :index="menu.index" v-for=" menu in menuList" :key="menu.name">
          <template slot="title">
            <i :class="menu.icon"></i>
            <span>{{menu.name}}</span>
          </template>
          <div v-for=" list in menu.childList" :key="list.name">
            <el-menu-item-group v-if="list.type == 'itemMenu'">
              <template slot="title">{{list.title}}</template>
              <el-menu-item
                :index="names.name"
                v-for="names in list.listName"
                :key="names.name"
                @click="handleClick(names.name)"
              >{{names.name}}</el-menu-item>
            </el-menu-item-group>
            <el-submenu v-else :index="list.title">
              <template slot="title">{{list.title}}</template>
              <el-menu-item
                :index="names.name"
                v-for="names in list.listName"
                :key="names.name"
                @click="handleClick(names.name)"
              >{{names.name}}</el-menu-item>
            </el-submenu>
          </div>
        </el-submenu>
      </el-menu>
    </el-col>
  </div>
</template>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 210px;
  min-height: 400px;
  max-height: 665px;
  overflow-x: auto;
}
.el-menu {
  border-right: none;
}
.leftMenu {
  width: 200px;
  height: 100%;
  float: left;
  background-color: rgba(255, 255, 255, 0.5);
}
</style>

<script>
export default {
  data() {
    return {
      isCollapse: true,
      openeds: ['1'],
      menuList: [
        {
          name: '健身',
          icon: 'el-icon-bicycle',
          index: '1',
          menu: '',
          childList: [
            {
              title: '有效锻炼',
              type: 'itemMenu',
              listName: [
                {
                  name: '正确减脂'
                },
                {
                  name: '正确增肌'
                }
              ]
            },
            {
              title: '肌肉的好处',
              type: 'itemMenu',
              listName: [
                {
                  name: '肌肉的好处'
                }
              ]
            },
            {
              title: '科学塑形',
              type: 'subMenu',
              listName: [
                {
                  name: '主要肌肉块塑形'
                },
                {
                  name: '次要塑形肌肉块'
                }
              ]
            },
            {
              title: '科学塑形2',
              type: 'subMenu',
              listName: [
                {
                  name: '主要肌肉块塑形2'
                },
                {
                  name: '次要塑形肌肉块2'
                }
              ]
            }
          ]
        },
        {
          name: '养生',
          icon: 'el-icon-tableware',
          index: '2',
          childList: [
            {
              title: '肉类食物',
              type: 'itemMenu',
              listName: [
                {
                  name: '肉类食物的好处'
                },
                {
                  name: '肉类食物的不足'
                }
              ]
            }
          ]
        }
      ]
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      // console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      // console.log(key, keyPath)
    },
    handleClick(key) {
      console.log(key)
    }
  }
}
</script>
