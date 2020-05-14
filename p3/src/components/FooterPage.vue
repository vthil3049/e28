<template>
  <div class='text-center bg-footer'>
    Copyright &copy; - Gate City Events, New Hampshire {{getCopyRightYear()}}<br />
    Homepage video by <a href="https://www.postermywall.com/" target="_blank">www.postermywall.com</a>
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
.bg-footer {
  background-color: goldenrod;
  color: white;
}
</style>
