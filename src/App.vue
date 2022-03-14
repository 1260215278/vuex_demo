<template>
  <div id="app">
    <header class="header">
      <div id="nav" class="flex">
        <img class="nav_icon" src="./icon/LOGO.png" alt />
        <div class="nav_right flex">
          <router-link class="item" to="/Home">首页</router-link>
          <router-link class="item" to="/About">关于海思特</router-link>
          <!-- <router-link class="item" to="/Brand">品牌介绍</router-link> -->
          <!-- <router-link class="item" to="/Attract">品牌招商</router-link> -->
          <div class="item foucs">品牌介绍</div>
          <div class="item foucs">品牌招商</div>
          <!-- <div class="item foucs">产品中心</div> -->
          <router-link class="item" to="/Product">
            <div @mouseleave="leave()">
              <span @mouseenter="enter()">产品中心</span>
            </div>
          </router-link>
          <router-link class="item" to="/Steward">服务管家</router-link>
          <router-link class="item" to="/ContactUs">联系我们</router-link>
        </div>
      </div>
      <!-- 下方产品 -->
      <div
        @mouseenter="enter()"
        @mouseleave="leave()"
        :class=" isShow ? 'header_bttom header_bttom_avtive' : 'header_bttom '"
      >
        <div class="header_bttom_left">
          <div class="bttom_left_top_border"></div>
          <div class="bttom_left_top_header">
            <div class="bttom_left_top">产品中心</div>
            <div
              class="header_bttom_item"
              v-for="(item,index) in tabList"
              :key="index"
              @mouseenter="enterItem(item)"
              @click="toDetail(item)"
            >{{item.name}}</div>
          </div>
        </div>

        <div class="header_bttom_ritgh">
          <img class="bttom_ritgh_image" :src=" headerItem?  headerItem.imgUrlProduct : ''" alt srcset />
          <div class="bttom_ritgh_titie">休闲舒适生活</div>
          <div class="bttom_ritgh_tips">快乐因你而生></div>
        </div>
      </div>
    </header>
    <router-view :key="Vuekey" />

    <footer class="footer">
      <div class="footer_nav flex">
        <div class="footer_item">
          <div class="footer_item_list title">官方直营店</div>
            <a class="aHref"
              target="_blank"   href="https://shop125701913.taobao.com/search.htm?spm=a1z10.1-c-s.w5001-22841898078.2.1a1e63baVUz14z&search=y&scene=taobao_shop"
            >
          <div class="footer_item_list">
          淘宝店铺链接
          </div>
          </a>
           <a class="aHref" target="_blank"  href="https://healthtec.en.alibaba.com">
          <div class="footer_item_list">
           阿里国际店铺链接
          </div>
          </a>
        </div>
        <div class="footer_item">
          <div class="footer_item_list title">帮助</div>
          <div class="footer_item_list">常见问题</div>
        </div>
        <div class="footer_item">
          <div class="footer_item_list title">联系我们</div>
          <div class="flex footer_item_list">
            <img class="footer_icon" src="./icon/zuoji.png" alt srcset />
            13928285123
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
     <a class="aHref" target="_blank"  href="http://beian.miit.gov.cn/">
    <div class="bottom">
          佛山市海思特家居有限公司版权所有 粤ICP备17156480号
    </div>
    </a>
  </div>
</template>

<script>
var _this;
export default {
  data() {
    return {
      tabList: [],
      isShow: false,
      Vuekey: 2222,
      headerItem: {
      imgUrlProduct:""

      }
    };
  },
  created() {
    _this = this;
    this.getBannerList(
    );
  },
  methods: {
    enterItem(item) {
      this.headerItem = item;
    },
    toDetail(item) {
      this.$router.push({ path: "/Product", query: { id: item.id } });
      _this.Vuekey = new Date().getTime();
    },
    getBannerList() {
      _this.$apis.getClassifyList().then(res => {
        _this.tabList = res.data.data;
        _this.headerItem = _this.tabList[0];

        console.log('headerItem-',_this.headerItem)
      });
    },
    enter() {
      // 鼠标移入
      _this.isShow = true;
    },
    leave() {
      // 鼠标移除
      _this.isShow = false;
    },
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
/*包含以下四种的链接*/
.aHref{
    text-decoration: none;
    color none
}
/*正常的未被访问过的链接*/
.aHref:link {
    text-decoration: none;
}
/*已经访问过的链接*/
.aHref:visited {
    text-decoration: none;
}
/*鼠标划过(停留)的链接*/
.aHref:hover {
    text-decoration: none;
}
/* 正在点击的链接*/
.aHref:active {
    text-decoration: none;
}
* {
  padding: 0px;
  margin: 0px;
  box-sizing: border-box;
  font-family: Microsoft YaHei;
}

.foucs {
  cursor: pointer;
}
</style>

<style scoped>
.bttom_left_top_header {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
}
.header_bttom_item {
  margin-top: 20px;
  font-size: 20px;
  font-family: Source Han Sans SC;
  font-weight: 500;
  color: rgba(102, 102, 102, 1);
}
.header_bttom_item:hover {
  color: rgba(255, 255, 255, 1);
}
.bttom_left_top_border {
  height: 10px;
  width: 10px;
  background-color: rgba(23, 98, 224, 1);
  margin-right: 20px;
  margin-top: 10px;
}
.bttom_left_top {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-family: Source Han Sans SC;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
}
.bttom_ritgh_tips {
  font-size: 18px;
  font-family: Source Han Sans SC;
  font-weight: 500;
  color: rgba(102, 102, 102, 1);
  margin-top: 10px;
}
.bttom_ritgh_titie {
  font-size: 20px;
  font-family: Source Han Sans SC;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
  margin-top: 30px;
}
.bttom_ritgh_image {
  height: 200px;
  width: 300px;
}
.header_bttom_ritgh {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
}
.header_bttom_left {
  margin-top: 30px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
}

.header_bttom_left {
  margin-right: 20vw;
}
.header_bttom {
  position: absolute;

  left: 0px;
  width: 100%;
  min-width: 1200px;
  background-color: hsla(250, 8%, 15%, 1);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: -99;
  bottom: -400px;
  opacity: 0;
  border-top: solid 1px rgba(0, 0, 0, 1);
}
.header_bttom_avtive {
  height: 400px;
  opacity: 1;
  z-index: 188;
  transition: all 1s;
}
/* 拒绝样式污染 */
.header {
  width: 100%;
  height: 101px;
  position: relative;
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
.item:hover {
  color: rgba(255, 255, 255, 1);
}
.bottom {
  width: 100%;
  min-width: 1200px;
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
  min-width: 1200px;
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
