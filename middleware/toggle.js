export const toggle = {
  data() {
    return {
      show: true
    }
  },
  methods: {
      toggle: function() {
        this.show = !this.show;
        console.log("toggle has run")
    }
  }
}
