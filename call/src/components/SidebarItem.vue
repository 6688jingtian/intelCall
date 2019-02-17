<template>
  <div class="sidebar">
    <nav class="sidebar-nav">
      <ul class="nav">
        <template v-for="item in routes">
            <router-link tag="li"  class="nav-item nav-dropdown"  v-if="!item.hidden&&item.children&&item.children.length>0" :to="item.path+''+item.children[0].path" disabled>

             
                <div class="nav-link nav-dropdown-toggle" @click="handleClick"><img :src=item.icon>{{ item.name}}</div>
                   <ul class="nav-dropdown-items">
                     <li class="nav-item" v-for="child in item.children" v-if='!child.hidden' @click="addActive">
                        <!-- <router-link :to="child.path+'/'+item.children[0].path" class="nav-link" ><i class="icon-puzzle"></i> {{ child.name}} </router-link> -->
                        <router-link :to="item.path+'/'+child.path+'/'+child.children[0].path" class="nav-link" v-if="!child.hidden&&child.children" ><!-- <Icon :type="child.icon" color="white" /> --><span class="twoTitle">{{ child.name}}</span></router-link> 
                         <router-link :to="item.path+'/'+child.path" class="nav-link" v-else="!child.children" ><!-- <Icon :type="child.icon"  color="white" /> --><span class="twoTitle">{{ child.name}}</span> </router-link> 
                   </li>
                   </ul>
               </router-link>

        <li class="nav-item" v-if="!item.hidden&&!item.children">
          <router-link  :to="item.path" class="nav-link" exact><img :src=item.icon>{{ item.name}} </router-link>
        </li>

        </template>
</ul>
    </nav>
  </div>
</template>

<script>

    export default {
      name: 'SidebarItem',
      props: {
        routes: {
          type: Array
        }
      },
      methods: {
            handleClick:function (e) {
              e.preventDefault()
              e.target.parentElement.classList.toggle('open')
            },
            addActive: function(e){
              e.preventDefault()
              e.target.parentElement.parentElement.parentElement.classList.add('open')
            }
        },
        mounted(){
          console.log(this.routes)
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    .wscn-icon {
        margin-right: 10px;
    }
    .hideSidebar .menu-indent{
        display: block;
        text-indent: 10px;
    }
</style>
<style scoped>
  .nav-item .nav-dropdown .open>a{
    display: none !important;
  }
  /deep/ .router-link-exact-active .router-link-active{
    color: white !important; 
  }
</style>
