<template>
  <div class="aaaaaa">
    <div class="content" style="margin: 0 auto;width: 400px;">
    	<div class="processBar">
    		<div id="line0" class="bar">
    			<div id="point0" class="c-step c-select"></div>
    		</div>
    		<div class="text" style="margin: 10px -30px;"><span class='poetry'>教育背景</span></div>
    	</div><div class="processBar">
    		<div id="line1" class="bar">
    			<div id="point1" class="c-step"></div>
    		</div>
    		<div class="text" style="margin: 10px -30px;"><span class='poetry'>工作经历</span></div>
    	</div><div class="processBar">
    		<div id="line2" class="bar" style="width: 0;">
    			<div id="point2" class="c-step"></div>
    		</div>
    		<div class="text" style="margin: 10px -15px;"><span class='poetry'>社交</span></div>
    	</div>
    </div>
    <!--  标题进度条 end-->
    <div style="clear: both;"></div>
    <div id="MainContent" style="margin: 20px auto 0;">
    	<div class="content" id="education">
    		<span class='poetry'>
    		  <el-tabs v-model="activeName" @tab-click="handleClick">
    		  				<el-tab-pane label="未安排任务的线索" name="first">
    		  					<div style="height: 50px;line-height: 50px;width: 700px;">
    		  					  <div style="height: 30px;width: 250px;border: 1px solid;border-radius: 18px;display: inline-block;position: relative;vertical-align: middle;">
    		  					  	<img src="../assets/enlarge.png"  style="height: 30px;width: 30px;left: 0;top: 0;position: absolute;"/>
    		  					  	<input type="text" style="vertical-align: top;outline: none;border: none;height: 30px;width: 190px;" placeholder="请输入id或关键词,可按回车查询"/>
    		  					  </div>
    		  					  <el-date-picker
    		  					  	v-model="value7"
    		  					  	type="daterange"
    		  					  	align="right"
    		  					  	format="yyyy/MM/dd"
    		  					  	unlink-panels
    		  					  	range-separator="至"
    		  					  	start-placeholder="开始日期"
    		  					  	end-placeholder="结束日期"
    		  					  	:change="timeConfirm()"
    		  					  	ref="timeNow">
    		  					  </el-date-picker>
    		  					  <div class="btnCreate" @click="getAjax()">查询</div>
    		  					</div>
    		  					<el-table
    		  					  :data="tableData"
    		  					  border
    		  					  style="margin:0 auto;"
    		  					  :default-sort = "{prop: 'date', order: 'descending'}"
    		  					  id="out-table"
    		  					  @cell-click="rowClick"
    		  					  @select="selOne"
    		  					  @select-all="selAll"
    		  					  ref="table">
    		  					  <el-table-column
    		  					  	type="selection"
    		  					  	width="55">
    		  					  </el-table-column>
    		  					  <el-table-column
    		  					    prop="date"
    		  					    label="日期"
    		  					    width="150">
    		  					  </el-table-column>
    		  					  <el-table-column
    		  					    prop="name"
    		  					    label="姓名"
    		  					    width="120">
    		  					  </el-table-column>
    		  					  <el-table-column
    		  					    prop="city"
    		  					    label="市区"
    		  					    width="120">
    		  					  </el-table-column>
    		  					  <el-table-column
    		  					    prop="address"
    		  					    label="地址"
    		  					    width="250">
    		  					  </el-table-column>
    		  					  <el-table-column
    		  					    prop="zip"
    		  					    label="邮编"
    		  					    width="120">
    		  					  </el-table-column>
    		  					  <el-table-column
    		  						prop="ying"
    		  					    label="操作"
    		  					    width="100">
    		  					    <template slot-scope="scope">
    		  					      <div @click="handleClick(scope)" type="text" size="small" style="display: inline-block;">查看详情</div>
    		  					    </template>
    		  					  </el-table-column>
    		  					</el-table>
    		  					<el-pagination
    		  					  background
    		  					  layout="prev, pager, next"
    		  					  :total="100"
    		  					  @current-change="pageNow">
    		  					</el-pagination>
    		  				</el-tab-pane>
    		  				<el-tab-pane label="任务已完成且号码待定的线索" name="second">任务已完成且号码待定的线索</el-tab-pane>
    		  </el-tabs>
    		</span>
    	</div>
    	<div class="content" id="work">
    		<span class='poetry'>
    			这是工作经历板块<br/>
    		</span>
    		<form action="https://www.baidu.com/" id="form1" @submit="subNow()">
    			<span class='poetry'>工作地点</span>
    			<input type='text' id='name' v-model="inA" name="user" /> <br/>
    			<span class='poetry'>工作内容</span>
    			<input type='text' id='age' v-model="inB" name="pas"/>
    			<input type="submit" value="提交" id="sub1"/>
    		</form>
    		<select v-model="myVal">
    			<option v-for="item in options" :value="item.name">
    					{{item.name}}
    			</option>
    		</select>
    	</div>
    	<div class="content" id="social">
    		<span class='poetry'>
    			这是社交板块{{inB}}{{inA}}{{myVal}}
    		</span>
    	</div>
    </div>
    <div style="clear: both;"></div>
    <div style="text-align: center;margin-top: 20px;">
    		<button id="previous_step">上一步</button>
    		<button id="next_step">下一步</button>
			<button class="btnSure" style="display: none;">确定</button>
    </div>
		<!-- <div class="content" style="margin: 2% auto;width: 960px;height: 40px;">
			<div class="processBar">
				<div id="line0" class="bar Color">
				</div>
			</div><div class="processBar">
				<div id="line1" class="bar">
				</div>
			</div><div class="processBar">
				<div id="line2" class="bar">
				</div>
			</div>
			<div style="clear: both;"></div>
		</div>
		<div style="clear: both;"></div>
		<div style="text-align: center;right: 0;position: absolute;top: 70px;">
				<button class="previous_step">上一步</button>
				<button class="next_step">下一步</button>
				<button class="btnSure" style="display: none;">确定</button>
		</div>
		<div id="MainContent" style="margin: 0 auto;width: 960px;text-align: center;">
			<div class="content" id="basicInfo">
			  <el-tabs v-model="activeName" @tab-click="handleClick">
				<el-tab-pane label="未安排任务的线索" name="first">
					<div style="height: 50px;line-height: 50px;width: 700px;">
					  <div style="height: 30px;width: 250px;border: 1px solid;border-radius: 18px;display: inline-block;position: relative;vertical-align: middle;">
					  	<img src="../assets/enlarge.png"  style="height: 30px;width: 30px;left: 0;top: 0;position: absolute;"/>
					  	<input type="text" style="vertical-align: top;outline: none;border: none;height: 30px;width: 190px;" placeholder="请输入id或关键词,可按回车查询"/>
					  </div>
					  <el-date-picker
					  	v-model="value7"
					  	type="daterange"
					  	align="right"
					  	format="yyyy/MM/dd"
					  	unlink-panels
					  	range-separator="至"
					  	start-placeholder="开始日期"
					  	end-placeholder="结束日期"
					  	:change="timeConfirm()"
					  	ref="timeNow">
					  </el-date-picker>
					  <div class="btnCreate">查询</div>
					</div>
					<el-table
					  :data="tableData"
					  border
					  style="margin:0 auto;"
					  :default-sort = "{prop: 'date', order: 'descending'}"
					  id="out-table"
					  @cell-click="rowClick"
					  @select="selOne"
					  @select-all="selAll"
					  ref="table">
					  <el-table-column
					  	type="selection"
					  	width="55">
					  </el-table-column>
					  <el-table-column
					    prop="date"
					    label="日期"
					    width="150">
					  </el-table-column>
					  <el-table-column
					    prop="name"
					    label="姓名"
					    width="120">
					  </el-table-column>
					  <el-table-column
					    prop="city"
					    label="市区"
					    width="120">
					  </el-table-column>
					  <el-table-column
					    prop="address"
					    label="地址"
					    width="250">
					  </el-table-column>
					  <el-table-column
					    prop="zip"
					    label="邮编"
					    width="120">
					  </el-table-column>
					  <el-table-column
						prop="ying"
					    label="操作"
					    width="100">
					    <template slot-scope="scope">
					      <div @click="handleClick(scope)" type="text" size="small" style="display: inline-block;">查看详情</div>
					    </template>
					  </el-table-column>
					</el-table>
					<el-pagination
					  background
					  layout="prev, pager, next"
					  :total="100"
					  @current-change="pageNow">
					</el-pagination>
				</el-tab-pane>
				<el-tab-pane label="任务已完成且号码待定的线索" name="second">任务已完成且号码待定的线索</el-tab-pane>
			  </el-tabs>
			</div>
			<div class="content" id="work">
				<span class='poetry'>
					这是工作经历板块<br/>
				</span>
				<form action="https://www.baidu.com/" id="form1" @submit="subNow()">
					<span class='poetry'>工作地点</span>
					<input type='text' id='name' v-model="inA" name="user" /> <br/>
					<span class='poetry'>工作内容</span>
					<input type='text' id='age' v-model="inB" name="pas"/>
					<input type="submit" value="提交" id="sub1"/>
				</form>
				<select v-model="myVal">
					<option v-for="item in options" :value="item.name">
							{{item.name}}
					</option>
				</select>
			</div>
			<div class="content" id="social">
				<span class='poetry'>
					这是社交板块{{inB}}{{inA}}{{myVal}}
				</span>
			</div>
		</div>
		<div style="clear: both;"></div>
		<div style="text-align: center;position: absolute;right: 0;">
			<button class="previous_step">上一步</button>
			<button class="next_step">下一步</button>
			<button class="btnSure" style="display: none;">确定</button>
		</div> -->
	</div>
</template>

<script>


export default {
  name: 'taskcre',
  data () {
    return {
	   value7: '',
	   tableData: [{
	    date: '2016-05-03',
	    name: '王小',
	    city: '普陀区',
	    address: '上海市普陀区金沙江路 1518 弄',
	    zip: 111111,
	  	tabPath: '/',
	  	ying: '啦啦啦'
	  }, {
	    date: '2016-05-02',
	    name: '王虎',
	    city: '普陀区',
	    address: '上海市普陀区金沙江路 1518 弄',
	    zip: 222222,
	  	tabPath: '/apple',
	  	ying: '啦啦啦'
	  }, {
	    date: '2016-05-04',
	    name: '虎',
	    city: '普陀区',
	    address: '上海市普陀区金沙江路 1518 弄',
	    zip: 333333,
	  	tabPath: '/ok',
	  	ying: '啦啦啦'
	  }, {
	    date: '2016-05-01',
	    name: '虎啊',
	    city: '普陀区',
	    address: '上海市普陀区金沙江路 1518 弄',
	    zip: 444444,
	  	tabPath: '/banana',
	  	ying: '啦啦啦'
	  }],
	  activeName: 'first' ,
      myVal:'apple' ,//默认选中第一项
      options:[
          {
              name:'apple',
              value:0
          },
          {
              name:'banana',
              value:1
          },
          {
              name:'orange',
              value:2
          },
      ],
      		inA:'',
      		inB:'',
      		custBol:false
    }
  },
  methods: {
	getAjax: function() {
		this.$http.post('http://ai.yiche.com/web/ability/nlu/standardTokenizer', {
			"text": "动效如果有跟评审结论有出入的地方或者不清楚的地方，随时沟通哈~"
		}).then(function(res) {
			console.log(res.data);
		}).catch(function(err) {
			if (err.response) {
				console.log(err.response)
			}
		})
	},
	pageNow: function(pa){
	  console.log(pa);
	},
  	handleClick : function(tab, event) {
        //console.log(tab, event);
    },
	rowClick : function(row){
		//console.log(row);
		row.address=row.address=='应用'?"非应用":"应用";
	},
	selOne : function(row){
		console.log(row);
	},
	selAll : function(selection){
		console.log(selection);
	},
	timeConfirm : function(){
		
	}
  },
	created () {
		$(document).ready(function(){
			$("#work").addClass('main-hide');
			$("#social").addClass('main-hide');
			$('#previous_step').hide();
			/*上一步*/
			$('#previous_step').bind('click', function () {
				index--;
				ControlContent(index);
			});
			/*下一步*/
			$('#next_step').bind('click', function () {
				index++;
				ControlContent(index);
			});
		});
		var index=0;
		function ControlContent(index) {
			var stepContents = ["education","work","social"];
			var key;//数组中元素的索引值
			for (key in stepContents) {
				var stepContent = stepContents[key];//获得元素的值
				if (key == index) {
					if(stepContent=='education'){
						$('#previous_step').hide();
					}else{
						$('#previous_step').show();
					}
					if(stepContent=='social'){
						$('#next_step').hide();
						$('.btnSure').show();
					}else{
						$('#next_step').show();
						$('.btnSure').hide();
					}
					$('#'+stepContent).removeClass('main-hide');
					$('#point'+key).addClass('c-select');
					$('#line'+key).removeClass('b-select');
				}else {
					$('#'+stepContent).addClass('main-hide');
					if(key>index){
						$('#point'+key).removeClass('c-select');
						$('#line'+key).removeClass('b-select');
					}else if(key<index){
						$('#point'+key).addClass('c-select');
						$('#line'+key).addClass('b-select');
					}
				}
			}
		};
		function subNow(){
			this.setCookie('user',this.inA,14);
			this.setCookie('pas',this.inB,14);
		}
		
// 		var index=0;
// 		$(document).ready(function(){
// 			$('.processBar').click(function(){
// 				var ind=$(this).index();
// 				index=ind;
// 				//console.log(index);
// 				$('.previous_step').show();
// 				$('.next_step').show();
// 				$(".bar").removeClass("Color");
// 				$(".bar").removeClass('b-select');
// 				$(".bar").eq(ind).addClass('Color');
// 				$('#MainContent>.content').eq(ind).removeClass("main-hide").siblings().addClass("main-hide");
// 				if($('#MainContent>.content').eq(ind)[0].id=='basicInfo'){
// 					$('.previous_step').hide();
// 				}else{
// 					$('.previous_step').show();
// 				}
// 				if($('#MainContent>.content').eq(ind)[0].id=='social'){
// 					$('.next_step').hide();
// 					$('.btnSure').show();
// 				}else{
// 					$('.next_step').show();
// 					$('.btnSure').hide();
// 				}
// 			});
// 			$("#education").addClass('main-hide');
// 			$("#work").addClass('main-hide');
// 			$("#social").addClass('main-hide');
// 			$('.previous_step').hide();
// 			/*上一步*/
// 			$('.previous_step').bind('click', function () {
// 				  $(".bar").removeClass("Color");
// 					if(index>0){
// 						index--;
// 					}
// 					//console.log(index);
// 					ControlContent(index);
// 				
// 			});
// 			/*下一步*/
// 			$('.next_step').bind('click', function () {
// 				$(".bar").removeClass("Color");
// 				if(index<2){
// 					index++;
// 				}
// 				//console.log(index);
// 				ControlContent(index);
// 			});
// 		});
// 		
// 		function ControlContent(index) {
// 		    var stepContents = ["basicInfo","work","social"];
// 		    var key;//数组中元素的索引值
// 		    for (key in stepContents) {
// 		        var stepContent = stepContents[key];//获得元素的值
// 		        if (key == index) {
// 		        	if(stepContent=='basicInfo'){
// 		        		$('.previous_step').hide();
// 		        	}else{
// 		        		$('.previous_step').show();
// 		        	}
// 		        	if(stepContent=='social'){
// 		        		$('.next_step').hide();
// 								$('.btnSure').show();
// 		        	}else{
// 		        		$('.next_step').show();
// 								$('.btnSure').hide();
// 		        	}
// 		            $('#'+stepContent).removeClass('main-hide');
// 		            //$('#point'+key).addClass('c-select');
// 		    		    $('#line'+key).addClass('b-select');
// 		        }else {
// 		            $('#'+stepContent).addClass('main-hide');
// 		            if(key>index){
// 		            	//$('#point'+key).removeClass('c-select');
// 		        		  $('#line'+key).removeClass('b-select');
// 		            }else if(key<index)
// 								{
// 		            	//$('#point'+key).addClass('c-select');
// 		        		  $('#line'+key).addClass('b-select');
// 		            }
// 		        }
// 		    }
// 		};
// 		function subNow(){
// 			this.setCookie('user',this.inA,14);
// 			this.setCookie('pas',this.inB,14);
// 		}
 	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.aaaaaa{
		width: 960px;
		margin: 0 auto;
		position: relative;
	}
	.btnCreate{
		height: 30px;
		width: 80px;
		border-radius: 5px;
		cursor: pointer;
		display: inline-block;
		background: cornflowerblue;
		color: #FFFFFF;
		line-height: 30px;
		text-align: center;
		vertical-align: middle;
	}
	.Color{
		background: cornflowerblue !important;
	}
	
	#MainContent{
	  text-align: center;
	}
	.processBar{
	  /* float: left; */
	  display: inline-block;
	  /* width: 200px; */
	  margin-top: 15px;
	}
	.processBar .bar{
	  background: rgb(230, 224, 236);
	  height: 3px;
	  position: relative;
	  width: 185px;
	  margin-left: 10px;  
	}
	.processBar .b-select{
	  background: #008FFF;
	}
	.processBar .bar .c-step{
	  position: absolute;
	  width: 8px;
	  height: 8px;
	  border-radius: 50%;
	  background: rgb(230, 224, 236);
	  left: -9px;
	  top: 50%;
	  margin-top: -4px;
	}
	.processBar .bar .c-select{
	  width: 10px;
	  height: 10px;
	  margin: -5px -1px;
	  background:#008FFF;
	
	}
	.main-hide {
	  display: none;
	}
	.poetry{
		color: #008FFF;; 
		font-family: KaiTi_GB2312, KaiTi, STKaiti; 
		font-size: 16px; 
		background-color: transparent; 
		font-weight: bold; 
		font-style: normal; 
		text-decoration: none;
	}
	button{
		width: 80px;
		line-height: 30px;	    
		font-size: 11px;
		color: #008FFF;
		text-align: center;
		border-radius: 6px;
		border: 1px solid #e2e2e2;	    
		cursor: pointer;
		background-color: #fff;
		outline:none;
	}
	button:hover{
	  border: 1px solid #008FFF;
	}
	/* .processBar{
		display: inline-block;
		width: 320px;
		height: 40px;
	}
	.processBar .bar{
	  background: rgb(230, 224, 236);
	  height: 40px;
	  position: relative;
	  width: 320px;
	  cursor: pointer;
	}
	.processBar .b-select{
	  background: cornflowerblue;
	}
	.processBar .bar .c-step{
	  position: absolute;
	  width: 8px;
	  height: 8px;
	  border-radius: 50%;
	  background: rgb(230, 224, 236);
	  left: -12px;
	  top: 50%;
	  margin-top: -4px;
	}
	.processBar .bar .c-select{
	  width: 10px;
	  height: 10px;
	  margin: -5px -1px;
	  background:cornflowerblue;

	}
	.main-hide{
	 display: none;
	}
	.poetry{
		color: cornflowerblue; 
		font-family: KaiTi_GB2312, KaiTi, STKaiti; 
		font-size: 16px; 
		background-color: transparent; 
		font-weight: bold; 
		font-style: normal; 
		text-decoration: none;
	} */
</style>
<style>
.el-tabs__header{
	width: 335px !important;
}
</style>