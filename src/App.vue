<template>
  <v-app class="indigo">
    <v-main>
        <nav style="padding:12px">
          <router-link to="/">Home</router-link>
          <span style="margin:0 8px">|</span>
          <router-link to="/signup">Signup</router-link>
          <span style="margin-left:16px;color:rgba(255,255,255,0.8)">active: {{$route.path}}</span>
        </nav>
        <router-view>HOME</router-view>
    </v-main>
  </v-app>
</template>

<script>


export default {
  name: 'App',

  components: {
    
  },

  data: () => ({
    //
  }),
}
</script>
