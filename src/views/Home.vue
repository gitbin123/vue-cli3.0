<template>
  <div class="home">
    <img
      alt="Vue logo"
      src="../assets/logo.png"
      v-if="this.$route.meta.status"
    />51452
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    {{ dataMethod }}-{{ name }}{{ this.$route.meta.status }}51525{{
      this.$httpUrl
    }}
    <router-view meat="this.router.meta" :dataMethod="dataMethod"></router-view>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  },
  data() {
    return {
      name: "张三",
      dataMethod: 1
    };
  },
  mounted() {
    console.log(this.$httpUrl.httpurl);
    this.$httpUrl.gethttp("111", "http://www.nai").then(function(data) {
      console.log(data);
    });
  }
};
</script>
