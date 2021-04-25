<template>
  <div class="productItem">
    <img :src="$store.getters.imgUrl(productItem.imageId)" :alt="productItem.description">
    <div class="productInfo">
      <span class="brand">{{productItem.brand}}</span>
      <span>{{productItem.description}}</span>
      <div class="product_price">
        <span v-show="isSale" class="product_oldprice">
          ${{productItem.oldPrice}}
        </span>
        <span :style="{color:(isSale?'#ff5777':'')}">${{productItem.price}}</span>
      </div>
      <span :style="{color:(isSale?'#f52f2f':''), fontWeight: 600}">{{productItem.tag}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductListItem',
  computed: {
    isSale(){
      return this.productItem.tag === 'SALE'
    }
  },
  props: {
    productItem: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style>
  .productItem {
    overflow: hidden;
    width: 48%;
  }
  .productItem img {
    width: 100%;
    height: auto;
    display: inline-block;
    border-radius: 10px;
  }
  .productInfo span {
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    letter-spacing: .01875em
  }
  .productInfo {
    font-size: 12px;
    margin-bottom: 3px;
  }
  .brand {
    font-size: 13px;
    font-weight: 600;
    padding-top: 2px;
  }
  .product_price span{
    display: inline-block;
  }
  .product_price{
    line-height: 1.15em;
  }
  .product_oldprice {
    text-decoration: line-through;
    color: #aaa7a7;
    padding-right: 7px;
  }
</style>