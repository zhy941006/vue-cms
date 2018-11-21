<template>
    <div class="app-container">
      <!-- 网页头部 -->
      <mt-header fixed title="vue-cms"></mt-header>
      <!-- 网页底部 -->
      <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员中心</span>
			</router-link>
			<router-link class="mui-tab-item" to="/shopcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">0</span></span>
				<span class="mui-tab-label">通讯录</span>
			</router-link>
			<router-link class="mui-tab-item" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>

		<transition>
				<router-view></router-view>
		</transition>
    
    </div>
</template>

<script>


</script>

<style lang='less'>
.app-container{
	margin:40px 0 50px 0;
	height: 100%;
	background-color: #fff;
	overflow-x: hidden;
	// background-color: #fff;
	}

.v-enter{
	opacity: 0;
	transform: translateX(100%);
}
.v-leave-to{
 opacity: 0;
 transform: translateX(-100%);
 position: absolute;

}
.v-enter-active,
.v-leave-active{
	transition: all 0.5s ease;
}

</style>
