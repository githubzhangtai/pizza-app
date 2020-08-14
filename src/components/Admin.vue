<template>
  <dev class="row">
    <div class="col-sm-12 col-md-8">
      <!-- new pizza -->
      <app-new-pizza></app-new-pizza>
    </div>
    <div class="col-sm-12 col-md-4">
      <!-- 品种展示 -->
      <h3 class="text-muted my-5">Menu</h3>
      <table class="table">
        <thead class="table-default">
        <tr>
          <th>品种</th>
          <th>删除</th>
        </tr>
        </thead>
        <tbody v-for="item in getMenuItems" :key="item.name">
        <tr>
          <td>{{item.name}}</td>
          <td>
            <button @click="deleteData(item)" class="btn btn-outline-danger btn-sm">&times;</button>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </dev>
</template>

<script>
import NewPizza from './NewPizza'
    export default {
        // name: "Admin",
        data(){
          return{
            getMenuItems:[]
          }
        },
        components:{
          'app-new-pizza':NewPizza
        },
        created(){
          fetch("https://pizza-app-ffbb3.firebaseio.com/menu.json")
            .then(res => {
                return res.json()
            })
            .then(data => {
              // console.log(data)
              let menuArray = []
              for (let key in data){
                data[key].id = key
                menuArray.push(data[key])
                this.getMenuItems = menuArray
                console.log(this.getMenuItems)
              }
            })
        },
        methods:{
          deleteData(item){
            fetch("https://pizza-app-ffbb3.firebaseio.com/menu/"+item.id+"/.json",{
                method:"DELETE",
                headers:{
                  'Content-type':'application/json'
                },
            })
              .then(res => res.json())
              .then(data => this.$router.go(0))
              .catch(err => console.log(err))
          }
        }
        // data(){
        //   return {
        //     name:"Henry"
        //   }
        // },
      // 组件内守卫：进入组件之前
      //   beforeRouteEnter: (to,from,next) => {
      //     // alert("Hello " + this.name);
      //     next(vm => {
      //       alert("Hello " + vm.name)
      //     })
      //   }

      //组件内守卫：离开组件之前
      // beforeRouteLeave (to ,from ,next) {
      //     if (confirm("确定离开吗？") === true){
      //       next();
      //     }else {
      //       next(false)
      //     }
      // }

    }
</script>

<style scoped>

</style>
