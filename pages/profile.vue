<template>
  <div>
    {{ this.$store.getters.user }}
    <button @click.prevent="logout">
      Logout
    </button>
  </div>
</template>

<script>
export default {
  computed: {
    user () {
      return this.$store.getters.user
    }
  },
  watch: {
    user (value) {
      if (value !== null && value !== undefined) {

      } else {
        this.$router.push('/signin')
      }
    }
  },
  methods: {
    logout () {
      this.$store.dispatch('logout')
      this.$router.push('/Signin')
    }
  }
}
</script>
