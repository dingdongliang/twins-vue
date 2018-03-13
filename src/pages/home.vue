<template lang="html">
  <div class="container">
    <home-header></home-header>   <!--  展示引入的header组件，为什么是这个名字？ -->
    <div class="content">
      <ul class="cont-ul">
        <list v-for="(item, index) in items" :key="index" :USER_NAME="item.USER_NAME" :USER_BIRTH="item.USER_BIRTH"
              :USER_IMG="item.USER_IMG"></list>
      </ul>
    </div>
    <common-footer></common-footer>  <!--  展示引入的footer组件 -->
  </div>
</template>
<script>
  import HomeHeader from '../components/HomeHeader'
  /* 本页面中用到了HomeHeader组件，所以就需要在这里引入一下 */
  import CommonFooter from '../components/CommonFooter'
  import List from '../components/List'
  import axios from 'axios'

  export default {
    data: function () {
      return {
        items: []
      }
    },
    components: {
      HomeHeader,
      CommonFooter,
      List
    },
    created () {   /* 这个是vue的钩子函数，当new Vue()实例创建完毕后执行的函数 */
      axios({
        method: 'get',
        headers: {'Accept': '*/*'},
        url: '/api/userInfo/getAllUser',
        data: JSON
      }).then(res => {
        if (res.data.returnCode === '1') {
          this.items = res.data.returnData
        } else {
          console.log(res.data.returnMsg)
        }
      }).catch(error => console.log(error))
    }
  }
</script>
<style lang="css" scoped>
  .container {
    width: 100%;
    margin: 0 auto;
  }

  .content {
    margin-bottom: 1.8rem;
  }

  .cont-ul {
    padding-top: 0.5rem;
    background-color: #ccc;
  }

  .cont-ul::after {
    content: '';
    display: block;
    clear: both;
    width: 0;
    height: 0;
  }
</style>
