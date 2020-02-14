<template>
  <div>
    <section id="particles-js" class="hero pannel background is-large is-bold">
      <div class="hero-body">
        <div class="container">
          <div class="wrap-banner">
            <vue-particles
              color="#dedede"
              :particle-opacity="1"
              :particles-number="150"
              shape-type="circle"
              :particle-size="4"
              lines-color="#dedede"
              :lines-width="1"
              :line-linked="true"
              :line-opacity="0.4"
              :lines-distance="150"
              :move-speed="3"
              :hover-effect="true"
              hover-mode="grab"
              :click-effect="true"
              click-mode="push"
            />
          </div>
          <h1 class="title has-text-centered">
            Green, Large, with Gradient
          </h1>
        </div>
      </div>
    </section>
    <div class="columns bar">
      h
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.bar {
  background: rgb(75,182,208);
background: linear-gradient(90deg, rgba(75,182,208,1) 0%, rgba(37,197,199,1) 100%);

}
section {
  position: relative;
}
canvas {
      position: absolute;
      z-index:1;
}
.hero-body {
  height: 2em;
}
.title {
  color: white;
}
.title-text {
  color:white;

  z-index: 100;
}
.column {
  padding: 0;
}
.background {
    background-color: #171727;
}
</style>
