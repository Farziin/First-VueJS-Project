<!--template of the page-->
<template>

  <section>
    <!--top navigation of the page-->

    <div class="top_navigation">
      <a href="/" style="margin-left: 4%">Home</a>
      <a href="posts">Posts</a>
      <a href="comments" class="active">Comments</a>
    </div>

    <!--show comments that come from wordpress-->
    <div v-for="item in items" class="comment">
      <img v-bind:src="item.author_avatar_urls" class="contact_image">
      <span class="name">{{ item.author_name }}</span>
      <br>
      <div class="comment_text" v-html="item.content.rendered"></div>
    </div>

  </section>
</template>

<!--script of the page-->
<script>
  import * as axios from 'axios'

  // give comments from digiato's website
  export default {
    async asyncData () {
      let {data} = await axios.get(`http://digiato.com/wp-json/wp/v2/comments`)
      return {items: data}
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

  /* set border and margin and color for comments */
  .comment {
    border: solid lightgray;
    border-radius: 5px;
    margin-top: 20px;
    margin-left: 15%;
    margin-right: 15%;
    padding: 10px 30px;
  }

  /* set background color when hover comments */
  .comment:hover {
    background-color: lightgray;
  }

  /* set size and position od contact image */
  .contact_image {
    height: 50px;
    width: 50px;
    float: left;
  }

  /* style of contact's name */
  .name {
    float: left;
    font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    margin-left: 10px;
  }

  /* style of the text of comments */
  .comment_text {
    font-family: IRANSansWeb;
    text-align: right;
    dir: rtl;
  }

</style>
