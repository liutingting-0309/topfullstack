<template>
  <div>
    <h1>分类列表</h1>
    <el-table :data="items" style="width: 100%">
      <el-table-column prop="id" label="ID" width="240"> </el-table-column>
      <el-table-column prop="name" label="分类名称"> </el-table-column>
      <el-table-column fixed="right" label="操作" width="180">
        <template slot-scope="scope">
          <el-button type="primary" size="small" @click="$router.push(`/categories/edit/${scope.row.id}`)">查看</el-button>
          <el-button type="warning" size="small" @click="$router.push(`/categories/edit/${scope.row.id}`)">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
 //可以与编辑时的id共用一个，可以尽可能和路由解耦，不用写一堆this.item.id这种形式 
  props: {
    id: {}
  },
  data(){
    return {
      items:[
        {id: 'k22299233032-3-9444344434',
         name:'n你的fsdfsdfsfsdfdf你地'
        },
        {id: 'k93902djdi032302032-29384',
         name:'kdkdkksiierndsdsdfdfsdr faff'
        }
      ]
    }
  },
  methods: {
    // 防止再次调用 
    async fetch(){
      const res = await this.$http.get('categories')
      this.items = res.data
    },

    created(){
      this.fetch()
    }
  }
}
</script>