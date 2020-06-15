<template>
  <div class="home">
    <div class="header foucs">  <span @click="toBack()">产品中心</span> > {{shopFrom.name}}</div>
    <img class="top_image" :src="shopFrom.surfacePlot" alt srcset />
    <div class="info">
      <div class="name">{{shopFrom.name}}</div>
      <div class="info_tips">{{shopFrom.context}}</div>
    </div>
    <!-- 功能 -->
    <!-- <div class="fun">
      <img class="fun_image" src="../icon/服务管家_简介背景图.jpg" alt srcset />
      <div class="fun_right">
        <div class="fun_right_item">减轻疲劳</div>
        <div class="fun_right_item">舒经通络</div>
        <div class="fun_right_item">健身调理</div>
        <div class="fun_right_item">按需调节</div>
      </div>
    </div> -->

    <!-- 产品功能 -->
    <!-- <div class="detail">
      <div class="detail_border"></div>
      <div class="detail_info">
        <div class="detail_title">产品功能</div>
        <div class="detail_tips">PRODUCT FUNCTION</div>
      </div>
      <div class="detail_border"></div>
    </div> -->

    <!-- 产品详情 富文本 -->
    <!-- <div class="conetext" v-html=" HTMLDecode(shopFrom.contextHtml)"></div> -->
    <!-- 规格参数 -->
    <!-- <div class="specification">
      <div class="specification_title">规格参数</div>
      <el-table
        :data="tableData"
        border
        style="width: 1200"
        :header-cell-style="{background:'#F9F9F9',color:'rgba(102, 102, 102, 1);','text-align':'center'}"
      >
        <el-table-column prop="name1" align="center" label="产品型号" width="160"></el-table-column>
        <el-table-column prop="name2" align="center" label="额定电压" width="160"></el-table-column>
        <el-table-column prop="name3" align="center" label="额定功率" width="160"></el-table-column>
        <el-table-column prop="name4" align="center" label="安全类型" width="160"></el-table-column>
        <el-table-column prop="name5" align="center" label="净重/毛重" width="160"></el-table-column>
        <el-table-column prop="name6" align="center" label="外形尺寸" width="160"></el-table-column>
        <el-table-column prop="name7" align="center" label="包装尺寸" width="160"></el-table-column>
      </el-table>
    </div> -->

    <!-- 细节展示 -->
    <!-- <div class="detail">
      <div class="detail_border"></div>
      <div class="detail_info">
        <div class="detail_title">细节展示</div>
        <div class="detail_tips">DETAIL DISPLAY</div>
      </div>
      <div class="detail_border"></div>
    </div> -->

    <!-- <div class="detail_images">
      <img class="detail_item" src="../icon/首页2_08.jpg" alt srcset />
      <img class="detail_item" src="../icon/首页2_08.jpg" alt srcset />
    </div> -->
    <img class=" minWhite" :src="shopFrom.thumbnail" alt srcset />
  </div>
</template>

<script>
var _this;
export default {
  data() {
    return {
      shopFrom: {},
      tableData: [
        {
          name1: "H403",
          name2: "220V，50Hz的",
          name3: "120瓦",
          name4: "I 类",
          name5: "73Kg / 90Kg",
          name6: "182*75*72cm",
          name7: "187*80*80cm"
        }
      ]
    };
  },
  created() {
    _this = this;
    if (this.$route.query && this.$route.query.id) {
       this.getDetail(this.$route.query.id);
      // this.getDetail(18);
    }
  },
  methods: {
    toBack(){
      this.$router.go(-1)
    },
    getDetail(id) {
      this.$router.push({ name: "Details", query: { id: id } });
      _this.$apis.getProductById({ id }).then(res => {
        _this.shopFrom = res.data.data;
      });
    },
    // 富文本转义
    HTMLDecode(text) {
      var temp = document.createElement("div");
      temp.innerHTML = text;
      var output = temp.innerText || temp.textContent;
      temp = null;
      return output;
    }
  }
};
</script>

<style scoped>
.header {
  text-align: center;
  line-height: 60px;
  font-size: 16px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(133, 135, 143, 1);
  background: rgba(37, 36, 42, 1);
  width: 100%;
  border-top: 1px solid rgba(133, 135, 143, 1);
}
.conetext {
  width: 1200px;
}
.conetext img {
  width: 100%;
}
.fun_right_item {
  margin: 20px 0px;
  height: 110px;
  width: 110px;
  background: rgba(23, 98, 224, 1);
  box-shadow: 0px 2px 10px 0px rgba(15, 35, 82, 0.34);
  border-radius: 50%;
  text-align: center;
  line-height: 110px;
  font-size: 20px;
  font-family: Source Han Sans SC;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
}
.fun_right {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.fun_image {
  width: 960px;
  height: 600px;
  margin-right: 92px;
}
.fun {
  display: flex;

  width: 1200px;
  justify-content: center;
  align-items: center;
  margin-top: 62px;
}
.specification_title {
  font-size: 24px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(0, 0, 0, 1);
  margin-bottom: 40px;
}
.specification {
  margin-top: 100px;
  padding-left: 43px;
}
.detail_item {
  width: 580px;
  height: 500px;
}
.detail_images {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 99px;
  width: 1200px;
}
.detail_tips {
  line-height: 12px;
  font-size: 12px;
  font-family: Source Han Sans SC;
  font-weight: 400;
  margin-top: 12px;
  color: rgba(102, 102, 102, 1);
  text-align: center;
}
.detail_title {
  line-height: 36px;
  font-size: 36px;
  font-family: Source Han Sans SC;
  font-weight: bold;
  color: rgba(0, 0, 0, 1);
  text-align: center;
}
.detail_info {
  margin: 0px 40px;
}
.detail_border {
  width: 486px;
  height: 1px;
  background: rgba(196, 196, 196, 1);
}
.detail {
  margin-top: 140px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.info_tips {
  margin-top: 22px;
  font-size: 20px;
  font-family: Source Han Sans SC;
  font-weight: 400;
  color: rgba(102, 102, 102, 1);
}
.name {
  font-size: 30px;
  font-family: Source Han Sans SC;
  font-weight: bold;
  color: rgba(0, 0, 0, 1);
}
.minWhite {
   width: 62.5vw;
  min-width: 1200px;
  margin-top: 40px;
  margin-bottom: 100px;
}
.home {
  overflow: hidden;
  width: 100%;
  min-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.top_image {
  height: 650px;
  /* margin-top: 40px; */
  width: 1200px;
}
.info {
  margin-top: 40px;
  padding-left: 11px;
  width: 1200px;
}
</style>