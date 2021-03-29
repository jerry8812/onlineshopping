<template>
  <tabbar>
    <tabbar-item path="/home">
        <img slot="item-icon" src="~assets/image/tabbar/home.svg" alt="home">
        <img slot="item-icon-active" src="~assets/image/tabbar/home_active.svg" alt="home_active">
        <div slot="item-text">Home</div>
    </tabbar-item>
    <tabbar-item path="/category">
        <img slot="item-icon" src="~assets/image/tabbar/category.svg" alt="Category">
        <img slot="item-icon-active" src="~assets/image/tabbar/category_active.svg" alt="Category_active">
        <div slot="item-text">Category</div>
    </tabbar-item>
    <tabbar-item path="/cart">
        <img slot="item-icon" src="~assets/image/tabbar/cart.svg" alt="Cart">
        <img slot="item-icon-active" src="~assets/image/tabbar/cart_active.svg" alt="Cart_active">
        <div slot="item-text">Cart</div>
    </tabbar-item>
    <tabbar-item path="/account">
        <img slot="item-icon" src="~assets/image/tabbar/account.svg" alt="Account">
        <img slot="item-icon-active" src="~assets/image/tabbar/account_active.svg" alt="Account_active">
        <div slot="item-text">Account</div>
    </tabbar-item>
  </tabbar>
</template>

<script>

  import Tabbar from 'components/common/Tabbar';
  import TabbarItem from 'components/common/TabbarItem'
  
  export default {
    name: "MainTabbar",
    components: { 
      Tabbar,
      TabbarItem
    }
  }
</script>

<style>

</style>