import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import * as app from '@/common/app.js';

export default new Vuex.Store({
    state: {
        featuredItem: '',
        items: [],
        itemCount: 0
    },
    // Mutations - Methods used to update data in the store.
    mutations: {
        setFeaturedItem(state, payload) {
            state.featuredItem = payload;
        },
        updateItems(state, payload) {
            state.items = payload;
            state.itemCount = state.items.length;
        }
    },
    // Actions - Methods used to asynchronously change the store, committing the changes via mutations.
    actions: {
        setItems(context) {
            app.api.all('items').then(response => {
                context.commit('updateItems', response);
            });
        },
    },
    // Getters - Methods used to retrieve and perform some operation on data in the store.
    getters: {
        getItemByName(state) {
            return function (name) {
                for (let key of Object.keys(state.items)) {
                    if (state.products[key].name == name) {
                        return state.items[key];
                    }
                }
            }
        },
        getItemCount(state){
          return function(){
            return state.itemCount;
          }
        }
    }
})
