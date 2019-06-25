<template>
  <section>
    <Experience />
    <Details />
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Experience from '~/components/Experience.vue'
import Details from '~/components/Details.vue'

@Component({
  components: {
    Experience,
    Details
  }
})
export default class WorkPage extends Vue {}
</script>
