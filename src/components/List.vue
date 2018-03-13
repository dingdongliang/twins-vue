<template lang="html">
  <li class="goods-list">
    <router-link to="/detail" class="goods-list-link">  <!--  这个是用来跳转页面的，可以理解为a标签 -->
      <div class="user-img">
        <img :src="USER_IMG" alt="">
      </div>
      <div class="goods-list-desc">
        <p class="user-name">{{ USER_NAME }}</p>
        <p class="user-birth">{{ USER_BIRTH }}</p>
      </div>
    </router-link>
  </li>
</template>
<script>
  export default {
    props: ['USER_BIRTH', 'USER_IMG', 'USER_ID', 'USER_NAME']   /*  props是子组件获取父组件数据用的 */
  }
</script>
<style lang="css" scoped>
  .goods-list {
    width: 50%;
    float: left;
    box-sizing: border-box;
    margin-bottom: 0.2rem;
  }

  .goods-list:nth-of-type(odd) {
    border-right: 0.15rem solid #ccc;
  }

  .goods-list:nth-of-type(even) {
    border-left: 0.15rem solid #ccc;
  }

  .goods-list-link {
    display: block;
    padding: 0.5rem 0;
    margin: 0 0.3rem;
    text-align: center;
    background-color: #fff;
  }

  .goods-list:nth-of-type(even) .goods-list-link {
    margin-left: 0;
  }

  .goods-list:nth-of-type(odd) .goods-list-link {
    margin-right: 0;
  }

  .user-img {
    padding: 0.5rem;
  }

  .user-img > img {
    width: auto;
    height: 4rem;
  }

  .goods-list-desc {
    padding: 0 0.5rem;
  }

  .goods-list-desc:after {
    display: block;
    content: '';
    clear: both;
  }

  .user-name, .user-birth {
    width: 50%;
    height: 1.2rem;
    line-height: 1.2rem;
    font-size: 0.8rem;
    color: #333;
    float: left;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .user-birth {
    color: #ff8000;
    float: right;
  }
</style>
