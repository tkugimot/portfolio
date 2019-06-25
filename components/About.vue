<template>
  <div>
    About!
  </div>
</template>

<style lang="scss">

</style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class About extends Vue {
  message: string = "Hello world !";
}
</script>
