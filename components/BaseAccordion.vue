<template>
  <div class="wrapper">
    <div class="accordion" @click="toggleItem">
      <h2 class="title">
        <slot name="title"></slot>
      </h2>
    </div>
    <div v-show="show" class="content">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data: function() {
    return {
      show: false
    };
  },
  methods: {
    toggleItem: function() {
      this.show = !this.show;
    }
  }
};
</script>

<style scoped>
.wrapper {
  margin: 0 auto;
}
.accordion {
  cursor: pointer;
  margin: 0.5rem 0 0 0;
}
.title {
  margin: 0;
  color: white;
  background-color: #a179d2;
  border-radius: 8px;
  padding: .5rem 1rem;
  text-align: center;
}

.title:hover {
  background-color: #572e8a;
}
.content {
  color: #fff;
  text-align: center;
  margin: 0 auto 0;
  padding: .5rem 1rem;
  width: 94%;
  background-color: #f2f2f250;
  border-radius: 0 0 8px 8px;

}

@media only screen and (max-width: 474px) {
  h2 {
    font-size: 1.5rem;
    text-align: center;
  }
  img {
    display: none;
  }
}
</style>
