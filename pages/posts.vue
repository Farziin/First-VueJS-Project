<!--template of the page-->
<template>

  <section>

    <!--top navigation of the page-->
    <div class="top_navigation">
      <a href="/" style="margin-left: 4%">Home</a>
      <a href="posts" class="active">Posts</a>
      <a href="comments">Comments</a>
    </div>

    <!--show comments that come from wordpress-->
    <div v-for="post in posts" class="post">
      <h1>{{ post.title.rendered }}</h1>
      <div v-html="post.content.rendered"></div>
    </div>

  </section>

</template>

<!--script of the page-->
<script>
  import * as axios from 'axios'

  // give data from wordpress's post page
  export default {
    async asyncData () {
      let {data} = await axios.get(`https://wordpress.org/news/wp-json/wp/v2/posts`)
      return {posts: data}
    }

  }
</script>

<!--style of the page-->
<style>

  /* Style the navigation bar */
  .top_navigation {
    background-color: #333;
    overflow: hidden;
  }

  /* Style the links inside the navigation bar */
  .top_navigation a {
    font-family: Ubuntu;
    float: left;
    display: block;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
  }

  /* Change the color of links on hover */
  .top_navigation a:hover {
    background-color: #ddd;
    color: black;
  }

  /* Add a color to the active/current link */
  .top_navigation a.active {
    background-color: #4CAF50;
    color: white;
  }

  /* Style the posts */
  .post {
    font-family: Ubuntu;
    margin-top: 3%;
    margin-left: 10%;
    margin-right: 10%;
    border: solid lightgray;
    border-radius: 5px;
    padding: 10px 30px;
  }

  /* Style the posts when hover*/
  .post:hover {
    background-color: #e9e9e9;
  }

  /* set the margin of paragraphs */
  p{
    margin: 10px;
  }

  h1 {
    color: #0c7b30;
  }

  h2 {
    color: #0ea816;
    margin-left: 5px;
  }
</style>
