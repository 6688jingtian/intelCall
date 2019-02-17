import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import mainpage from '@/components/mainpage'
import workbench from '@/components/workbench'
import taskcre from '@/components/taskcre'
import robot from '@/components/robot'
import sidebar from '@/components/sidebar'
import datachart from '@/components/datachart'
import music from '@/components/music'

Vue.use(Router)

export default new Router({
  routes: [
		{
			path:'/',
			component: login
		},
		{
		  path: '/mainpage',
		  component: mainpage,
		  children:[
				{
					path:'',
					component: workbench
				},
				{
				  path: 'workbench',
				  component: workbench
				},
				{
				  path: 'taskcre',
				  component: taskcre
				},
				{
				  path: 'robot',
				  component: robot
				},
				{
				  path: 'datachart',
				  component: datachart
				},
				{
				  path: 'music',
				  component: music
				}
		  ]
		},
		{
			 path: '/sidebar',
			 component: sidebar,
		}
  ]
})
// router.beforeEach((to,from,next)=>{
// 		console.log(to);
// 		console.log(from);
// 		console.log(next);
//         if(to.path=="/"){
//              next();
//         }else{
//             if(sessionStorage.username){
//                 next();
//             }else{
//                 next({path:"/"})
//             }
//         }
// })