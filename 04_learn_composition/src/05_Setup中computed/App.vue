<template>
  <!-- <h2>{{ names.firstName + ' ' + names.lastName }}</h2> -->
  <h2>{{ fullname }}</h2>
  <button @click="setFullname">設置Fullname</button>
  <h2>{{ scoreLevel }}</h2>
</template>

<script>
import { reactive, computed, ref } from 'vue';
export default {
  setup() {
    // 1.定義數據
    const names = reactive({
      firstName: 'Allen',
      lastName: 'Huang',
    });

    // const fullname = computed(() => {
    //   return names.firstName + ' ' + names.lastName;
    // });

    const fullname = computed({
      set: function (newValue) {
        const tempNames = newValue.split(' ');
        names.firstName = tempNames[0];
        names.lastName = tempNames[1];
      },
      get: function () {
        return names.firstName + ' ' + names.lastName;
      },
    });

    const setFullname = () => {
      fullname.value = 'coder why';
    };
    
    // 2.定義score
    const score = ref(89);
    const scoreLevel = computed(() => {
      return score.value >= 60 ? '及格' : '不及格';
    });

    return {
      names,
      fullname,
      scoreLevel,
      setFullname,
    };
  },
};
</script>

<style lang="scss" scoped></style>
