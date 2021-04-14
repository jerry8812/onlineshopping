<template>
  <div id="recommendationView">
    <div class="recommendationItem" 
    v-for="(recommendation, index) in recommendations" :key="index">
      <img :src="recommendation.url" :alt="recommendation.description">
      <div>{{recommendation.description}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecommendationView",
  props: {
    recommendations: {
      type: Array,
      default: []
    }
  }
}
</script>

<style>
  #recommendationView {
    display: flex;
    width: 100%;
    text-align: center;
    font-size: 13px;
    padding: 9px 0 6px;
    box-shadow: 0px 4px 5px rgba(255, 129, 152, .4);
  }

  .recommendationItem {
    flex: 1;
  }

  .recommendationItem img {
    width: 60px;
    height: 60px;
    border-radius: 55%;
    margin-bottom: 8px;
  }
</style>