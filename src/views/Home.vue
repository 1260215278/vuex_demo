<template>
  <div class="home">
    <!-- 头部 -->
    <div class="heder">
      <!-- 走马灯 -->
      <el-carousel class="carousel"   @change="change">
        <el-carousel-item class="carousel"   v-for="(item,index) in bannerList" :key="index">
          <img class="banner_image" :src="item.imgUrl" alt srcset />
        </el-carousel-item>
      </el-carousel>
      <!-- 走马灯上浮层 -->
      <div class="top_foter" v-if="initialIndex==0">
        <div class="top_foter_div1">实力品牌</div>
        <div class="top_foter_div2">"智"慧家居</div>
        <div class="top_foter_div3">伴您健康生活</div>
        <div class="top_foter_div4 foucs" @click="toDetial()">查看详情</div>
      </div>
    </div>
    <!-- 下面的文字 -->
    <div class="title">
      HEALTHTEC PRODUCTS
      <div class="title_text">海思特产品</div>
    </div>
    <!-- 细节 -->
    <div class="text_detail">公司不断研发具有高科技含量的智能家居产品，逐步扩大制造规模，建立并完善产、供、销布局，</div>
    <div class="text_detail">强大的营销体系，高效的运营系统及特管家服务来满足客户的需求。</div>
    <div class="text_english">
      The company continues to develop high-tech smart home products, gradually
      expand the manufacturing scale, establish and improve the production, supply
      and marketing layout, strong marketing system, efficient operation system
      and butler service to meet the needs of customers.
    </div>
    <!-- 四张图 -->
    <div class="image_list">
      <div
        class="image_item foucs"
        @mouseenter="enter(index)"
        @mouseleave="leave()"
        v-for="(item,index) in typeList"
        @click="toDetail(item)"
        :key="index+11"
      >
        <img  :class="shopIndex  == index ? 'image_item_image image_item_image_active' : 'image_item_image'"  :src="item.imgUrl" alt srcset />
        <div class="image_item_footer">
          <div class="image_item_content">
            <div class="image_item_border"></div>
            <div
              :class="shopIndex  == index ? 'image_item_name image_item_active' : 'image_item_name'"
            >{{item.nameHome}}</div>
            <div class="image_item_border"></div>
          </div>
          <div
            :class="shopIndex  == index ? 'image_item_english image_item_english_active' : 'image_item_english'"
          >{{item.nameEn}}</div>
        </div>
      </div>
    </div>
    <!-- 我们的优势 -->
    <div class="title">
      OUR STRENGTHS
      <div class="title_text">我们的优势</div>
    </div>
    <div class="advantage">
      <img class="advantage_image" src="../icon/微信图片_20200603082203.jpg" alt srcset />
      <!-- item们离谱 -->
      <div class="advantage_list">
        <div class="advantage_list_item">
          <img
            class="advantage_list_image"
            src="../icon/4c1f9ae616d3a8b7a32604fad07db45.jpg"
            alt
            srcset
          />
          <div class="advantage_list_right">
            <div class="advantage_list_text1">专业高效</div>
            <div class="advantage_list_text2">专业的生产团队</div>
          </div>
        </div>

        <div class="advantage_list_item">
          <img
            class="advantage_list_image"
            src="../icon/a419c610228af015729a80dc5e0c763.jpg"
            alt
            srcset
          />
          <div class="advantage_list_right">
            <div class="advantage_list_text1">合格标准</div>
            <div class="advantage_list_text2">质量管理体系认证</div>
          </div>
        </div>
      </div>
      <div class="advantage_list">
        <div class="advantage_list_item">
          <img
            class="advantage_list_image"
            src="../icon/5fcfbc51baa89e6bf0617ecbd63116e.jpg"
            alt
            srcset
          />
          <div class="advantage_list_right">
            <div class="advantage_list_text1">卓越人才</div>
            <div class="advantage_list_text2">高级技工为主的产品研发团队</div>
          </div>
        </div>

        <div class="advantage_list_item">
          <img
            class="advantage_list_image"
            src="../icon/bd3e4aff6d2954f602ccf8428cbe4a8.jpg"
            alt
            srcset
          />
          <div class="advantage_list_right">
            <div class="advantage_list_text1">发明创造</div>
            <div class="advantage_list_text2">49项实用新型及外观专利</div>
          </div>
        </div>
      </div>

      <div class="advantage_list">
        <div class="advantage_list_item">
          <img
            class="advantage_list_image"
            src="../icon/17f524311846369f28002a144700f30.jpg"
            alt
            srcset
          />
          <div class="advantage_list_right">
            <div class="advantage_list_text1">分工明确</div>
            <div class="advantage_list_text2">优秀的管理团队</div>
          </div>
        </div>

        <div class="advantage_list_item">
          <img
            class="advantage_list_image"
            src="../icon/bc2f211226ee38287212f4090a0ec23.jpg"
            alt
            srcset
          />
          <div class="advantage_list_right">
            <div class="advantage_list_text1">地理面积</div>
            <div class="advantage_list_text2">拥有5万平米的现代化生产基地</div>
          </div>
        </div>
      </div>
    </div>
    <!-- 合作商家 -->
    <div class="footer">
      <div class="title footer_title">
        COOPERATIVE BUSINESS
        <div class="title_text footer_text">合作商家</div>
      </div>
      <!-- 图片 -->
      <div class="footer_list">
        <!-- <div class="footer_list_image" v-for="(item,index) in iamgeList " :key="index">
          <img class="footer_list_images" :src="item.imgUrl" />
        </div>-->
        <div class="footer_list_image">
          <img class="footer_list_images" src="../icon/2_04_11.png" />
        </div>
        <div class="footer_list_image">
          <img class="footer_list_images" src="../icon/首页2_04_13.png" />
        </div>
        <div class="footer_list_image">
          <img class="footer_list_images" src="../icon/首页2_04_15.png" />
        </div>
        <div class="footer_list_image">
          <img class="footer_list_images" src="../icon/首页2_04_17.png" />
        </div>

        <div class="footer_list_image">
          <img class="footer_list_images" src="../icon/首页2_04_29.png" />
        </div>
        <div class="footer_list_image">
          <img class="footer_list_images" src="../icon/首页2_04_31.png" />
        </div>
        <div class="footer_list_image">
          <img class="footer_list_images" src="../icon/首页2_04_33.png" />
        </div>
        <div class="footer_list_image">
          <img class="footer_list_images" src="../icon/首页2_04_35.png" />
        </div>

        <div class="footer_list_image">
          <img class="footer_list_images" src="../icon/首页2_04_47.png" />
        </div>
        <div class="footer_list_image">
          <img class="footer_list_images" src="../icon/首页2_04_49.png" />
        </div>
        <div class="footer_list_image">
          <img class="footer_list_images" src="../icon/首页2_04_51.png" />
        </div>
        <div class="footer_list_image">
          <img class="footer_list_images" src="../icon/首页2_04_53.png" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import HelloWorld from "@/components/HelloWorld.vue"
var _this;
export default {
  name: "home",
  data() {
    return {
      bannerList: [],
      typeList: [],
      iamgeList: [],
      shopIndex: -1,
      initialIndex:0
    };
  },
  created() {
    _this = this;
    this.getBanner();
  },
  methods: {
    change(res){
      this.initialIndex=res
    },
    toDetail(item){
        this.$router.push({ path:'/Product', query: { id: item.id }})
    },
    leave() {
      this.shopIndex = -1;
    },
    enter(res) {
      this.shopIndex = res;
    },
    toDetial(){
         this.$router.push({ path:'/Product', query: {  }})
    },
    getBanner() {
      _this.$apis.getHomeView().then(res => {
        // _this.iamgeList=res.data.data.businessPartmer
        _this.typeList = res.data.data.classIfty;
      });

      _this.$apis.getBannerHome().then(res => {
        _this.bannerList = res.data.data;
      });
    }
  },

  components: {}
};
</script>
<style scoped>
.footer_list_images {
  height: 100%;
  width: 100%;
}
.footer_list_image {
  width: 14.84vw;
  min-width: 179px;
  margin-bottom: 20px;
  /* height: 118px; */
  margin-right: 0.5vw;
}
.footer_list {
  width: 62.5vw;
  min-width: 750px;
  margin: 0px auto;
  margin-top: 70px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  /* justify-content: space-between; */
}
.footer {
  width: 100%;
  height: 780px;
  /* background: rgba(17, 16, 21, .7); */
  background-image: url("../icon/首页_合作商家背景图.jpg");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  overflow: hidden;
}
.advantage_list_text2 {
  /* line-height: 24px; */
  font-size: 0.9vw;
  font-family: Source Han Sans SC;
  font-weight: 400;
  color: rgba(102, 102, 102, 1);
  margin-top: 23px;
}
.advantage_list_text1 {
  line-height: 25px;
  font-size: 26px;
  font-family: Source Han Sans SC;
  font-weight: bold;
  color: rgba(0, 0, 0, 1);
  margin-top: 11px;
}
.advantage_list_right {
  height: 80px;
  /* overflow: hidden; */
}
.advantage_list_item {
  flex: 1;
  display: flex;
  align-items: flex-start;
  height: 80px;
  margin-left: 4.16vw;
}
.advantage_list {
  display: flex;
  align-items: center;
  margin-top: 80px;
  justify-content: space-between;
  width: 46.8vw;
  min-width: 561.6px;
}
.advantage_list_image {
  /* height: 50px; */
  /* width: 2.6vw; */
  min-width: 31.2px;
  margin-right: 25px;
}
.advantage_image {
  position: absolute;
  width: 21.14vw;
  min-width: 235px;
  /* height: 540px; */
  right: -5.52vw;
  top: 100px;
  z-index: 99;
}
.advantage {
  position: relative;
  margin: 0px auto;
  width: 62.5vw;
  min-width: 750px;
  /* overflow: hidden; */
  padding-top: 0.1px;
  height: 600px;
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 1),
    rgba(242, 244, 250, 1)
  );
}
.image_item_border {
  width: 30px;
  height: 1px;
  background: rgba(255, 255, 255, 1);
}
.image_item_name {
  font-size: 26px;
  font-family: Source Han Sans SC;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
  margin: 0px 12px;
}
.image_item_content {
  display: flex;
  align-items: center;
  justify-content: center;
}
.image_item_english {
  font-size: 18px;
  font-family: Source Han Sans SC;
  font-weight: 500;
  color: rgba(133, 135, 143, 1);
  margin-top: 15px;
}
.image_item_footer {
  position: absolute;
  bottom: 0px;
  left: 0px;
  right: 0px;
  height: 140px;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.image_item {
  position: relative;
  flex: 1;
  /* height: 700px; */
  overflow: hidden;
}
.image_item:hover {
  box-shadow: 0px 4px 20px 0px rgba(153, 153, 153, 0.3);
  width: calc(25vw + 10px);
}
.image_item_image {
  height: 100%;
  width: 100%;
   transition: all 0.6s;
    -ms-transition: all 0.8s;
}
.image_item_image:hover{
   transform: scale(1.1);
    -ms-transform: scale(1.1);
}
.image_list {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 100px;
  height: 700px;
}
.text_english {
  margin: 0px auto;
  font-size: 18px;
  font-family: Source Han Sans SC;
  font-weight: bold;
  text-align: center;
  color: rgba(200, 200, 200, 1);
  margin-top: 25px;
  width: 700px;
}
.text_detail {
  margin: 0px auto;
  width: 780px;
  font-size: 18px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(102, 102, 102, 1);
  line-height: 35px;
  text-align: center;
}
.title_text {
  position: absolute;
  font-size: 48px;
  font-family: Source Han Sans SC;
  font-weight: bold;
  color: rgba(0, 0, 0, 1);
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  top: 30px;
}
.title {
  text-align: center;
  margin-top: 120px;
  position: relative;
  font-size: 72px;
  font-family: Source Han Sans SC;
  font-weight: bold;
  color: rgba(242, 242, 242, 1);
  margin-bottom: 50px;
}
.top_foter_div4 {
  width: 9.375vw;
  height: 50px;
  min-width: 112.5px;
  background: rgba(23, 98, 224, 1);
  border-radius: 4px;
  margin-left: 4.16vw;
  text-align: center;
  line-height: 50px;
  font-size: 20px;
  font-family: Source Han Sans SC;
  font-weight: 500;
  margin-top: 60px;
  color: rgba(255, 255, 255, 1);
}
.top_foter_div2,
.top_foter_div3,
.top_foter_div1 {
  color: rgba(255, 255, 255, 1);
  margin-left: 4.16vw;
  font-family: Source Han Sans SC;
}
.top_foter_div3 {
  font-size: 1.77vw;
  font-family: Source Han Sans SC;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
  margin-top: 13px;
  line-height: 33px;
}
.top_foter_div2 {
  font-size: 3.5vw;
  font-family: Source Han Sans SC;
  font-weight: bold;
  line-height: 70px;
  color: rgba(255, 255, 255, 1);
  margin-top: 23px;
}
.top_foter_div1 {
  height: 42px;
  font-size: 2.29vw;
  font-weight: 500;
  line-height: 42px;
  margin-top: 40px;
  
}
.top_foter {
  position: absolute;
  top: 80px;
  width: 26vw;
  left: 18.75vw;
  height: 370px;
  background: rgba(37, 36, 42, 0.3);
  z-index: 99;
  min-width: 312px;
}
.banner_image {
  min-height:  822px;
  width: 100vw;
  min-width: 1200px;
}
.carousel {
  min-height:  822px;
  min-width: 1200px;
}
.heder {
  position: relative;
  min-width: 1200px;
}
.footer_title {
  color: #555555;
  margin-top: 110px;
}
.footer_text {
  color: #ffffff;
}
.image_item_active {
  font-size: 30px;
}
.image_item_english_active {
  font-size: 22px;
}
.image_item_image_active{

}
.home{
  min-width: 1200px;
}
</style>
<style lang="stylus" scoped></style>