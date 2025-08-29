<template>
  <div v-if="topics.length > 0" class="mt-3">
    <div class="row">
      <div class="col-md-3 col-sm-6 mb-3" v-for="(topic, index) in topics" :key="index">
          <b-card class="h-100 card-shadow">
         
          <div class="d-flex align-items-center mb-2">
            <span 
              class="status-dot me-3" 
              :class="topic.public === 'Yes' ? 'bg-success' : 'bg-danger'"
            ></span>
            <span class="fw-bold">{{ topic.name }}</span>
          </div>

     
          <b-card-text class="text-center text-muted">
            {{ topic.description }}
          </b-card-text>
        </b-card>

          
      </div>
    </div>
  </div>
</template>

<script>
export default {

  computed: {
    topics() {
      return this.$store.state.topics
    }
  }
}
</script>
<style scoped>
.status-dot {
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
}
.card-shadow {
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  border: 1px solid #ddd;
  border-radius: 8px;
}
</style>