<template>
  <div class="error_container">
    <div>
      <h1>
        <b><i>Pardon? 404 Page not found!!</i></b>
      </h1>
      <br>
      <h5>
        The page you are trying to access has been moved or does not exist !!
      </h5>
      <br>
      <button @click="goHome" class="btn btn-dark"> I'm lost guide me </button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goHome() {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
.error_container {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(132, 99, 231);
  min-height: 90vh;
}

.error_container div {
  color: white;
  margin: auto auto;
}
</style>
