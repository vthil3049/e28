<template>
  <!-- src/components/ShowProduct.vue -->
  <!-- /src/components/ShowProduct.vue -->
  <router-link :to='{ name:"product", params: { id: product.id }}'>
          <div class='product'>
              <div class='product-name'>{{ product.name }}</div>
              <img
                  class='product-thumb'
                  :alt='"Product image of  " + product.name'
                  :src='"./../assets/images/products/" + product.id + ".jpg"'
              />
          </div>
  </router-link>
</template>
<script>
export default {
  name: '',
  props: ['product'],
  data: function() {
    return {};
  }
};
</script>
<style scoped></style>
