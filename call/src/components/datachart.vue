<template>
  <div>
    <Button type="success" @click="chartChange()">Success</Button>
    <div class="charts">
	  <x-chart id="highcharts" class="high" :option="option" ref="ying"></x-chart>
	  <x-chart id="high" class="high" :option="option1" ref="wish"></x-chart>
    </div>
  </div>
</template>

<script>
import XChart from '@/components/charts.vue';
var myvue={};
export default {
  name: 'datachart',
  data () {
    return {
      ddd:[],
	  option:{},
	  		  data:[{
	            name: '安装，实施人员',
	            data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
	          }, {
	            name: '工人',
	            data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
	          }, {
	            name: '销售',
	            data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
	          }, {
	            name: '项目开发',
	            data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
	          }, {
	            name: '其他',
	            data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
	          }],
	          other:{
	  	        chart:{height:500, width:1140},
	  	        credits: {
	  	        	enabled: false
	  	        },
	            title: {
	              //大标题
	              text: ''
	            },
	            subtitle: {
	              //小标题
	              text: ''
	            },
	            xAxis: {
	              title: {
	                text: ''
	              }
	            },
	            yAxis: {
	              title: {
	                text: ''
	              }
	            },
	            legend: {
	              layout: 'vertical',
	              align: 'right',
	              verticalAlign: 'middle'
	            },
	            plotOptions: {
	              series: {
	                label: {
	                  connectorAllowed: false
	                },
	                pointStart: 2010
	              }
	            },
	            series:'',
	            responsive: {
	              rules: [{
	                condition: {
	                  maxWidth: 500
	                },
	                chartOptions: {
	                  legend: {
	                    layout: 'horizontal',
	                    align: 'center',
	                    verticalAlign: 'bottom'
	                  }
	                }
	              }]
	            },
	  					exporting: {
	  					  enabled: true
	  				  }
	          },
	          option1:{
	  					credits: {
	  						enabled: false
	  					},
	            chart: {
	              type: 'column',
	              height:500, 
	  						width:940,
	  						plotBackgroundColor:''
	            },
	            title: {
	              text: '月平均降雨量'
	            },
	            subtitle: {
	              text: '数据来源: 百度前端技术部'
	            },
	            xAxis: {
	              categories: [
	                '一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'
	              ],
	              crosshair: true
	            },
	            yAxis: {
	              min: 0,
	              title: {
	                text: '降雨量 (mm)'
	              }
	            },
	            tooltip: {
	              // head + 每个 point + footer 拼接成完整的 table
	              headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
	              pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
	              '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
	              footerFormat: '</table>',
	              shared: true,
	              useHTML: true
	            },
	            plotOptions: {
	              column: {
	                borderWidth: 0,
	                pointWidth:25, //柱子宽度
	              }
	            },
	            series: [{
	              name: '东京',
	              data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5,500, 194.1, 95.6, 54.4],
	              color: 'skyblue',//柱子颜色
	  						Width: '20px'
	            }],
	            exporting:{
	  						 enabled:true //用来设置是否显示‘打印’,'导出'等
	  					}
	          }
    }
  },
  methods: {
    chartChange(){
    	console.log(this.$refs.wish);
    	console.log(this.$refs.wish.chartObj);
    	console.log(this.$refs.ying.chartObj);
      this.$refs.wish.chartObj.series[0].update({
    		data: [29.9, 71.5, 306.4, 429.2, 144.0, 176.0, 135.6, 248.5, 216.4, 194.1, 95.6, 54.4]
    	});
    	this.$refs.ying.chartObj.series[0].update({
    		data: [29.9, 71.5, 306.4, 429.2, 144.0, 176.0, 135.6, 248.5, 216.4, 194.1, 95.6, 54.4]
    	});
    },
  },
  components:{XChart},
  created(){
	  //页面刚进入时开启长连接
	  //this.initWebSocket();
	  myvue = this;
	  myvue.other.title.text = '2010 ~ 2017 年太阳能行业就业人员发展情况';
        myvue.other.subtitle.text = '数据来源：百度大搜索';
        myvue.other.series = myvue.data;     //数据
        myvue.other.yAxis.title.text = '就业人数';   //数据
        myvue.option = myvue.other;
	 }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
