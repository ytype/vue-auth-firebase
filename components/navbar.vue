<template>
  <div>
    <nav class="navbar">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item brand-text" href="../index.html">
            {{ title }}
          </a>
          <div
            class="navbar-burger burger"
            :class="{ 'is-active': showNav }"
            data-target="navMenu"
            @click="showNav = !showNav"
          >
            <span />
            <span />
            <span />
          </div>
        </div>
        <div id="navMenu" class="navbar-menu" :class="{ 'is-active': showNav }">
          <div class="navbar-end">
            <a class="navbar-item" href="signin.html">
              login
            </a>
            <a class="navbar-item" href="profile.html">
              profile
            </a>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  props: ['title'],
  data () {
    return {
      showNav: false
    }
  }
}
</script>

<style scope>
.navbar-brand, .navbar-tabs {
    background-color: #171727;
}
  .navbar-item.brand-text {
    font-weight: 300;
  }
  .navbar-item,
  .navbar-link {
    font-size: 14px;
  }
.navbar.is-white .navbar-burger {
    color: #ffffff;
}
a.navbar-item, .navbar-link {
    color: white;
}
@media screen and (max-width: 1023px){
    .navbar-menu.is-active {
    display: block;
    background-color: #171727;
}
}
@media screen and (min-width: 1024px){
.navbar {
    background-color: #171727;
}
}

</style>
