<template>
  <!-- src/components/ShowProduct.vue -->
  <!-- /src/components/ShowProduct.vue -->
  <router-link :to='{ name:"product", params: { slug: product.slug }}'>
    <div class='product'>
      <div class='product-name'>{{ product.name }}</div>
      <img class='product-thumb' :src='imageSrc' />
      <div class='product-price'>${{ product.price }}</div>

    </div>
  </router-link>
</template>
<script>
export default {
  name: '',
  props: ['product'],
  data: function() {
    return {};
  },
  methods: {
      addToCart: function(slug) {
          console.log(slug);
      }
  },
  computed: {
    imageSrc: function() {
      try {
        return require('@/assets/images/products/' +
        this.product.slug +
        '.jpg');
      } catch (e) {
        return require('@/assets/images/products/image-not-available.jpg');
      }
    }
  }
};
</script>
<style scoped lang='scss'>
@import '@/styles/variables.scss';
a.product:hover {
    background-color: lighten($aqua, 10%);
}
a.product:link,
a.product:visited,
a.product:active,
a.product:hover {
    text-decoration: none;
    color: black;
    display: block;
    width: 75%;
    margin: auto;
    margin-bottom: 20px;
    border: 1px solid $silver;
    padding: 20px;
    .product-name {
        font-weight: bold;
        font-size: 2rem;
        margin: 5px 0 10px 0;
    }
    .product-thumb {
        width: 200px;
        border: 1px solid $black;
    }
    .product-description {
        width: 75%;
        margin: auto;
        text-align: left;
        font-style: italic;
    }
    .product-price {
        font-family: Georgia, 'Times New Roman', Times, serif;
        font-weight: bold;
        font-size: 2rem;
    }
}
</style>
