<template>
  <div>
		<div class="titleBar">
			<el-breadcrumb separator-class="el-icon-arrow-right">
			  <el-breadcrumb-item>首页</el-breadcrumb-item>
			  <el-breadcrumb-item>话务工作台</el-breadcrumb-item>
			  <el-breadcrumb-item>实时监控</el-breadcrumb-item>
			</el-breadcrumb>
			<span style="font-family: MicrosoftYaHei;font-size: 18px;color: #262626;letter-spacing: 1px;bottom: 18px;position: relative;">实时监控</span>
		</div>
	    <div>
			<div style="height: 569px;width: 972px;overflow-x: auto;margin: 0 auto;margin-left: 24px;">
			   <div style="width: 942px;margin-left: 26px;margin-top: 24px;">
			  	<customer v-for="(item,index) in chatData" :cover="item.chatcontent" :key="index" :lala="item.id" :haha="item.name"></customer>
			  </div>
			  <div style="width: 942px;margin-left: 26px;margin-top: 76px;">
			  	<customer v-for="(item,index) in chatData" :cover="item.chatcontent" :key="index" :lala="item.id" :haha="item.name"></customer>
			  </div>
			  <div style="width: 942px;margin-left: 26px;margin-top: 76px;">
			  	<customer v-for="(item,index) in chatData" :cover="item.chatcontent" :key="index" :lala="item.id" :haha="item.name"></customer>
			  </div>
			</div>
		</div>
		<cust :cust="ddd" :yingying="eee" ref="cust"></cust>
	</div>
</template>

<script>
import Vue from 'vue';
import Chat from 'vue-beautiful-chat';
import customer from '@/components/customer/';
import cust from '@/components/chat.vue';
Vue.use(Chat);
export default {
  name: 'robot',
  data () {
    return {
      ddd:[],
	    eee:'',
      chatData: [
      {
			      chatcontent:[//对话内容
							{ type: 'text', author: `user`, data: { text: `请问您是在选车吗最近？` } },
							{ type: 'text', author: `user`, data: { text: `是的,我想买一辆劳斯莱斯幻影,我非常喜欢幻影!是的,我想买一辆劳斯莱斯幻影,我非常喜欢幻影!` } },
							{ type: 'text', author: `me`, data: { text: `是的,我想买一辆劳斯莱斯幻影,我非常喜欢幻影!是的,我想买一辆劳斯莱斯幻影,我非常喜欢幻影!` } },
							{ type: 'text', author: `me`, data: { text: `你好.` } },
				     ],
						id:1,//其他字段
						name:'玉田'
			},
			{
			      chatcontent:[
							{ type: 'text', author: `user`, data: { text: `一统江湖` } },
							{ type: 'text', author: `me`, data: { text: `文成武德!` } }
			      ],
			      id:2,
				    name:'刘英'
			},
			{
			      chatcontent:[
						 { type: 'text', author: `user`, data: { text: `东山再起` } },
						 { type: 'text', author: `me`, data: { text: `自强不息` } }
			      ],
			      id:3,
				    name:'广坤叔'
			}
      ]
    }
  },
  components:{customer, cust},
  mounted () {
		var that=this;
		this.$http.post('http://172.20.100.21:8080/monitoring/monitoring', {
		}).then(function(res) {//0用户 1机器人
		    var chatData=[];
				for(var j=0;j<res.data.data.length;j++){
					var callLength=res.data.data[j].callDialogList;
					var des={chatcontent:[],id:0,name:''};
					for(var i=0;i<callLength.length;i++){
						var chatText={type:'text',author:'',data:{text:''}};
						chatText.data.text=callLength[i].content;
						chatText.author=callLength[i].type==0?'user':'me';
						des.chatcontent.push(chatText);
						des.id=res.data.data[j].clue.id;
						des.name=res.data.data[j].clue.username;
					}
					chatData.push(des);
				}
				that.chatData=chatData;
		}).catch(function(err) {
			if (err.response) {
			  console.log(err.response);
			}
		});
		
	  this.$bus.$on('chatMes',(res)=>{
		  //console.log(this.$refs.cust);
		  this.$nextTick(() => {})
		  if(this.$refs.cust!=undefined){
			this.$refs.cust.openChat();
			this.ddd=res;
			}
	  });
	  this.$bus.$on('chatMe',(res)=>{  
	  if(this.$refs.cust!=undefined){
		this.eee=res;
		}
	  });
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.titleBar{
	  height: 108px;
	  line-height: 108px;
	  padding-top: 23px;
		padding-left: 36px;
	  font-family: MicrosoftYaHei;
	  /* font-size: 13px; */
	  /* color: #8C8C8C; */
	  letter-spacing: 0.54px;
	  background: #FFFFFF;
	  border: 1px solid #E5E5E6;
	}
	customer{
		float: left !important;
	}
	/deep/ .sc-launcher {
		display: none;
	}
	/deep/ .sc-user-input {
		display: none;
	}
	/deep/ .chatContain {
		width: 309px !important;
	}
	/deep/ .sc-chat-window{
		width: 306px !important;
	}
</style>
<style>
	.sc-message--content.sent .sc-message--avatar{
		/* display: none; */
		position: absolute !important;
		right: 0 !important;
		margin-right: 0 !important;
		display: block !important;
	}
	.sc-message--content.sent{
	  width: 215px !important;
      margin-left: 40px !important;
	}
	.sc-message--content.sent .sc-message--text{
	  left: 0 !important;
      margin-left: 0 !important;
	  max-width: 215px !important;
	}
	.sc-message{
	  position: relative !important;
	}
	.sc-header{
	  min-height: 0 !important;
	  height: 0 !important;
	  padding: 0 !important;
	}
	.sc-header--img{
	  display: none !important;
	}
	.sc-header--title{
	  display: none !important;
	}
</style>
