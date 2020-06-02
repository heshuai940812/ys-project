<template>
  <div class="waneditorContent">
    <BackGround></BackGround>
    <h2 class="editTitle">编辑内容</h2>
    <div class="custom-tree-container">
      <div class="block">
        <el-tree
          :data="data"
          node-key="id"
          show-checkbox
          default-expand-all
          :expand-on-click-node="false"
          @check-change="handleCheckChange"
        >
          <span class="custom-tree-node" slot-scope="{ node, data }">
            <span>{{ node.label }}</span>
            <span>
              <el-button type="text" size="mini" @click="() => append(data)">添加</el-button>
              <el-button type="text" size="mini" @click="() => editLeftVal(data)">编辑</el-button>
              <el-button type="text" size="mini" @click="() => remove(node, data)">删除</el-button>
            </span>
          </span>
        </el-tree>
      </div>
      <el-dialog
        title="修改导航信息"
        :visible.sync="dialogVisible"
        width="30%"
        :before-close="handleClose"
      >
        <div class="demo-input-suffix">
          修改名称：
          <el-input v-model="leftIptVal" :style="inputWidth" clearable placeholder="请输入内容"></el-input>
        </div>
        <div class="demo-input-suffix">
          显示方式：
          <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
      </el-dialog>
    </div>
    <div id="editor" class="editor"></div>
    <div>
      <router-link :to="{path:'helloworld'}">
        <el-button type="primary">返回</el-button>
      </router-link>

      <el-button type="success" @click="saveEditInfo()">保存</el-button>
    </div>
  </div>
</template>

<style scoped>
.editTitle {
  text-align: center;
  margin: 20px;
  color: #fff;
}
.editor {
  width: 800px;
  height: 500px;
  margin-left: 450px;
  margin-top: 40px;
  /* float: right; */
  /* background-color: rgba(255, 255, 255, 0.5); */
}
.editor .w-e-text-container {
  background-color: #fff;
}

.waneditorContent {
  width: 95%;
  padding-top: 1px;
  margin: 20px auto;
  min-height: 666px;
  max-height: 750px;
  overflow: auto;
  background-color: rgba(255, 255, 255, 0.5);
}
.custom-tree-container {
  width: 410px;
  height: 500px;
  background-color: rgba(255, 255, 255, 0.3);
  float: left;
  overflow: auto;
}
.custom-tree-node {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  padding-right: 8px;
}
.demo-input-suffix {
  margin-bottom: 12px;
}
</style>

<script data-main="./main.js" src="//cdn.bootcss.com/require.js/2.3.3/require.js" ></script>
<script>
import BackGround from '@/views/background'
let id = 1000
export default {
  name: 'wangeditor',
  components: {
    BackGround
  },
  data() {
    const data = [
      {
        id: 1,
        label: '健身',
        icon: 'el-icon-bicycle',
        children: [
          {
            id: 4,
            label: '有效锻炼',
            type: 'itemMenu',
            children: [
              {
                id: 9,
                label: '正确减脂'
              },
              {
                id: 10,
                label: '正确增肌'
              }
            ]
          },
          {
            id: 11,
            label: '肌肉的好处',
            type: 'itemMenu',
            children: [
              {
                id: 12,
                label: '肌肉的好处'
              }
            ]
          },
          {
            id: '13',
            label: '科学塑形',
            type: 'subMenu',
            listName: [
              {
                id: '14',
                label: '主要肌肉块塑形'
              },
              {
                id: '15',
                label: '次要塑形肌肉块'
              }
            ]
          }
        ]
      },
      {
        id: 2,
        label: '养生',
        icon: 'el-icon-tableware',
        children: [
          {
            id: 5,
            label: '肉类食物',
            type: 'itemMenu',
            children: [
              {
                id: '16',
                label: '肉类食物的好处'
              },
              {
                id: '17',
                label: '肉类食物的不足'
              }
            ]
          }
        ]
      }
    ]
    return {
      data: JSON.parse(JSON.stringify(data)),
      data: JSON.parse(JSON.stringify(data)),
      leftIptVal: '',
      dialogVisible: false,
      inputWidth: {
        width: '220px'
      },
      restaurants: [],
      state: '',
      timeout: null,
      options: [{
          value: 'subMenu',
          label: '可折叠'
        }, {
          value: 'itemMenu',
          label: '不可折叠'
        }],
        value: ''
    }
  },
  mounted: function() {
    let E = require('wangeditor')
    // 创建编辑器
    let editor = new E('#editor')
    editor.customConfig.menus = [
      'head', // 标题
      'bold', // 粗体
      'fontSize', // 字号
      'fontName', // 字体
      'italic', // 斜体
      'underline', // 下划线
      'strikeThrough', // 删除线
      'foreColor', // 文字颜色
      'backColor', // 背景颜色
      'link', // 插入链接
      'list', // 列表
      'justify', // 对齐方式
      'quote', // 引用
      'image', // 插入图片
      'table', // 表格
      'code', // 插入代码
      'undo', // 撤销
      'redo' // 重复
    ]

    editor.create()
    this.restaurants = this.loadAll()
  },
  methods: {
    backHome() {
      console.log(this)
    },
    saveEditInfo() {
      this.$router.go(-1)
    },
    append(data) {
      const newChild = { id: id++, label: '新增节点', children: [] }
      if (!data.children) {
        this.$set(data, 'children', [])
      }
      data.children.push(newChild)
    },
    remove(node, data) {
      const parent = node.parent
      const children = parent.data.children || parent.data
      const index = children.findIndex(d => d.id === data.id)
      children.splice(index, 1)
    },
    renderContent(h, { node, data, store }) {
      return (
        <span class="custom-tree-node">
          <span>{node.label}</span>
          <span>
            <el-button
              size="mini"
              type="text"
              on-click={() => this.append(data)}
            >
              Append
            </el-button>
            <el-button
              size="mini"
              type="text"
              on-click={() => this.remove(node, data)}
            >
              Delete
            </el-button>
          </span>
        </span>
      )
    },
    editLeftVal(data) {
      console.log(data)
      this.dialogVisible = true
    },
    querySearchAsync(queryString, cb) {
      var restaurants = this.restaurants
      var results = queryString
        ? restaurants.filter(this.createStateFilter(queryString))
        : restaurants

      cb(results)
    },
    createStateFilter(queryString) {
      return state => {
        return (
          state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
        )
      }
    },
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
        })
        .catch(_ => {})
    },
    loadAll() {
      return [
        { value: '可折叠', type: 'subMenu' },
        { value: '不可折叠', type: 'itemMenu' }
      ]
    },
    handleSelect(item) {
      console.log(item)
    },
    handleCheckChange(item){
      console.log(item)
    }
  }
}
</script>
