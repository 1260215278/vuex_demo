<template>
  <div class="home">
    <el-carousel class="carousel">
      <el-carousel-item class="carousel" v-for="(item,index) in imageList" :key="index">
        <img class="banner_image" :src="item.imgUrl" alt srcset />
      </el-carousel-item>
    </el-carousel>

    <div class="tabs">
      <div
        :class="tabIndex==index? 'tabs_item tabs_active foucs' :  'tabs_item foucs' "
        @click="Setindex(index,item)"
        v-for="(item,index) in tabList"
        :key="index"
      >{{item.name}}</div>
    </div>

    <!-- 商品列表 -->

    <div class="shop">
      <div
        class="shop_itme foucs"
        @mouseenter="enter(index)"
        @mouseleave="leave()"
        v-for="(item,index) in shopList"
        :key="index"
      >
        <img  :class="shopIndex == index ? 'shop_image shop_image_active' :'shop_image'" :src="item.surfacePlot" alt srcset />
        <div class="shop_name">{{item.name}}</div>
        <div class="shop_tips" v-if="shopIndex != index">{{item.context}}</div>
        <div v-if="shopIndex == index" class="shop_btn  animate__animated animate__fadeInUp" @click="getDetail(item.id)">查看详情</div>
      </div>
    </div>
  </div>
</template>

<script>
var _this;
export default {
  name: "home",
  data() {
    return {
      tabList: [],
      tabIndex: 0,
      shopIndex: -1,
      imageList: [],
      shopList: []
    };
  },
  created() {
    _this = this;
    this.getBannerList();
    if (this.$route.query && this.$route.query.id) {
      this.getShopList(this.$route.query.id);
    }
  },
  methods: {
    getDetail(id) {
        this.$router.push({name:'Details',query:{id:id}})
    },
    // 获取轮播图和分类
    getBannerList() {
      _this.$apis.getBannersByProduct().then(res => {
        _this.imageList = res.data.data;
      });
      // 获取分类
      _this.$apis.getClassifyList().then(res => {
        _this.tabList = res.data.data;
        if (this.$route.query && this.$route.query.id) {
          _this.tabList.forEach((item, index) => {
            if (item.id == _this.$route.query.id) {
              _this.tabIndex = index;
            }
          });
          return;
        }
        _this.getShopList(_this.tabList[0].id);
      });
    },
    //获取商品列表
    getShopList(id) {
      let upFrom = {
        id
      };
      _this.$apis.getProductList(upFrom).then(res => {
        _this.shopList = res.data.data;
      });
    },
    leave() {
      this.shopIndex = -1;
    },
    enter(res) {
      this.shopIndex = res;
    },
    Setindex(res, item) {
      _this.getShopList(item.id);
      this.tabIndex = res;
    }
  },
  components: {}
};
</script>
<style  scoped>
.banner_image{
    width: 100vw;
    height: 100%;
  min-width: 1200px;
}
.shop_tips {
  line-height: 15px;
  font-size: 14px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(102, 102, 102, 1);
  text-align: center;
  margin-top: 19px;
}
.shop_name {
  text-align: center;
  line-height: 18px;
  font-size: 18px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(0, 0, 0, 1);
  margin-top: 27px;
}
.shop_image {
  margin: 0px auto;
  margin-top: 24px;
  width: 13.8vw;
  display: block;
  height: 160px;
  min-width: 165.6px;
}
.shop_image_active{
   transform: scale(1.1);
    -ms-transform: scale(1.1);
}
.shop_btn {
  display: block;
  width: 10.41vw;
  min-width: 120px;
  height: 44px;
  background: rgba(23, 98, 224, 1);
  border-radius: 4px;
  margin: 0px auto;
  margin-top: 25px;
  line-height: 44px;
  font-size: 16px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  text-align: center;
}
.shop_itme {
  width: 15vw;
  min-width: 290px;
  height: 318px;
  background: rgba(255, 255, 255, 1);
  margin-bottom: 14px;
  overflow: hidden;
  margin-right: 0.4vw;
}
.shop_itme:hover {
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 2px 20px 0px rgba(0, 0, 0, 0.3);
}

.shop {
  width: 62.5vw;
  min-width: 1200px;
  display: flex;
  margin: 0px auto;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 30px;
}
.tabs_item {
  width: 12.5vw;
  min-width: 180px;
  height: 60px;
  text-align: center;
  line-height: 60px;
  font-size: 16px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(0, 0, 0, 1);
}
.tabs_active {
  background: rgba(37, 36, 42, 1);
  color: rgba(255, 255, 255, 1);
}
.carousel {
  width: 100%;
  min-width: 1200px;
  height: 650px;
}
.tabs {
  width: 100%;
  min-width: 1200px;
  height: 60px;
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.04);
  display: flex;
  align-items: center;
  justify-content: center;
}
.home {
  background-color: #f5f5f9;
  overflow: hidden;
  width: 100%;
  min-width: 1200px;
}
</style>
