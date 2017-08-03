new Vue({
  el: '#app',
  data: () => ({
    current: 'login'
  }),
  methods: {
    navigate (component) {
      this.current = component
    }
  }
})
