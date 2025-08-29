<template>
<div  class="m-4">
  <div  class="d-flex justify-content-end"><b-button @click="showModal=true">
       <b-icon icon="plus"></b-icon> Add Topic </b-button>
  </div> 
    
     <AddTopic  v-model="showModal" />
    <TopicBox/>

</div>
</template>

<script>
import AddTopic from './AddTopic.vue';
import TopicBox from './TopicBox.vue';

export default{
 components: {
        AddTopic,
        TopicBox
        },
  data() {
    return {
      showModal: false,
    };
  },

    methods:{
        
    }
}

</script>