<template>
  <div id="app">
    <header class="header">
      <div id="nav" class="flex">
        <img class="nav_icon" src="./icon/LOGO.png" alt />
        <div class="nav_right flex">
          <div class="item">首页</div>
          <div class="item">关于海斯特</div>
          <div class="item">品牌介绍</div>
          <div class="item">品牌招商</div>
          <div class="item">产品中心</div>
          <div class="item">服务管家</div>
          <div class="item">联系我们</div>
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
        <div class="footer_item footer_end" >
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

<style>
* {
  padding: 0px;
  margin: 0px;
  box-sizing: border-box;
}

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
  text-align: center;
  color: #2c3e50;
}
#nav {
  max-width: 1200px;
  line-height: 100px;
  background: rgba(37, 36, 42, 1);
  justify-content: space-between;
  overflow: hidden;
  margin: 0px auto;
}
.nav_icon {
  width: 80px;
  height: 64px;
}

.nav_right {
  flex: 1;
  max-width: 800px;
}
.item {
  flex: 1;
  font-size: 16px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  text-align: center;
  line-height: 100px;
  color: rgba(133, 135, 143, 1);
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
.footer_end{
  align-items: flex-end;
}
.footer_end_text{
  width: 84px;
  text-align: left;
}
</style>
