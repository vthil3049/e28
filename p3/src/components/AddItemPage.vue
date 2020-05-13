<template>
  <div>
    <h2>Add a new Item</h2>

    <label for='title'>Title</label>
    <input type='text' v-model='item.title' id='title' />

    <label for='type'>Item type</label>
    <input type='text' v-model='item.type' id='type' />

    <label for='duration'>Performance time(in minutes):</label>
    <input type='text' v-model='item.duration' id='duration' />

    <label for='performers'>Performers(Enter comma separated names)</label>
    <input type='text' v-model='item.performers' id='performers' />

    <label for='description'>Description</label>
    <textarea v-model='item.description' id='description'></textarea>

    <input type='submit' @click='addNewItem()' value='Add' /><br />
    <transition name='fade'>
      <div
      data-test='item-added-confirmation'
      class='alert'
      v-if='added'
      >New item {{ item.title }} was added!</div>
    </transition>
  </div>
</template>

<script>
import * as app from '@/common/app.js';
//import * as utils from '@/common/utils';
export default {
  name: '',
  data: function() {
    return {
      added: false,
      item: {
        title: '',
        type: '',
        duration: '',
        performers: [],
        description: '',
      }
    };
  },
  methods: {
    addNewItem: function(){
      if (this.item.title.length > 0){
        app.api.add('items', this.item).then(response => {
          if (response.includes('Error')) {
            alert(response);
          } else {
            // Because we're not redirecting the user after adding a product, we should reset the validation so they can add a new product
            //this.$v.$reset();

            this.added = true;

            setTimeout(() => (this.added = false), 3000);

            this.item = {
              title: '',
              type: '',
              duration: '',
              performers: [],
              description: '',
            };

            //update the store to reflect the correct Items
            this.$store.dispatch('setItems');
          }
        });
      }
    }
  }
};
</script>

<style scoped>
input {
  font-size: 15pt;
}

textarea,
input[type='text'] {
  width: 50%;
}

textarea {
  height: 75px;
  display: block;
  margin: auto;
}

label {
  margin-top: 20px;
  display: block;
  font-weight: bold;
}

input[type='submit'] {
  display: inline-block;
  margin-top: 10px;
}
</style>
