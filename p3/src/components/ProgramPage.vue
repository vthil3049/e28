<!-- <a target="_blank" href="https://icons8.com/icons/set/music">Music icon</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a> -->
<template>
  <div>
    <h4 class='text-center'>Items</h4>
    <table class="table">
      <thead class="thead-light">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Title</th>
          <th scope="col">Type</th>
          <th scope="col">Performers</th>
          <th scope="col">Description</th>
          <th scope="col">
            <i class="fas fa-trash-alt"></i>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, name, index) in items" :key='item.title'>
          <th scope="row">{{index+1}}</th>
          <td>{{item.title}}</td>
          <td>{{item.type}}</td>
          <td>{{getPerformers(item)}}</td>
          <td>{{item.description}}</td>
          <td>
            <button class="btn" title='Delete item' @click="deleteItem(item, name)"><i class="fa fa-trash"></i></button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
//const {items}('../common/program.json');
// import items from '@/common/program.json';
//import * as utils from '@/common/utils';
import * as app from '@/common/app.js';

export default {
  name: 'ProgramPage',
  props: {

  },
  data: function(){
    return {
      title: "Program",
      //items: []
    }
  },
  methods: {
    getPerformers: function(item){
      let performerNames='';
      if (item.performers.length == 1){
        performerNames= item.performers[0];
      }
      else {
        for (let i=0; i < item.performers.length; i++){
          let nextPerformer = item.performers[i];
          performerNames += (i > 0)?',':'';
          performerNames += nextPerformer;
        }
      }
      return performerNames;
    },
    deleteItem: function(item, name){
      //let program = this.$store.state.items;
      console.log('Deleting item ', item, ' with ', name);
      let ref = app.api.deleteAsync('items', name);
      console.log("ref is ", ref);
      ref.then( () =>{
        console.log("Delete from collection was successful");
        this.$store.dispatch('setItems');
      })
    }
  },
  computed: {
    items: function(){
      return this.$store.state.items;
    }
  },
  mounted: function() {
    let program = this.$store.state.items; //utils.getProgram();
    //this.items = program;
    console.log("Final program is ", program);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
