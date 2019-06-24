<template>
  <Intro />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Intro from '~/components/Intro.vue'

@Component({
  components: {
    Intro
  }
})
export default class Home extends Vue {}
</script>
