<template>
  <div id="app">
   
    <HeaderComp/>
    <AllTopics/>

  </div>
</template>

<script>
import AllTopics from './components/AllTopics.vue';
import HeaderComp from './components/HeaderComp.vue';


export default {
  name: 'App',
  components: {
    HeaderComp,
    AllTopics
  }
}
</script>


