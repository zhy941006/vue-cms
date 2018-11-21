<template>
    <div class="newList">
       <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="item in data" :key="item.id">
					<router-link :to="'/home/newInfo/'+item.id">
						<img class="mui-media-object mui-pull-left" :src="'item.img_url'">
						<div class="mui-media-body">
							<span class="mui-span">{{item.title}}</span>
							<p class="mui-ellipsis">
								<span class="mui-pull-left">发表时间:{{item.add_time | dateFormat}}</span>
								<span class="mui-pull-right">点击{{item.click}}次</span>
							</p>
						</div>
					</router-link>
				</li>
			</ul>
    </div>
</template>

<style lang="less">
	.newList{
		.mui-media-body{
			.mui-span{
				font-size: 14px;
			}
			.mui-ellipsis{
					color:#0094ff;
				}
		}
	}
</style>

<script>

 export default{
	 data(){
		 return {
			 data:[],
		 }
	 },
	 created(){
		 this.getNewList();
	 },
	 methods:{
		 getNewList(){
			 this.$http.get("http://www.lovegf.cn:8899/api/getnewslist").then(result=>{
				 if(result.body.status==0){
					 console.log(result.body)
					 this.data=result.body.message
				 }
			 })
		 }
	 }
 }
</script>
