<template>
  <ul>
    <li v-for="(item,i) in 10" :key="i">
      <img :src="viewData[i].url" alt="">
      {{viewData[i].title}}
    </li>
  </ul>
</template>

<script>
import axios from "axios"

export default {
data(){
  return {
    viewData:[],
    viewList:[]
  }
},
created(){
  // this.datacall()
  this.datacall(),
  this.Listcall()
},
methods:{
  datacall(){
    axios
  .get('https://jsonplaceholder.typicode.com/photos')
  .then((v)=>{
    console.log(v.data)
    this.viewData = v.data
  })
  .catch(function(error){
    console.log('자료없음')
  })
  },
  Listcall(){
    axios
    .get('https://jsonplaceholder.typicode.com/')
    .then((v)=>{
      this.viewList = v.List
    })
    .catch(function(error){
      console.log("없음")
    })
  }
}
}
</script>

<style>
*{margin: 0;padding: 0;}
#app{margin: 0 auto; width: 1200px;}
ul,li{list-style: none;}
li img{width: 50px;height: 50px;}
</style>