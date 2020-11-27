<template>
    <div>
        <h1>{{id ? '编辑' : '新建'}}分类</h1>
        <el-form label-width="120px" @submit.native.prevent="save">
            <el-form-item label="名称" >
                <el-input v-model="model.name"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary"  native-type="submit">保存</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
export default {
 //可以与编辑时的id共用一个，可以尽可能和路由解耦，不用写一堆this.item.id这种形式 
  props: {
    id: {}
  },
data(){
        return{
            model:{
                //name:'',
            }
        }
    },
    created(){
        this.id && this.fetch()
    },
    methods: {
        async save(){
            console.log("save")
            let res
            if(this.id){
                res = await this.$http.put('categories/${this.id}', this.model)
            }else{
                res = await this.$http.post('categories', this.model)
            }
            
            console.log(res.data)
            // 提交内容后，跳转到/categories/list
            this.$router.push('/categories/list')
            this.$message({
                type: 'success',
                message: '保存成功'
            })
        },
        async fetch(){
            const res = await this.$http.get(`categories/${this.id}`)
            this.model = res.data
        }
    }
    
}
</script>
<style lang="less">
    
</style>