<template>
  <div>
    <h2>Add a new Item</h2>

    <label for='title'>Title <small>6 chars min</small></label>
    <input type='text' v-model='$v.item.title.$model' id='title'
    :class='{"form-input-error": $v.item.title.$error}' /><br />
    <div v-if='$v.item.title.$error'>
      <div class='form-feedback-error'>
        <div v-if='!$v.item.title.required'>
          Title is required
        </div>
        <div v-else>
          Minimum 6 chars
        </div>
      </div>
    </div>

    <label for='type'>Item type</label>
    <input type='text' v-model='$v.item.type.$model' id='type' :class='{"form-input-error": $v.item.type.$error}'  />
    <div v-if='$v.item.type.$error'>
      <div class='form-feedback-error'>
        <div v-if='!$v.item.type.required'>
          Title is required
        </div>
        <div v-else>
          Type has to be alphabetic chars
        </div>
      </div>
    </div>

    <label for='duration'>Performance time(in minutes)  <small>2-6 minutes</small></label>
    <input type='text' v-model='$v.item.duration.$model' id='duration'
    :class='{"form-input-error": $v.item.duration.$error}'  />
    <div v-if='$v.item.duration.$error'>
      <div class='form-feedback-error'>
        <div  v-if='!$v.item.duration.integer'>
          Value has to be an integer
        </div>
        <div v-else-if='!$v.item.duration.minValue'>
          Minimum value is 2
        </div>
        <div v-else-if='!$v.item.duration.maxValue'>
          Max value is 6
        </div>
      </div>
    </div>
    <label for='performers'>Performers(Enter comma separated names)</label>
    <input type='text' v-model='$v.item.performers.$model' id='performers'
    :class='{"form-input-error": $v.item.performers.$error}'  />
    <div v-if='$v.item.performers.$error'>
      <div class='form-feedback-error'>
        Performer names are required
      </div>
    </div>
    <label for='description'>Description</label>
    <textarea v-model='$v.item.description.$model' id='description'
    :class='{"form-input-error": $v.item.description.$error}' ></textarea>
    <div v-if='$v.item.description.$error'>
      <div class='form-feedback-error'>
        Item description is required
      </div>
    </div>
    <div class='form-feedback-error' v-if='$v.$anyError'>Please correct the form errors</div>
    <input type='submit' @click='addNewItem()' value='Add' /><br />
    <transition name='fade'>
      <div
      data-test='item-added-confirmation'
      class='alert'
      v-if='added'
      >New item  was added!</div>
    </transition>
  </div>
</template>

<script>
import * as app from '@/common/app.js';
import { required, minLength, integer, minValue, maxValue, alpha } from 'vuelidate/lib/validators'
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
  validations: {
    item: {
      title: {
        required,
        minLength: minLength(6)
      },
      duration: {
        integer,
        minValue: minValue(2),
        maxValue: maxValue(6)
      },
      type: {
        required,
        alpha
      },
      performers: {
        required
      },
      description: {
        required
      }

    }
  },
  methods: {
    addNewItem: function(){
      this.$v.$touch();
      if (this.$v.$anyError == false) {
        if (this.item.title.length > 0){
          app.api.add('items', this.item).then(response => {
            if (response.includes('Error')) {
              alert(response);
            } else {
              // Because we're not redirecting the user after adding a product, we should reset the validation so they can add a new product
              //this.$v.$reset();

              this.added = true;

              setTimeout(() => (this.added = false), 4000);

              this.item = {
                title: '',
                type: '',
                duration: '',
                performers: [],
                description: '',
              };
              this.$v.$reset();
              //update the store to reflect the correct Items
              this.$store.dispatch('setItems');
            }
          });
        }
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
.form-input-error {
  border: 1px solid red;
}
required {
  border: 1px solid green;
}
</style>
