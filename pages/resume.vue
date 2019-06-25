<template>
  <section>
    <Resume />
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Resume from '~/components/Resume.vue'

@Component({
  components: {
    Resume
  }
})
export default class ResumePage extends Vue {}
</script>
