<template>
  <div>
    <ul>
      <li v-for="user in userlist" :key="user.id">
        {{ user.name }}

        <!-- <nuxt-link :to="'user/'+ user.id"
          >go to more details</nuxt-link
        > -->
        <nuxt-link :to="{ name: 'user/', params: { id: '1' } }"
          >go to more details</nuxt-link
        >
        <nuxt-link :to="`user/${user.id}`">go to more details</nuxt-link>
      </li>
    </ul>
  </div>
</template>


<script>
export default {
  data() {
    return {
      userlist: "",
    };
  },

  async beforeCreate() {
    await fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => (this.userlist = json));
  },
};
</script>