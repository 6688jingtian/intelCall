<template>
	<div class="chatContain" ref="chatCon">
		<div class="topBar" ref="topBar">
		  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAaCAYAAABCfffNAAAAAXNSR0IArs4c6QAABCVJREFUSA2tVV2IW1UQnjk3yc3N3WySTbvdsmpw7WqhtCqioC+SB5EKigVRKFIQK0XxoQ/+oVQU3xSViqIUFX2r4INuEaQPsr4U1Opa6HZbVrrWXdYuuntvkvubTc44J/WG/Nxsu+KB5Mx8883MOffMmYNwDaMahjtlE3Yh0DgRZgXhEoG8PGzq04gYXi0EDiIQUbbiBS8B4ONImAOkvyRAFQXUpIStSDAEojVPA4gjuUzyF05Ig+L14bYbHLJdz7KcYKbiNw70Ef4FqkQ3W47/qeX6juV4J2yiwiBuF17z6kdtJ7Rsr/Fol2EDhXe91faC73hRS75PpQ2oABU3/NyqBTXltCFxgLHi+cd5Z2QR5WMpFTd4hlfCdtoWS7hG0Hb9Bdvx5ziO0eXCW7yBV+C4Lt3RZfiPiu0Ec3yuT0furepi4BgA7c6bxt2RoXf+7c+1vQLgAUDIg8QL1Fz/4qbrR+d7eUq3fL/MFTmFhl7KIa4hbytr++FK3tBv4RJc7HU6tbhojCXMj9jWXWUEq02kZ3eMjRzv9WklcoIzXOKfFTLpd0XNC8sgYTUugSKPJc1X+hIoA0JRI/j44uLaHqX2Dvb5huPuU7jgC3a/JuCHXpLS55aWihztYJythSGakICn4uy5TOoNRLiLv1SSPzNsIxBLccSE0Et8aKNxtg7s1g65LfJOfE5QdwFGBEjJ/Qhm29YOgYCJAI0OqF9EDPrBKwiiWG146+MChKhx49seR0TXushVdy7O1sZInmzLfYI0UZNVwVtaliBv7LMzMDk5GUITXx24G4IZp+58EuerMP5C+WFdXxYIYo5/uwYRJ8YLU0ByPy/mQsRhZ9Xev+J5355SyYrwzpnvyr2s23w2Hqq3otmQPxVMI9tJ6pVnZ2dTqZHRezQQWyTieb4fZ3s5nbrlhif4GJbzZvqQuoxY8cLf2fnNrJn6oJOo5Pn51WFtSDzM78l9XGkTQKgTkMf3hPsTfP3H+TMny+VyV3G0Yrr+Cn+hA7mh9LdX2ooXPsLZPsyZ6a7uu3B59TEO+hog7uxNHukc8Hsp6eUd48VTEVZ168ea1Li9MJS5U2GtJExMVr1wRgIuFEz9wdPLy5kiGu+z9YnIccOZiEudjkxsL76tHrKG45/GBD5UMIxp5ddKogTPo+tCGSwKob3zd8VpCMQXFL6ZwZ3jyaxpvEcIr49k0m9Fvu0kClCvWtAMznGrVmpG/W1mpJIaZPTU4cJQ+minn2or7WEYeEkk8DbTSNq8E7dtuIrAZdrUk5qbNlLP9yZQrl07iWLxGQ3bXv1wENZfDNebDdZVRakKiqqI7xdwE0bUNWyk9dSviUTiOW6KP0YxOufYJBGBD7FIQX0vSdoviXbzmrZw7ScIqcIP14omxJecaCpvpn6OfP6XmXelbTbQP+YK3Ba+fBnLAAAAAElFTkSuQmCC" class="chatImg"/><span>{{yingying}}</span>
		  <div style="display: inline-block;" @click="abstrict()">查看线索</div>
		</div>
		<beautiful-chat
			:participants="participants"
			:titleImageUrl="titleImageUrl"
			:onMessageWasSent="onMessageWasSent"
			:messageList="cust"
			:newMessagesCount="newMessagesCount"
			:isOpen="isChatOpen"
			:showEmoji="true"
			:showFile="true"
			:close="closeChat"
            :open="openChat"
			:showTypingIndicator="showTypingIndicator"
			:colors="colors"
			:alwaysScrollToBottom="alwaysScrollToBottom"
			:messageStyling="messageStyling" />
	</div>
</template>

<script>
import Vue from 'vue';
// import $http from '@/api/api.js';
import Chat from 'vue-beautiful-chat';
// import bus from '@/assets/utils/bus.js';
Vue.use(Chat);

export default {
  name: 'cust',
	props:{
		cust: {
			type: Array
		},
		lala: {
			type: Number
		},
		yingying: {
		    type: String
		}
	},
  data () {
    return {
      	participants: [
      	{
      		id: 'user',
      		name: '用户',
      		imageUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAaCAYAAABCfffNAAAAAXNSR0IArs4c6QAABCVJREFUSA2tVV2IW1UQnjk3yc3N3WySTbvdsmpw7WqhtCqioC+SB5EKigVRKFIQK0XxoQ/+oVQU3xSViqIUFX2r4INuEaQPsr4U1Opa6HZbVrrWXdYuuntvkvubTc44J/WG/Nxsu+KB5Mx8883MOffMmYNwDaMahjtlE3Yh0DgRZgXhEoG8PGzq04gYXi0EDiIQUbbiBS8B4ONImAOkvyRAFQXUpIStSDAEojVPA4gjuUzyF05Ig+L14bYbHLJdz7KcYKbiNw70Ef4FqkQ3W47/qeX6juV4J2yiwiBuF17z6kdtJ7Rsr/Fol2EDhXe91faC73hRS75PpQ2oABU3/NyqBTXltCFxgLHi+cd5Z2QR5WMpFTd4hlfCdtoWS7hG0Hb9Bdvx5ziO0eXCW7yBV+C4Lt3RZfiPiu0Ec3yuT0furepi4BgA7c6bxt2RoXf+7c+1vQLgAUDIg8QL1Fz/4qbrR+d7eUq3fL/MFTmFhl7KIa4hbytr++FK3tBv4RJc7HU6tbhojCXMj9jWXWUEq02kZ3eMjRzv9WklcoIzXOKfFTLpd0XNC8sgYTUugSKPJc1X+hIoA0JRI/j44uLaHqX2Dvb5huPuU7jgC3a/JuCHXpLS55aWihztYJythSGakICn4uy5TOoNRLiLv1SSPzNsIxBLccSE0Et8aKNxtg7s1g65LfJOfE5QdwFGBEjJ/Qhm29YOgYCJAI0OqF9EDPrBKwiiWG146+MChKhx49seR0TXushVdy7O1sZInmzLfYI0UZNVwVtaliBv7LMzMDk5GUITXx24G4IZp+58EuerMP5C+WFdXxYIYo5/uwYRJ8YLU0ByPy/mQsRhZ9Xev+J5355SyYrwzpnvyr2s23w2Hqq3otmQPxVMI9tJ6pVnZ2dTqZHRezQQWyTieb4fZ3s5nbrlhif4GJbzZvqQuoxY8cLf2fnNrJn6oJOo5Pn51WFtSDzM78l9XGkTQKgTkMf3hPsTfP3H+TMny+VyV3G0Yrr+Cn+hA7mh9LdX2ooXPsLZPsyZ6a7uu3B59TEO+hog7uxNHukc8Hsp6eUd48VTEVZ168ea1Li9MJS5U2GtJExMVr1wRgIuFEz9wdPLy5kiGu+z9YnIccOZiEudjkxsL76tHrKG45/GBD5UMIxp5ddKogTPo+tCGSwKob3zd8VpCMQXFL6ZwZ3jyaxpvEcIr49k0m9Fvu0kClCvWtAMznGrVmpG/W1mpJIaZPTU4cJQ+minn2or7WEYeEkk8DbTSNq8E7dtuIrAZdrUk5qbNlLP9yZQrl07iWLxGQ3bXv1wENZfDNebDdZVRakKiqqI7xdwE0bUNWyk9dSviUTiOW6KP0YxOufYJBGBD7FIQX0vSdoviXbzmrZw7ScIqcIP14omxJecaCpvpn6OfP6XmXelbTbQP+YK3Ba+fBnLAAAAAElFTkSuQmCC'
      	},
		{
			id: 'me',
			name: '易小鲨',
			imageUrl: 'data:image/png;base64,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'
		}
      ], // the list of all the participant of the conversation. `name` is the user name, `id` is used to establish the author of a message, `imageUrl` is supposed to be the user avatar.
      titleImageUrl: 'https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png',
      newMessagesCount: 0,
      isChatOpen: false, // to determine whether the chat window should be open or closed
      showTypingIndicator: '', // when set to a value matching the participant.id it shows the typing indicator for the specific user
      colors: {
      	header: {
      		bg: '#4e8cff',
      		text: '#ffffff'
      	},
      	launcher: {
      		bg: '#4e8cff'
      	},
      	messageList: {
      		bg: '#ffffff'
      	},
      	sentMessage: {
      		bg: '#4e8cff',
      		text: '#ffffff'
      	},
      	receivedMessage: {
      		bg: '#eaeaea',
      		text: '#222222'
      	},
      	userInput: {
      		bg: '#f4f7f9',
      		text: '#565867'
      	}
      }, // specifies the color scheme for the component
      alwaysScrollToBottom: false ,
      messageStyling: true 
    };
  },
  mounted(){
	  if(this.$refs.chatCon!=undefined){
	    this.$refs.chatCon.style.zIndex=-1;
	  }
	  if(this.$refs.topBar!=undefined){
	    this.$refs.topBar.style.display='none';
	  }
  },
  methods: {
	a: function(){
		alert('111');
	},
    sendMessage: function(text) {
    	if (text.length > 0) {
    		this.newMessagesCount = this.isChatOpen ? this.newMessagesCount : this.newMessagesCount + 1
    		this.onMessageWasSent({ author: 'support', type: 'text', data: { text } })
    	}
    },
    onMessageWasSent: function(message) {
    	// called when the user sends a message
    	this.messageList = [ ...this.messageList, message ]
    },
	openChat: function() {
      this.isChatOpen = true;
      this.newMessagesCount = 0;
	  this.$refs.chatCon.style.zIndex=1;
	  this.$refs.topBar.style.display='block';
    },
    closeChat: function () {
      this.isChatOpen = false;
	  this.$refs.chatCon.style.zIndex=-1;
	  this.$refs.topBar.style.display='none';
    }
  }
};
</script>
<style scoped>
	.chatImg{
	  height: 30px;
	  width: 30px;
	  border-radius: 50%;
	}
	.topBar{
	  height: 30px;
	  line-height: 30px;
	  width: 306px;
	  position: absolute;
	  top: -11px;
	  background: gray;
	  margin-left: -24px;
	}
	/deep/ .sc-message--content.sent .sc-message--avatar{
	  right: 17px !important;
	}
	/deep/ .sc-message--content.sent .sc-message--text{
		margin-right: 15px;
	}
	/deep/ .sc-message--text{
		/* height: 30px; */
		white-space: unset !important;
	}
	/deep/ .sc-message-list{
		height: 300px !important;
		overflow-x:hidden !important;
	}
	.footBar{
		height: 30px;
		width: 369px;
		position: absolute;
		bottom: 0;
		background: gray;
		margin-left: -24px;
	}
	.chatContain{
		position: fixed;
		top: 29px;
		right: 0;
		height: 325px;
		width: 370px;
		display: inline-block;
	}
  /deep/ .sc-chat-window{
		margin-top: 120px;
		margin-right: 10px;
		position: relative !important;
	}
	/deep/ .sc-header--close-button{
		/* display: none; */
		right: 0;
		position: absolute;
		top: -35px;
	}
</style>
