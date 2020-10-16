<style lang="scss">
.el-header {
  background-color: #b3c0d1;
  color: #333;
}

.el-aside {
  color: #333;
}
</style>

<template>
  <el-container style="height: 500px border: 1px solid #eee">
    <el-header style="text-align: right font-size: 12px">
      <el-button type="success" @click="addData">新增</el-button>
      <el-button type="danger" @click="showMsg">错误信息</el-button>
      <el-button type="warning" @click="showLoading">显示Loading</el-button>
    </el-header>

    <el-main>
      <el-table :data="tableData" highlight-current-row>
        <el-table-column prop="name" label="活动名称" width="200"> </el-table-column>
        <el-table-column prop="type" label="活动性质" width="140"> </el-table-column>
        <el-table-column prop="tel" label="联系电话" width="150"> </el-table-column>
        <el-table-column prop="email" label="电子邮箱" width="150"> </el-table-column>
        <el-table-column prop="desc" label="活动形式"> </el-table-column>
      </el-table>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: 'Table',
  data() {
    const tableData = []
    // eslint-disable-next-line no-plusplus
    for (let i = 1; i < 9; i++) {
      tableData.push({
        id: i,
        name: `活动名称${i}`,
        type: i % 2 === 0 ? '线下主题活动' : '单纯品牌曝光',
        tel: `151123${i}432${i}`,
        email: `151*${i}@aa.com`,
        desc: `活动形式${i}`
      })
    }
    return {
      tableData
    }
  },
  methods: {
    addData() {
      this.$go('/form')
    },
    showMsg() {
      this.$store.dispatch('showException', {
        msg: '错误提示',
        details: '详细错误信息'
      })
    },
    showLoading() {
      this.$store.dispatch('showLoading')
      setTimeout(() => {
        this.$store.dispatch('hideLoading')
      }, 2000)
    }
  },
  activated() {
    console.log('组件激活。。。')
  },
  deactivated() {
    console.log('组件失活。。。')
  }
}
</script>
