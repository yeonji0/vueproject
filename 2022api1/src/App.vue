<template>
  <ul>
    <li><router-link to="/">home</router-link></li>
    <li><router-link to="/post">post</router-link></li>
    <li @click="$router.push({name:'photo'})">photo</li>

  </ul>
  <router-view></router-view>
</template>

<script>
export default {
  

}
</script>

<style>

</style>