<template>
	<div class="root">
		<div style="height: 64px;line-height: 64px;background: #002142;">
		  <img src="../assets/logo.png" style="width: 209px;margin-left: 16px;"/>
		</div>
		<!-- <div style="width: 30px;height: 30px;font-size: large;text-align: center;" @click="sidebarMinimize">&#9776;</div> -->
		<div class="sidebar">
			<nav class="sidebar-nav">
				<sidebar-item :routes='siderbar_routers.children'></sidebar-item>
			</nav>
		</div>
	</div>
</template>
<script>
	import Vue from 'vue';
	import iView from 'iview';
	Vue.use(iView);
	import SidebarItem from './SidebarItem';
	// import { mapGetters } from 'vuex';
	export default {
		name: 'sidebar',
		data() {
			return {
				siderbar_routers: {
					children: [{
						"path": "/mainpage/workbench",
						"name": "首页",
						"icon": "../../static/images/home.png",
						"component": {
							"_custom": {
								"type": "component-definition",
								"display": "dashboard <span>(C:\\Users\\yugc\\Documents\\HBuilderProjects\\后台管理平台\\vue-framework-wz\\src\\views\\Dashboard.vue)</span>",
								"tooltip": "Component definition",
								"file": "C:\\Users\\yugc\\Documents\\HBuilderProjects\\后台管理平台\\vue-framework-wz\\src\\views\\Dashboard.vue"
							}
						}
					}, {
						"path": "/mainpage",
						"name": "话务工作台",
						"icon": "../../static/images/Workbench.png",
						"component": {
							"_custom": {
								"type": "component-definition",
								"display": "<i>Unknown Component</i>",
								"tooltip": "Component definition"
							}
						},
						"children": [{
							"path": "robot",
							"name": "常规任务管理",
							"icon": "ios-beer-outline",
							"component": {
								"_custom": {
									"type": "component-definition",
									"display": "buttons <span>(C:\\Users\\yugc\\Documents\\HBuilderProjects\\后台管理平台\\vue-framework-wz\\src\\views\\components\\Buttons.vue)</span>",
									"tooltip": "Component definition",
									"file": "C:\\Users\\yugc\\Documents\\HBuilderProjects\\后台管理平台\\vue-framework-wz\\src\\views\\components\\Buttons.vue"
								}
							}
						},{
							"path": "alert",
							"name": "即时任务管理",
							"icon": "alert",
							"component": {
								"_custom": {
									"type": "component-definition",
									"display": "Alert",
									"tooltip": "Component definition",
									"file": "C:\\Users\\yugc\\Documents\\HBuilderProjects\\后台管理平台\\vue-framework-wz\\src\\views\\components\\Alert.vue"
								}
							}
						}, {
							"path": "form",
							"name": "实时监控",
							"icon": "ios-list-outline",
							"component": {
								"_custom": {
									"type": "component-definition",
									"display": "Form",
									"tooltip": "Component definition",
									"file": "C:\\Users\\yugc\\Documents\\HBuilderProjects\\后台管理平台\\vue-framework-wz\\src\\views\\components\\Form.vue"
								}
							}
						}, {
							"path": "modal",
							"name": "外呼时间表",
							"icon": "ios-chatbubble-outline",
							"component": {
								"_custom": {
									"type": "component-definition",
									"display": "Modal",
									"tooltip": "Component definition",
									"file": "C:\\Users\\yugc\\Documents\\HBuilderProjects\\后台管理平台\\vue-framework-wz\\src\\views\\components\\Modal.vue"
								}
							}
						}]
					}, {
						"path": "/charts",
						"name": "线索管理",
						"redirect": "/charts/shopchart",
						"icon": "../../static/images/clue.png",
						"component": {
							"_custom": {
								"type": "component-definition",
								"display": "<i>Unknown Component</i>",
								"tooltip": "Component definition"
							}
						},
						"children": [{
							"path": "shopchart",
							"name": "线索池",
							"icon": "../../static/images/operate.png",
							"component": {
								"_custom": {
									"type": "component-definition",
									"display": "ShopChart",
									"tooltip": "Component definition",
									"file": "C:\\Users\\yugc\\Documents\\HBuilderProjects\\后台管理平台\\vue-framework-wz\\src\\views\\charts\\ShopChart.vue"
								}
							}
						}]
					}, {
						"path": "/table",
						"name": "运营配置",
						"icon": "../../static/images/operate.png",
						"component": {
							"_custom": {
								"type": "component-definition",
								"display": "buttons <span>(C:\\Users\\yugc\\Documents\\HBuilderProjects\\后台管理平台\\vue-framework-wz\\src\\views\\Table.vue)</span>",
								"tooltip": "Component definition",
								"file": "C:\\Users\\yugc\\Documents\\HBuilderProjects\\后台管理平台\\vue-framework-wz\\src\\views\\Table.vue"
							}
						},
						"children": [{
							"path": "shopchart",
							"name": "话术策略配置",
							"icon": "../../static/images/operate.png",
							"component": {
								"_custom": {
									"type": "component-definition",
									"display": "ShopChart",
									"tooltip": "Component definition",
									"file": "C:\\Users\\yugc\\Documents\\HBuilderProjects\\后台管理平台\\vue-framework-wz\\src\\views\\charts\\ShopChart.vue"
								}
							}
						},
						{
							"path": "shopchart",
							"name": "语料管理",
							"icon": "../../static/images/operate.png",
							"component": {
								"_custom": {
									"type": "component-definition",
									"display": "ShopChart",
									"tooltip": "Component definition",
									"file": "C:\\Users\\yugc\\Documents\\HBuilderProjects\\后台管理平台\\vue-framework-wz\\src\\views\\charts\\ShopChart.vue"
								}
							}
						},{
							"path": "shopchart",
							"name": "质检设置",
							"icon": "../../static/images/operate.png",
							"component": {
								"_custom": {
									"type": "component-definition",
									"display": "ShopChart",
									"tooltip": "Component definition",
									"file": "C:\\Users\\yugc\\Documents\\HBuilderProjects\\后台管理平台\\vue-framework-wz\\src\\views\\charts\\ShopChart.vue"
								}
							}
						}
						],
						"meta": {
							"role": ["admin"]
						}
					}, {
						"path": "/jsontree",
						"name": "系统配置",
						"icon": "../../static/images/os.png",
						"component": {
							"_custom": {
								"type": "component-definition",
								"display": "buttons <span>(C:\\Users\\yugc\\Documents\\HBuilderProjects\\后台管理平台\\vue-framework-wz\\src\\views\\JsonTree.vue)</span>",
								"tooltip": "Component definition",
								"file": "C:\\Users\\yugc\\Documents\\HBuilderProjects\\后台管理平台\\vue-framework-wz\\src\\views\\JsonTree.vue"
							}
						},
						"children":[{
							"path": "shopchart",
							"name": "权限管理",
							"icon": "../../static/images/operate.png",
							"component": {
								"_custom": {
									"type": "component-definition",
									"display": "ShopChart",
									"tooltip": "Component definition",
									"file": "C:\\Users\\yugc\\Documents\\HBuilderProjects\\后台管理平台\\vue-framework-wz\\src\\views\\charts\\ShopChart.vue"
								}
							}
						}],
					}, {
						"path": "/mainpage",
						"name": "数据统计",
						"icon": "../../static/images/dataStatistics.png",
						"component": {
							"_custom": {
								"type": "component-definition",
								"display": "TableDetail",
								"tooltip": "Component definition",
								"file": "C:\\Users\\yugc\\Documents\\HBuilderProjects\\后台管理平台\\vue-framework-wz\\src\\views\\TableDetail.vue"
							}
						},
						"children":[{
							"path": "datachart",
							"name": "线索数据",
							"icon": "../../static/images/operate.png",
							"component": {
								"_custom": {
									"type": "component-definition",
									"display": "ShopChart",
									"tooltip": "Component definition",
									"file": "C:\\Users\\yugc\\Documents\\HBuilderProjects\\后台管理平台\\vue-framework-wz\\src\\views\\charts\\ShopChart.vue"
								}
							}
						},{
							"path": "music",
							"name": "用户分析",
							"icon": "../../static/images/operate.png",
							"component": {
								"_custom": {
									"type": "component-definition",
									"display": "ShopChart",
									"tooltip": "Component definition",
									"file": "C:\\Users\\yugc\\Documents\\HBuilderProjects\\后台管理平台\\vue-framework-wz\\src\\views\\charts\\ShopChart.vue"
								}
							}
						},{
							"path": "shopchart",
							"name": "员工业绩",
							"icon": "../../static/images/operate.png",
							"component": {
								"_custom": {
									"type": "component-definition",
									"display": "ShopChart",
									"tooltip": "Component definition",
									"file": "C:\\Users\\yugc\\Documents\\HBuilderProjects\\后台管理平台\\vue-framework-wz\\src\\views\\charts\\ShopChart.vue"
								}
							}
						}]
					}]
				}
			}
		},
		components: {
			SidebarItem
		},
		methods: {
			handleClick :function(e) {
				e.preventDefault()
				e.target.parentElement.classList.toggle('open')
			},
			sidebarMinimize: function(e) {
			  //e.preventDefault()
			
			  document.body.classList.toggle('sidebar-minimized');
			},
			mobileSidebarToggle:function(e) {
			  //e.preventDefault()
			  document.body.classList.toggle('sidebar-mobile-show')
			},
		},
		created () {
			//this.sidebarMinimize();
			//this.mobileSidebarToggle();
		}
	}
</script>

<style lang="css">
	@import "../../static/css/style.css";
	@import 'iview/dist/styles/iview.css';
	.nav-link {
	 cursor: pointer;
	}
	.sidebar .nav {
	  width: 242px !important;
	}
	.sidebar .sidebar-nav{
	  width: 242px !important;
	}
	.sidebar .nav .nav-item .nav-link:hover{
	  background: #008FFF !important;
	}
	.nav-link>img{
	  height: 13px;
	  margin-right: 11.8px;
	  margin-left: 9px;
	}
	.sidebar .sidebar-nav{
      overflow-y: hidden !important;
	  overflow-x: hidden !important;
	}
	.sidebar .nav .nav-item .nav-link{
	  font-weight: 100 !important;
	  height: 40px;
	  line-height: 25px;
	}
	.sidebar{
	  background:  #00152B !important;
	}
	.nav-dropdown-items{
	  background: #000C18 !important;
	}
	.router-link-exact-active .router-link-active{
	  color: white !important; 
	  display: none !important;
	}
</style>
<style scoped>
  .nav-item .nav-dropdown .open>a{
    display: none !important;
  }
  /deep/ .nav-link .router-link-exact-active .router-link-active{
    color: white !important; 
  }
</style>
