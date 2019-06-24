<template>
  <section class="hero is-medium">
    <!-- Hero head: will stick at the top -->
    <div class="hero-head">
      <nav class="navbar">
        <div class="container">
          <!-- <div class="navbar-brand">
            <a class="navbar-item">
              <font-awesome-icon icon="baseball-ball" class="is-size-3"/>
            </a>
          </div> -->
        </div>
      </nav>
    </div>

    <!-- Hero content: will be in the middle -->
    <div class="hero-body">
      <div class="container has-text-centered">
        <figure class="image  is-128x128">
          <img class="is-rounded is-centered" src="toshi.jpg">
        </figure>
        <h3 class="subtitle is-4 has-text-weight-semibold">Hello, World :)</h3>
        <h1 class="title is-2">I'm Toshimitsu Kugimoto.</h1>
        <h3 class="subtitle is-4 has-text-weight-semibold"> Software Engineer.</h3>
      </div>

      <div class="container">
        <div class="social has-text-centered">
          <font-awesome-icon :icon="['fab', 'facebook-f']" class="is-size-3 social-icon"/>
          <font-awesome-icon :icon="['fab', 'github']" class="is-size-3 social-icon"/>
          <font-awesome-icon :icon="['fab', 'instagram']" class="is-size-3 social-icon"/>
          <font-awesome-icon :icon="['fab', 'linkedin-in']" class="is-size-3 social-icon"/>
          <font-awesome-icon icon="sticky-note" class="is-size-3 social-icon"/>
        </div>
      </div>
    </div>

    <div class="hero-foot">
      <nav class="tabs is-boxed is-fullwidth">
        <div class="container">
          <ul>
            <li class="is-active">
              <a>About</a>
            </li>
            <li>
              <a>Experience</a>
            </li>
            <li>
              <a>Work</a>
            </li>
            <li>
              <a>Education</a>
            </li>
            <li>
              <a>Components</a>
            </li>
            <li>
              <a>Layout</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </section>
</template>

<style lang="scss">
.hero {
  background-color: #FDF6E3 !important;
  .hero-body {
    .container {
      margin: 0 auto;
      .subtitle {
        color: dark-orange;
      }
      .title {
        color: dark-orange;
      }
      img {
        box-shadow: 0 0 5px black;
      }
      .title {
        padding: 10px;
      }
      .subtitle {
        padding: 10px;
      }
      figure {
        margin: 0 auto;
      }

      .social {
        .social-icon {
          margin: 50px 10px 0px 10px;
        }
      }
    }
  }
}
</style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Intro extends Vue {
  message: string = "Hello world !";
}
</script>
