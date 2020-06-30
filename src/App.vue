<template>
  <div id="app">
    <!-- <img src="./assets/logo.png" /> -->
    <router-view />
    <div>
      <a-date-picker @change="onChange" />
      <br />
      <a-month-picker @change="onChange" placeholder="Select month" />
      <br />
      <a-range-picker @change="onChange" />
      <br />
      <a-week-picker @change="onChange" placeholder="Select week" />
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    onChange(date, dateString) {
      console.log(date, dateString);
    },
  },
};
</script>

<style src="@/style/scss/app.scss" scoped lang="scss"></style>
<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
