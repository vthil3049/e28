<!-- <a target="_blank" href="https://icons8.com/icons/set/music">Music icon</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a> -->
<template>
  <div class='text-center'>
    <h4 class='text-center'>Items</h4>
    <ul  class="list-group">
      <li v-for="item in items" v-bind:key="item.name"  class="list-group-item">
        {{item.title}}
      </li>
    </ul>

  </div>
</template>

<script>
//const {items}('../common/program.json');
import items from '@/common/program.json';

export default {
  name: 'ProgramPage',
  props: {

  },
  data: function(){
    return {
      title: "Program",
      items: items

    }
  },
  mounted: function() {
    console.log(items);
    // this.items = items;
    // // console.log(this.items);
    // for(let i=0; i < items.length; i++){
    //   console.log(items[i].name);
    // }


  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
