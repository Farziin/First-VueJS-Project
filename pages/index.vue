<!--template of the page-->
<template>
  <section class="container">
    <div>
      <img src="~assets/personal-picture.jpg" height="200px" width="200px">
      <h1 class="title">
        Farzin Heidary
      </h1>
      <!--link for my github account-->
      <a style="font-family: 'Segoe UI'; font-size: 30px">Github: </a>
      <a href="https://github.com/farziin" class="github-link">@farziin</a>

      <h2 class="subtitle">
        First Nuxt Project
      </h2>
      <!--links for posts and comments pages-->
      <div class="links">
        <a href="posts" target="_parent" class="button--grey">Posts</a>
        <a href="comments" target="_parent" class="button--green">Comments</a>
      </div>

    </div>
  </section>
</template>

<style scoped>

  .github-link{
    font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
    text-decoration: none;
    font-size: 30px;
  }

  .container
  {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .title
  {
    font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
  }

  .subtitle
  {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
  }

  .links
  {
    padding-top: 15px;
  }

</style>
