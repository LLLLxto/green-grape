<template>
  <div class="nav">
    <router-link to="/charge">
      <svg>
        <use xlink:href="#bill"/>
      </svg>
      记账
    </router-link>
    |
    <router-link to="bill">明细</router-link>
    |
    <router-link to="charts">图表</router-link>
  </div>
</template>

<script lang="ts">
let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext)
try{
  importAll(require.context('../assets/icons', true, /\.svg$/))
}catch(error){
  console.log(error)
}


export default {
  name: 'Nav'
};
</script>

<style scoped lang="scss">
.nav{
  border:1px solid red;
}
</style>