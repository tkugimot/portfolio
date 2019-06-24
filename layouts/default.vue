<template>
  <div>
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

<style lang="scss">
$dark-orange: #ff8300;
$dark-brown: #723008;

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
