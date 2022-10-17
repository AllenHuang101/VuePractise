<template>
  <div>AppContent</div>
  <button @click="changeTitle">修改title</button>
  <!-- <home></home>
  <hr />
  <about></about> -->

  <button @click="currentPage = 'home'">Home</button>
  <button @click="currentPage = 'about'">about</button>

  <component :is="currentPage"></component>

  <div class="content"></div>
  <br /><br /><br /><br /><br /><br /><br /><br />
  <br /><br /><br /><br /><br /><br /><br /><br />
  <br /><br /><br /><br /><br /><br /><br /><br />
  <br /><br /><br /><br /><br /><br /><br /><br />
  <br /><br /><br /><br /><br /><br /><br /><br />
  <br /><br /><br /><br /><br /><br /><br /><br />
  <br /><br /><br /><br /><br /><br /><br /><br />
  <br /><br /><br /><br /><br /><br /><br /><br />
  <br /><br /><br /><br /><br /><br /><br /><br />
  <br /><br /><br /><br /><br /><br /><br /><br />
  <br /><br /><br /><br /><br /><br /><br /><br />
</template>

<script>
import { ref } from 'vue';
import Home from './views/Home.vue';
import About from './views/About.vue';
import useTitle from './hooks/useTitle';

export default {
  components: {
    Home,
    About,
  },
  setup() {
    const currentPage = ref('home');

    function changeTitle() {
      useTitle('App');
    }

    return {
      changeTitle,
      currentPage,
    };
  },
};
</script>

<style scoped>
.content {
  width: 3000px;
  height: 100px;
  background-color: yellow;
}
</style>
