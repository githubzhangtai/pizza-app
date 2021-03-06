import Home from './components/Home'
import Menu from './components/Menu'
import Admin from './components/Admin'
import Login from './components/Login'
import Register from './components/Register'
import About from './components/about/About'

// 二级路由
import Contact from './components/about/Contact'
import History from './components/about/History'
import Delivery from './components/about/Delivery'
import OrderingGuide from './components/about/OrderingGuide'

// 三级路由
import Phone from './components/about/contact/Phone'
import PersonName from './components/about/contact/PersonName'

export const routes = [
  {path:'/',name:'homeLink',components:{
      default:Home,
      'orderingGuide':OrderingGuide,
      'delivery':Delivery,
      'history':History
    }},
  {path:'/menu',name:"menuLink",component:Menu},
  {path:'/admin',name:'adminLink',component:Admin,
    //beforeEnter:(to,from,next) =>{
    // 路由独享守卫
    // alert("非登录状态，不能访问该页面！")
    // next("/login")
    // }
  },
  {path:'/register',name:'registerLink',component:Register},
  {path:'/login',name:'loginLink',component:Login},
  {path:'/about',name:'aboutLink',redirect:'/about/contact',component:About,children:[
      {path:"/about/contact",name:"contactLink",redirect:'/personName',component:Contact,children:[
          {path:'/phone',name:"phoneNumber",component:Phone},
          {path:'/personName',name:"personName",component:PersonName},
        ]},
      {path:'/history',name:"historyLink",component:History},
      {path:"/delivery",name:"deliveryLink",component:Delivery},
      {path:"/orderingGuide",name:"orderingGuideLink",component:OrderingGuide}
    ]},
  {path:'*',redirect:'/'},
]
