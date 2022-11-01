<template>
  <div>
    {{ userDetail.name }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      userDetail: "",
    };
  },

  async beforeCreate() {
    await fetch(
      `https://jsonplaceholder.typicode.com/users/${this.$route.params.id}`
    )
      .then((response) => response.json())
      .then((json) => (this.userDetail = json));
  },
};
</script>