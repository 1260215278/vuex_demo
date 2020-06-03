<template>
  <div id="app">
    <header class="header">
      <div id="nav" class="flex">
        <img class="nav_icon" src="./icon/LOGO.png" alt />
        <div class="nav_right flex">
          <router-link class="item" to="/Home">首页</router-link>
          <router-link class="item" to="/About">关于海斯特</router-link>
          <!-- <router-link class="item" to="/Brand">品牌介绍</router-link> -->
          <!-- <router-link class="item" to="/Attract">品牌招商</router-link> -->
          <div class="item foucs">品牌介绍</div>
          <div class="item foucs">品牌招商</div>
          <router-link class="item" to="/Product">产品中心</router-link>
          <router-link class="item" to="/Steward">服务管家</router-link>
          <router-link class="item" to="/ContactUs">联系我们</router-link>
        </div>
      </div>
    </header>
    <router-view />

    <footer class="footer">
      <div class="footer_nav flex">
        <div class="footer_item">
          <div class="footer_item_list title">官方直营店</div>
          <div class="footer_item_list">淘宝店铺链接</div>
          <div class="footer_item_list">阿里国际店铺链接</div>
        </div>
        <div class="footer_item">
          <div class="footer_item_list title">帮助</div>
          <div class="footer_item_list">常见问题</div>
        </div>
        <div class="footer_item">
          <div class="footer_item_list title">联系我们</div>
          <div class="flex footer_item_list">
            <img class="footer_icon" src="./icon/zuoji.png" alt srcset />
            400-889-2230
          </div>
          <div class="flex footer_item_list">
            <img class="footer_icon" src="./icon/weixin.png" alt srcset />
            xiarun2016
          </div>
          <div class="flex footer_item_list">
            <img class="footer_icon" src="./icon/youxiang.png" alt srcset />
            ht09@healthtec.com.cn
          </div>
        </div>
        <div class="footer_item footer_end">
          <div class="footer_item_list title footer_end_text">关注我们</div>
          <img class="footer_code" src="./icon/qrcode.png" alt srcset />
        </div>
      </div>
    </footer>
    <div class="bottom">佛山市厦润健康科技有限公司 版权所有 粤ICP备17156480号</div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {},
  methods: {
    _isMobile() {
      let flag = navigator.userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
      );
      return flag;
    }
  }
};
</script>

<style lang="stylus" >
* {
  padding: 0px;
  margin: 0px;
  box-sizing: border-box;
  font-family: Microsoft YaHei;
}

.foucs{
  cursor:pointer
}
</style>

<style scoped>
/* 拒绝样式污染 */
.header {
  width: 100%;
  height: 100px;
  background: rgba(37, 36, 42, 1);
}
.flex {
  display: flex;
  align-content: center;
  align-items: center;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* min-width: 1200px; */
}
#nav {
  max-width: 1200px;
  min-width: 1200px;
  line-height: 100px;
  background: rgba(37, 36, 42, 1);
  justify-content: space-between;
  margin: 0px auto;
}
.nav_icon {
  width: 130px;
  height: 100px;
}

.nav_right {
  flex: 1;
  justify-content: flex-end;
}
.item {
  font-size: 16px;
  padding: 0px 1.68vw;
  box-sizing: border-box;
  font-family: Microsoft YaHei;
  font-weight: 400;
  text-align: center;
  line-height: 100px;
  color: rgba(133, 135, 143, 1);
  font-stretch: normal;
  text-decoration: none;
}
.item:hover{
  color: rgba(255, 255, 255, 1);
}
.bottom {
  width: 100%;
  height: 74px;
  background: rgba(33, 32, 37, 1);
  text-align: center;
  line-height: 74px;
  font-size: 14px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(118, 120, 128, 1);
}
.footer {
  width: 100%;
  height: 242px;
  background: rgba(37, 36, 42, 1);
}
.footer_nav {
  max-width: 800px;
  justify-content: space-between;
  align-items: flex-start;
  margin: 0px auto;
  padding-top: 50px;
}
.footer_icon {
  width: 16px;
  height: 14px;
  margin-right: 10px;
}
.footer_code {
  width: 84px;
  height: 84px;
}
.footer_item {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
}
.footer_item_list {
  margin-bottom: 25px;
  font-size: 14px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(118, 120, 128, 1);
}
.title {
  font-size: 16px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
}
.footer_end {
  align-items: flex-end;
}
.footer_end_text {
  width: 84px;
  text-align: left;
}
.router-link-active {
  font-size: 16px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  font-stretch: normal;
  text-decoration: none;
}
</style>
