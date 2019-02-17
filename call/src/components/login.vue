<template>
  <div class="loginPage">
		<div style="position: absolute;top: 0;bottom: 0;left: 0;right: 0;margin: auto;height: 250px;width: 365px;">
			<div style="height: 38px;width: 338px;margin: 0 auto 51px;">
				<img src="../../static/images/signlogo.png" style="height: 38px;vertical-align: top;"/>
				<span style="display: inline-block;height: 38px;line-height: 38px;font-size: 29px;font-weight: bold;">易车智能外呼管理后台</span>
			</div>
			<div style="width: 365px;height: 42px;line-height: 42px;margin-bottom: 24px;">
				<img src="" />
			  <input type="text" placeholder="请输入域账号" v-model="username" name="user" style="height: 38px;line-height: 38px;width: 356px;font-size: 15px;vertical-align: top;">
			</div>
			<div style="width: 365px;height: 42px;line-height: 42px;">
				<img src="" />
				<input type="password" placeholder="请输入密码" v-model="password" name="pas" class="pass">
			</div>
            <el-checkbox v-model="checked">自动登录</el-checkbox>
			<div style="height: 42px;width: 365px;background: #008FFF;color: #FFFFFF;line-height: 42px;border-radius: 5px;text-align: center;cursor: pointer;" @click="login">登陆</div>
		</div>
	</div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
		    checked: false,
			username:'',
            password:'',
			oHeight:0,
			userImg:'',
			array:[]
    }
  },
	created(){
		
	},
	mounted(){
		this.username=this.getCookie('user');
		this.password=this.getCookie('pas');
		//this.$bus.$emit('userIn','234');
	},
	methods: {
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
		login(){
			if(this.username==''){
				alert('请输入域账号');
			}else if(this.password==''){
				alert('请输入密码');
			}else{
				 var that=this;
				 this.$http.post('http://172.20.100.21:8080/login/login', {
				  "username":that.username,
				  "password":that.password
				}).then(function(res) {
					if(res.data.message=='success'){
						alert('登录成功');
						if(that.checked==true){
						  that.setCookie('user',that.username,14);
						  that.setCookie('pas',that.password,14);
						}else{
						  that.setCookie('user','',14);
						  that.setCookie('pas','',14);
						}
						that.userImg=res.data.message;
						
						//console.log(document.cookie);
						setTimeout(function(){
							that.$bus.$emit('userIn',that.userImg);
						},30);
						that.$router.push({path: '/mainpage'});
					}else{
					  alert('登录失败！');
					}
				}).catch(function(err) {
					if (err.response) {
					  console.log(err.response);
					}
				})
			}
		}
	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.loginPage{
		margin: 0;
		padding: 0;
		width: 100%;
		height: 100vh;
		background: url(../../static/images/login.png);
		background-size: cover;
		overflow-x: hidden;
	}
	.pass{
	  height: 38px;
	  line-height: 38px;
	  width: 356px;
	  font-size: 15px;
	  vertical-align: top;
	}
</style>
