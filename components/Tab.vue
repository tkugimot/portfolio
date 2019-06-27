<template>
    <div class="hero-foot">
        <nav class="tabs is-boxed is-fullwidth">
          <div class="container">
            <ul>
              <li @click="activate('about')" :class="{ 'is-active': page.aboutIsActive }">
                <nuxt-link to="/" class="is-size-6 has-text-weight-semibold">About</nuxt-link>
              </li>
              <li @click="activate('work')" :class="{ 'is-active': page.workIsActive }">
                <nuxt-link to="/work" class="is-size-6 has-text-weight-semibold">Work</nuxt-link>
              </li>
              <li @click="activate('education')" :class="{ 'is-active': page.educationIsActive }">
                <nuxt-link to="/education" class="is-size-6 has-text-weight-semibold">Education</nuxt-link>
              </li>
              <li @click="activate('resume')" :class="{ 'is-active': page.resumeIsActive }">
                <nuxt-link to="/resume" class="is-size-6 has-text-weight-semibold">Resume</nuxt-link>
              </li>
            </ul>
          </div>
        </nav>
    </div>
</template>

<style lang="scss" scoped>
@import "~assets/scss/mystyles.scss";

.is-active {
    a:active {
      background-color: $yamabuki !important;
      border-color: $dark-orange !important;
    }
}
</style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { namespace } from 'vuex-class';
import * as page from '~/store/modules/page';

const Page = namespace(page.name);

@Component
export default class Tab extends Vue {
    @Page.Getter page

    @Page.Action activate
}
</script>
