<template>
  <section>
    <Education />
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Education from '~/components/Education.vue'

@Component({
  components: {
    Education
  }
})
export default class EducationPage extends Vue {}
</script>
