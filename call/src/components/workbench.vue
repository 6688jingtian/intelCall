<template>
  <div>
		<div class="titleBar">
			<el-breadcrumb separator-class="el-icon-arrow-right">
			  <el-breadcrumb-item>首页</el-breadcrumb-item>
			  <el-breadcrumb-item>话务工作台</el-breadcrumb-item>
			  <el-breadcrumb-item>常规任务管理</el-breadcrumb-item>
			</el-breadcrumb>
			<span style="font-family: MicrosoftYaHei;font-size: 18px;color: #262626;letter-spacing: 1px;bottom: 18px;position: relative;">常规任务管理</span>
		</div>
		<div class="mainBody">
		  <div>
		  	<div style="height: 38px;line-height: 38px;width: 644px;border: 1px solid #E5E5E5;border-radius: 5px;display: inline-block;margin-top: 24px;margin-left: 35px;margin-bottom: 24px;">
		  		<img src="../../static/images/sousuo1@2x.png"  style="height: 14px;width: 14px;margin-left: 15px;margin-right: 10px;position: relative;top: -1px;"/>
		  		<input type="text" style="vertical-align: top;outline: none;border: none;height: 36px;width: 598px;" placeholder="请输入id或关键词,可按回车查询" v-model="keyword"/>
		  	</div>
		  	<!-- <div class="btnCreate" @click="createTask()">创建任务</div> -->
		  </div>
		  <div>
				<div style="margin-bottom: 60px;">
				  <span style="margin-left: 35px;">创建时间:</span>
				  <el-date-picker
				  	v-model="value7"
				  	type="daterange"
				  	align="right"
				  	format="yyyy-MM-dd"
				  	unlink-panels
				  	range-separator="一"
				  	start-placeholder="开始日期"
				  	end-placeholder="结束日期"
				  	:change="timeConfirm()"
				  	ref="timeNow">
				  </el-date-picker>
				  <span>任务状态:</span>
					<el-select v-model="value4" clearable placeholder="请选择">
						<el-option
							v-for="item in options"
							:key="item.value"
							:label="item.label"
							:value="item.value">
						</el-option>
					</el-select>
				  <!-- <select v-model="sel" style="height: 35px;border-radius: 5px;outline: none;">
				  	<option value='' disabled selected style='display:none;'>请选择</option>
				  	<option v-for="item in selectNow" :value="item">{{item}}</option>
				  </select> -->
				  <div class="btnCreate" @click="search()">查询</div>
				</div>
		  </div>
		  
		  <el-table
		    :data="tableData"
		    border
		    style="margin:0 auto;"
		    :default-sort = "{prop: 'date', order: 'descending'}"
		    id="out-table"
		    @cell-click="rowClick"
		    ref="table">
		    <el-table-column
		      prop="id"
		      label="任务ID"
		      width="150">
		    </el-table-column>
		    <el-table-column
		      prop="target"
		      label="任务名称"
		      width="120">
		    </el-table-column>
		    <el-table-column
		      prop="-createtime"
		      label="启动时间"
		      width="120">
		    </el-table-column>
		    <el-table-column
		      prop="-createtime"
		      label="创建时间"
		      width="120">
		    </el-table-column>
		    <el-table-column
		      prop="username"
		      label="创建人"
		      width="100">
		    </el-table-column>
		    <el-table-column
		      prop="zip"
		      label="状态"
		      width="120">
		    </el-table-column>
		    <el-table-column
		  	  prop="ying"
		      label="操作"
		      width="250">
		      <template slot-scope="scope">
		        <div @click="handleClick(scope)" type="text" size="small" style="display: inline-block;color: #008FFF;">查看详情</div>
		        <div type="text" size="small" style="display: inline-block;color: #008FFF;">修改</div>
		  	    <div type="text" size="small" style="display: inline-block;cursor: pointer;color: #008FFF;" @click="open(scope)">删除</div>
		  	    <div @click="stopNow(scope)" type="text" size="small" ref="stop" style="display: inline-block;color: #008FFF;">中断</div>
		      </template>
		    </el-table-column>
		  </el-table>
		  <el-pagination
		    background
		    layout="prev, pager, next, jumper"
		    @current-change="pageJump"
		    :total="pageTotal">
		  </el-pagination>
		</div>
	</div>
</template>

<script>
export default {
  name: 'workbench',
  data () {
    return {
		options: [{
          value: '选项1',
          label: '未启动'
        }, {
          value: '选项2',
          label: '进行中'
        }, {
          value: '选项3',
          label: '已完成'
        }, {
          value: '选项4',
          label: '异常/中断'
        }],
        value4: '',
			
		keyword:'',
		begindate:'',
		enddate:'',
		pageTotal:100,
		bol: true,
		sel: '',
		selectNow: [
			'未启动','进行中','已完成','异常/中断'
		],
		value7: '',
        tableData: [
            {
                "id": 189,
                "tel": "18610891256",
                "username": "安燃",
                "gender": 0,
                "brandname": "奥迪",
                "modelname": "Q5L",
                "outcalltime": 1549101027000,
                "callstate": 1,
                "source": null,
                "target": "预约试驾",
                "cleanresult": null,
                "cluetime": "1月30日",
                "isactive": 1,
                "clueStatus": 0,
                "isArrange": 0,
                "taskId": null,
                "createtime": 1549100632000,
                "updatetime": 1549100632000
            },
            {
                "id": 251,
                "tel": "17611580013",
                "username": "王安然",
                "gender": 2,
                "brandname": "",
                "modelname": "",
                "outcalltime": 1549101027000,
                "callstate": 0,
                "source": null,
                "target": "买车",
                "cleanresult": null,
                "cluetime": "",
                "isactive": 1,
                "clueStatus": 0,
                "isArrange": 0,
                "taskId": null,
                "createtime": 1549100634000,
                "updatetime": 1549100634000
            }
        ]
    }
  },
	methods : {
		search: function(){
		  var that=this;
		  this.$http.post('http://172.20.100.21:8080/clue/clues', {
			"search":this.keyword,
			"beginDate":this.begindate,
			"endDate":this.enddate,
// 			"isArrange":"是否安排(已安排,未安排)",
			"isExcute":this.sel,
// 			"clue_status":"号码状态,接通,空号,待定(关机/拒接/无人接听)"
		  }).then(function(res) {
			that.tableData=res.data.data.data;
			that.pageTotal=res.data.data.total;
			//console.log(res.data.data.data);
		  }).catch(function(err) {
		  	if (err.response) {
		  	  console.log(err.response);
		  	}
		  })
		},
		pageJump: function(a){
		  var that=this;
		  this.$http.post('http://172.20.100.21:8080/clue/clues', {
	      "pageNum":a,
		  }).then(function(res) {
		  	that.tableData=res.data.data.data;
		  	//console.log(res.data.data.data);
		  }).catch(function(err) {
		  	if (err.response) {
		  	  console.log(err.response);
		  	}
		  })
		},
		open: function(row){
		console.log(row.row.id);
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
			  this.$http.post('http://172.20.100.21:8080/attendant/delete/task', {
			   "taskId":row.row.id
			 }).then(function(res) {
				that.tableData=res.data.data.data;
				that.pageTotal=res.data.data.total;
			 	//console.log(res.data.data.data);
			 }).catch(function(err) {
			 	if (err.response) {
			 		console.log(err.response);
			 	}
			 })
        }).catch(() => {    
        });
      },
		rowClick : function(row){
			//console.log(row);
			row.address=row.address=='应用'?"非应用":"应用";
		},
		stopNow : function(){
			//alert('111');
			//console.log(this.$refs.table);
			var evt = window.event||event;
      var targetObj = evt.target||evt.srcElement;
			console.log(targetObj);
			targetObj.innerHTML = (targetObj.innerHTML=='中断'?"继续任务":"中断");
			console.log(targetObj);
			//this.$refs.btn.$el.innerHTML='啦啦';
			//this.bol=!this.bol;
		},
		handleClick : function(row) {
			this.$router.push({path: row.row.tabPath});
			console.log(row.row);
			//获取日历时间
			if((this.$refs.timeNow!=undefined)){
				this.begindate=this.$refs.timeNow.value[0];
				this.enddate=this.$refs.timeNow.value[0];
				 this.$http.post('http://172.20.100.21:8080/clue/clues', {
				  "pageNum":2,
					"beginDate":this.begindate
				}).then(function(res) {
					console.log(res);
				}).catch(function(err) {
					if (err.response) {
						console.log(err.response);
					}
				})
				console.log((this.$refs.timeNow.displayValue[0]));
			}
		},
		createTask : function(){
			this.$router.push({path: '/mainpage/taskcre'});
			//location.reload();
		},
		timeConfirm : function(){
		  if((this.$refs.timeNow!=undefined)&&(this.$refs.timeNow.value)){
		    this.begindate=this.$refs.timeNow.value[0];
			  this.enddate=this.$refs.timeNow.value[0];
		  }
		}
	},
	mounted(){
	  var that=this;
	  //console.log(this.tableData);
	  this.$http.post('http://172.20.100.21:8080/clue/clues', {

	  }).then(function(res) {
		that.tableData=res.data.data.data;
		that.pageTotal=res.data.data.total;
	  	//console.log(res.data.data.data);
	  }).catch(function(err) {
	  	if (err.response) {
	  		console.log(err.response);
	  	}
	  })
	}
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
  .btnCreate{
		height: 40px;
		width: 80px;
		border-radius: 5px;
		cursor: pointer;
		display: inline-block;
		background: cornflowerblue;
		color: #FFFFFF;
		line-height: 40px;
		text-align: center;
		vertical-align: top !important;
		margin-left: 10px;
	}
	.mainBody{
		width: 1075px;
    /* margin: 25px auto 0; */
		margin-top: 25px;
    margin-left: 50px;
		background: #FFFFFF;
		box-shadow: 0 0 4px 0 rgba(227,237,245,0.50);
		padding-bottom: 20px;
	}
</style>
<style>
body .el-table th.gutter{
display: table-cell!important;
}
body .el-table colgroup.gutter{
    display: table-cell!important;
}
.el-table--border th, td{
  border-right: none !important;
}
.el-breadcrumb{
	font-size: 13px !important;
	color: #8C8C8C;
}
.el-table--border{
	width: 1006px;
	margin: 0 auto;
}
.el-date-editor .el-range__icon{
	position: absolute;
  right: 5px;
}
.el-pagination{
	margin-right: 30px;
  margin-top: 20px;
	text-align: right;
}
</style>
