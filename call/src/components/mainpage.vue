<template>
  <div class="con">
		<!-- <div id="top">
			<div>易车智能外呼</div>
			<div></div>
		</div> -->
		<div style="display: flex;">
		  <div id="treeMenu">
		  	<!-- <el-tree
		  		class="filter-tree"
		  		:data="treeData"
		  		:props="defaultProps"
		  		default-expand-all
		  		:filter-node-method="filterNode"
		  		ref="tree"
		  		@node-click="treeClick"
				:highlight-current="true">
		  	</el-tree> -->
			<sidebar></sidebar>
		  </div>
		  <div id="mainArea">
			<div class="topBar">
		      <div style="text-align: center;cursor: pointer;display: inline-block;margin-left: 20px;" @click="sidebarMinimize">
		        <img src="../../static/images/pullRight.png" style="height: 25px;width: 25px;cursor: pointer;" v-if="!pullNow"/>
		        <img src="../../static/images/pullLeft.png"  style="height: 25px;width: 25px;cursor: pointer;" v-else="pullNow"/>
		      </div>
		      <div class="user" style="display: inline-block;position: absolute;right: 32px;">
		        <span ref="mySpan" style="margin-right: 4px;">{{userInfo}}</span>
		        <img src="../../static/images/Oval@2x.png" style="height: 5px;cursor: pointer;margin-top: -2px;margin-right: 18px;" @click="sign"/>
		        <img src="https://avatars3.githubusercontent.com/u/1915989?s=230&v=4" style="height: 35px;border-radius:50%;margin-top: -4px;"/>
		        <span class="signOut" v-if="signOutbol" @click="signout">退出</span>
		      </div>
			</div>
		  	<router-view/>
		  </div>
		</div>
		<div>
		  
		</div>
	</div>
</template>

<script>
import sidebar from './sidebar';
export default {
  name: 'mainpage',
  data () {
    return {
	  pullNow:true,
	  signOutbol:false,
	  userInfo:'周杰伦',
//       treeData: [{
//         id: 1,
//         label: '登录',
//       	path: '/mainpage/login'
//       }, {
//         id: 2,
//         label: '话务工作台',
//       	path: '/mainpage/workbench',
//         children: [{
//           id: 4,
//           label: '任务管理',
//         	path: '/apple',
//           children: [{
//             id: 9,
//             label: '创建任务',
//         		path: '/ok',
//           }, {
//             id: 10,
//             label: '查看任务详情',
//         		path: '/apple'
//           }]
//           },{
// 				id:5,
// 				label: '我监控的机器人',
// 				path: '/mainpage/robot'
// 			}]
//       },{
//         id: 3,
//         label: '线索管理',
//         children: [{
//           id: 7,
//           label: '线索池'
//         }]
//       },{
//         id: 6,
//         label: '数据统计',
//       	path: '/mainpage/login',
// 				children: [{
// 					id: 11,
// 					label: '线索数据'
// 				},{
// 					id: 12,
// 					label: '用户分析'
// 				},{
// 					id: 13,
// 					label: '员工业绩'
// 				}]
//       }],
//       defaultProps: {
//         children: 'children',
//         label: 'label'
//       }
    }
  },
	methods:{
		setCookie(name,value,iDay){
			var oDate=new Date();
			oDate.setDate(oDate.getDate()+iDay);
			document.cookie=name+'='+value+';expires='+oDate;
		},
		getCookie(name){
			var arr=document.cookie.split('; ');
			for(var i=0;i<arr.length;i++)
			{
			   var arr2=arr[i].split('=');
			   if(arr2[0]==name)
			   {
			   	  return arr2[1];
			   }
			}
			return '';
		},
		removeCookie(name){
			setCookie(name,1,-1);
		},
		signout(){
		  this.$confirm('是否退出?', '提示', {
		            confirmButtonText: '确定',
		            cancelButtonText: '取消',
		            type: 'warning'
		          }).then(() => {
		  			 this.setCookie('user','',14);
		  			 this.setCookie('pas','',14);
					 this.$router.push({path:'/'});
					 //this.$router.push({path: '/mainpage/taskcre'});
		          }).catch(() => { 
		          });
		},
		sign(){
		  this.signOutbol=!this.signOutbol;
		},
		treeClick: function(tPath){
			if(tPath.path){
				this.$router.push(tPath.path);
			}
		},
		filterNode: function(value, data) {
		  if (!value) return true;
		  return data.label.indexOf(value) !== -1;
		},
		sidebarMinimize: function(e) {
		  //e.preventDefault()
		
		  document.body.classList.toggle('sidebar-minimized');
		  document.getElementsByClassName('root')[0].classList.toggle('rootChange');
		  this.pullNow=!this.pullNow;
		  //this.signOutbol=!this.signOutbol;
		}
	},
	components:{sidebar},
	mounted(){
		this.$bus.$on('userIn',(res)=>{
		  if(this.$refs.mySpan!=undefined){
			this.userInfo=res;
			console.log(this.userInfo);
			console.log(this.$refs.mySpan);  
		  }
		});
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.topBar{
      height: 65px;
      line-height: 65px;
      border-bottom: #E5E5E6 1px solid;
	  background: #FFFFFF;
	  position: relative;
	}
	.signOut{
	position: absolute;
    height: 60px;
    line-height: 60px;
    width: 100px;
    cursor: pointer;
    background: lightgray;
    top: 70px;
    left: -10px;
    text-align: center;
    border-radius: 5px;
	z-index: 5;
	}
	.con{
		width: 100%;
	}
	/deep/ .el-tree{
		background: cornflowerblue;
	}
	#top{
		width: 100%;
		min-width: 1080px;
		height: 80px;
		background: cornflowerblue;
		font-size: 30px;
		font-weight: bold;
		color: #FFFFFF;
	}
	#top>div{
		display: inline-block;
	}
	#treeMenu{
		/* width: 200px; */
		min-height: 1000px;
		background: #00152B;
	}
	#mainArea{
		flex: 1;
		background: #F0F2F5;
	}
</style>
<style>
	.router-link-exact-active .router-link-active{
	  color: white !important; 
	  display: none !important;
	}
.el-tree-node__expand-icon.expanded{
	background: url(../assets/reduce.png) no-repeat;
	background-size:20px 20px;
	font-size: 0;
	transform: none !important;
}
.el-tree-node__expand-icon{
	background: url(../assets/plus.png) no-repeat;
	background-size:20px 20px;
	height: 10px;
	width: 10px;
	font-size: 0 !important;
}
.el-tree-node__content:hover{
	background: cadetblue !important;
}
.el-tree-node:focus>.el-tree-node__content{
	background: cadetblue !important;
}
.el-tree-node__label{
	font-size: 16px;
	color: #FFFFFF
}
.el-tree--highlight-current .el-tree-node.is-current>.el-tree-node__content{
	background-color:transparent !important;
}
</style>