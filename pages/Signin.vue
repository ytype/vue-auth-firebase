<template>
  <div>
    <p>user: {{ user }}</p>
    <p>error: {{ error }}</p>
    <p>loading: {{ loading }}</p>
    <form @submit.prevent="onSignin">
      <input
        id="email"
        v-model="email"
        name="email"
        label="Email"
        type="email"
        required
      >
      <input
        id="password"
        v-model="password"
        name="password"
        label="Password"
        type="password"
        required
      >
      <button type="submit" :disabled="loading" :loading="loading">
        Sign in
      </button>
      <button @click.prevent="onSigninGoogle">
        Login with Google
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  computed: {
    user () {
      return this.$store.getters.user
    },
    error () {
      return this.$store.getters.error
    },
    loading () {
      return this.$store.getters.loading
    }
  },
  watch: {
    user (value) {
      if (value !== null && value !== undefined) {
        this.$router.push('/profile')
      }
    }
  },
  methods: {
    onSignin () {
      this.$store.dispatch('signUserIn', { email: this.email, password: this.password })
    },
    onSigninGoogle () {
      this.$store.dispatch('signUserInGoogle')
    },
    onSigninFacebook () {
      this.$store.dispatch('signUserInFacebook')
    },
    onSigninGithub () {
      this.$store.dispatch('signUserInGithub')
    },
    onSigninTwitter () {
      this.$store.dispatch('signUserInTwitter')
    },
    onResetPassword () {
      if (this.email === '') {
        return this.$store.dispatch('setError', { message: 'Email can not be blank' })
      }
      this.$store.dispatch('resetPasswordWithEmail', { email: this.email })
    },
    onDismissed () {
      this.$store.dispatch('clearError')
    }
  }
}
</script>
