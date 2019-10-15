<template>
  <div class="about">
    <h1>我是about1的界面</h1>
    {{ this.$route.meta.status }}
    <input @change="aaa" />
  </div>
</template>
<script>
export default {
  methods: {
    aaa: function() {
      console.log(1);
    }
  }
};
</script>

