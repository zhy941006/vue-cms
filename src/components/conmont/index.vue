<template>
<div class="conment">
    <h3>发表评论</h3>
    <hr>
    <textarea placeholder="请输入您需要发表的信息.最多输入120字" maxlength="120"></textarea>
    <mt-button type="primary" size="large">发表评论</mt-button>
    <div data-v-7b56ddac="" class="cmt-title" v-for="(item,i) in data" :key="i">
        第{{i+1}}楼&nbsp;&nbsp;用户：{{item.user_name}}&nbsp;&nbsp;发表时间：{{item.add_time | dateFormat}}
        <div class="pinglun">
           {{item.content===''?"此用户太懒没有留下足迹":item.content}}
        </div>
      </div>
    <mt-button plain size="large" type="danger">加载更多</mt-button>
</div>
    
</template>

<style lang="less">
    .conment{
        h3{
            font-size: 18px;
            font-weight: 700;
        }
        textarea{
            width: 100%;
            font-size: 14px;
            border-radius: 5px;
            height: 100px;
        }
        .cmt-title{
             margin-top: 10px;
            font-size: 14px;
            background-color: #ccc;
           .pinglun{
               background-color: #fff;
               font-size: 14px;
               line-height: 40px;
           }
        }
    }
</style>

<script>
    export default{
        data(){
            return{
             pageSize:1,
             data:[]
            }
        },
        created(){
            this.getmonmont()
        },
        methods:{
            getmonmont(){
                this.$http.get("http://www.lovegf.cn:8899/api/getcomments/" + this.id + "?pageindex=" + this.pageSize).then(result=>{
                    console.log(result.body)
                   this.data=result.body.message
                })
            }
        },
        props:["id"]
    }
</script>

