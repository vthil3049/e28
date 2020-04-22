<template>
  <div class='text-center'>
    <h1>{{ title }}</h1>
    <h2>Nashua High School Talent Show</h2>
    <h5>E.Brochure (Let's save some trees :)</h5>
    <h6 class='text-center text-danger'>Come see our talented students in action with a half hour musical by our talented teachers too</h6>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  props: {
    msg: String
  },
  data: function(){
    return {
      title: "Now Playing"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
