<template>
  <div class='text-center'>
    Copyright &copy; - Nashua High School, New Hampshire {{getCopyRightYear()}}<br />
  </div>
</template>

<script>
export default {
  name: 'FooterPage',
  data: function(){
    return {

    }
  },
  methods:{
    getCopyRightYear: function()
    {
      let today = new Date();
      return today.getFullYear().toString();
    }
  },
  mounted: function() {


  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
