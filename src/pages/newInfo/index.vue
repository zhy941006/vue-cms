<template>
    <div class="newInfo">
        <h4 class="title">{{msg.title}}</h4>
        <p class="subtitle">
            <span class="mui-pull-left">{{msg.add_time |  dateFormat}}</span> 
            <span class="mui-pull-right">点击：{{msg.click}}次</span>
        </p>
        <div v-html="msg.content">

        </div>

        <conmont class="newInfoell" :id="id"></conmont>
    </div>
</template>

<style lang="less">
.newInfo{
    padding:0 5px;
    margin-top: 15px;
    h4{
        color: red;
    }
    .subtitle{
        color:#226aff;
        height: 30px;
        line-height: 30px;
        border-bottom: 1px solid #ccc;
    }
}
</style>


<script>
import conmont from '../../components/conmont'
    export default{
        data(){
            return{
            msg:{},
            id:this.$route.params.id
            }
        },
        created(){
            this.getnewInfo()
        },
        methods:{
            getnewInfo(){
                this.$http.get("http://www.lovegf.cn:8899/api/getnew/"+this.id).then(result=>{
                    if(result.body.status==0){
                        // console.log(result.body)
                       this.msg=result.body.message[0]
                    }
                })
            }
        },
        components:{
            conmont
        }

    }
</script>

