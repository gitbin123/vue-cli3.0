<template>
  <div class="about">
    <h1>This is an about page</h1>
    {{ this.$route.meta.status }}
  </div>
</template>




<script>
import  "@/store.js";

export default {
  name: "home",
  data() {
    return {
      name: "张三",
      dataMethod: 1
    };
  },
  mounted() {
    this.$store.state.arr.push({name:'王五'})
    console.log(this.$store.state.arr);
  }
};
</script>