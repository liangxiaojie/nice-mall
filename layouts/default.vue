<template>
  <div class="warp-container">
    <nuxt/>
  </div>
</template>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 100px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

.warp-container {
  position: relative;
  height: 100%;
  font-size: .12rem;
  padding-bottom: .56rem;
  margin: 0 auto;
}

@media screen and (min-width: 769px) {
  .warp-container {
    width: 768px;
  }
}

.svg-inline--fa {
  width: .18rem;
}

.divider_line {
  height: .08rem;
  background-color: rgb(245, 245, 245);
}
</style>
