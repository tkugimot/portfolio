<template>
  <div>
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

      <Tab />
      
    </section>
    <nuxt />
    <footer class="footer">
      <div class="content has-text-centered">
        <p>
          <strong class="has-text-white">Copyright &copy; Toshimitsu Kugimoto 2019</strong>
        </p>
      </div>
    </footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Tab from '~/components/Tab.vue'

@Component({
  components: {
    Tab
  }
})
export default class Default extends Vue {}
</script>

<style lang="scss">
@import "~assets/scss/mystyles.scss";

html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

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

.footer {
  background-color: $dark-brown;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

</style>
