<template>
  <section>
    <About />
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import About from '~/components/About.vue'

@Component({
  components: {
    About
  }
})
export default class AboutPage extends Vue {}
</script>
