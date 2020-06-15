<template>
  <div class="home">
    <!-- 头部 -->
    <header class="header">
      <div class="header_title">海思特家居</div>
      <div class="header_tips">
        <div class="header_border"></div>
        <div class="header_text">值得信赖的智能家居提供者</div>
        <div class="header_border"></div>
      </div>

      <!-- 牢记使命 -->
      <div class="about">
        <div class="about_item animate__animated animate__backInUp">
          <img class="about_item_image" src="../icon/关于海思特_02_09.png" alt srcset />
          <div class="about_item_right">
            <div class="about_item_title">我们的使命</div>
            <div class="about_item_tips">智创人们的健康生活</div>
          </div>
        </div>
        <div class="about_item animate__animated animate__backInUp">
          <img class="about_item_image" src="../icon/关于海思特_02_11.png" alt srcset />
          <div class="about_item_right">
            <div class="about_item_title">企业愿景</div>
            <div class="about_item_tips">成为全球最受尊重的智慧家居领导者</div>
          </div>
        </div>
        <div class="about_item animate__animated animate__backInUp">
          <img class="about_item_image" src="../icon/关于海思特_02_13.png" alt srcset />
          <div class="about_item_right">
            <div class="about_item_title">核心价值观</div>
            <div class="about_item_tips">
              客户第一，开拓创新，艰苦奋斗，
              合作共赢
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- 中部关于海思特 -->
    <div class="all_Hyster">
      <div class="Hyster">
        <div class="Hyster_title animate__animated ">关于海思特</div>
        <div class="Hyster_detial animate__animated animate__slideInUp">
          海思特创建于2003年以”智创人们的健康生活”为使命，不断研发具有高科技含量的智能家居产品，逐步扩大制造规模，建立并
          完善产，供，销布局、可控性强、强大的营销体系，高效的运营系统及特管家服务来满足客户的需求，提升公司品牌影响力，巩固
          公司在智慧家居行业的龙头地位，并以成为业界最受尊重的智慧家居领导者为核心价值观！公司注重人才，铸造精品，打造智能家
          居的楷模；
        </div>
        <div class="Hyster_detial animate__animated animate__slideInUp">人才是企业的第一资产；品质是企业的第一命脉；营销是企业的第一生机；</div>
        <div class="Hyster_detial animate__animated animate__slideInUp">海思特智慧家居有限公司旗下六大品牌分别为：海思特、帮主、智垫、舒戎、IHHT、梦席奇。</div>
      </div>
    </div>

    <!-- 发展历程 -->
    <div class="develop">
      <div class="develop_title">发展历程</div>
      <div class="develop_icon">
        <div class="develop_border"></div>
        <div class="develop_triangle"></div>
        <div class="develop_border"></div>
      </div>

      <!--  这里的实现思路是定义一根中轴线 然后再线的两端去做展示 -->
      <div class="develop_footer">
        <!-- 上面的按钮 -->

        <div class="year item1">
          2003
          <div class="year_item1 animate__animated animate__backInUp">
            <div class="year_item1_text">
              公司成立2003年按摩系统的创始者如振
              动、气囊、暖气、揉捏装置甚至智能的
              推拿机构
            </div>
          </div>
        </div>

        <div class="year item2 item4_withe">
          2004-2007
          <div class="year_item2 animate__animated animate__backInUp year_item2_rune">
            <div class="year_item2_text">
              快速发展，获得了美国市场和澳大利
              亚市场的CK
            </div>
          </div>
        </div>

        <div class="year item3">
          2008
          <div class="year_item1 animate__animated animate__backInUp">
            <div class="year_item1_text">
              海思特品牌运作在 中国占据了主要
              市场
            </div>
          </div>
        </div>

        <div class="year item4 item4_withe">
          2009-2011
          <div class="year_item2 animate__animated animate__backInUp year_item2_rune">
            <div class="year_item2_text">
              获得20多项外观和结构专利，海思特也
              成为阿里巴巴的战略合作商，在全球市
              场占有领先地位
            </div>
          </div>
        </div>

        <div class="year item5">
          2014
          <div class="year_item1 animate__animated animate__backInUp">
            <div class="year_item1_text">
              海思特通过ETL认证和SGS检验，由GMC
              集团和T_V Rheinland共同颁发全球制造
              商证书
            </div>
          </div>
        </div>

        <div class="year item6 item4_withe">
          2015-2016
          <div class="year_item2 animate__animated animate__backInUp year_item2_rune">
            <div class="year_item2_text">
              产品多样化，尤其在美容保健行业最
              具有影响力的品牌
            </div>
          </div>
        </div>

        <div class="year item7 item4_withe">
          2017-2018
          <div class="year_item1 animate__animated animate__backInUp year_item1_rune">
            <div class="year_item1_text">
              进一步赢得了质量管理体系证书、高
              新产品证书、实用新型专利证书
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
var _this
export default {
  name: "home",
  components: {},
  data(){
    return{
      
    }
  },
  created(){
    _this=this
    this.getAllInfo()
  },
  methods:{
      getAllInfo(){
        _this.$apis.getPJobContent().then(res=>{
          console.log(res)
        })
      }
  }
};
</script>
<style  scoped>
.year_item2 {
  position: absolute;
  width: 25vw;
  min-width: 300px;
  border-top: 1px dashed #e1e3e6;
  text-align: left;
  font-size: 14px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  top: 13px;
  left: 72px;
  display: flex;
  justify-content: flex-end;
}
.year_item2_text {
  width: 15vw;
  min-width: 180px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 4px 20px 0px rgba(71, 97, 148, 0.3);
  border-radius: 4px;
  font-size: 14px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(102, 102, 102, 1);
  padding: 20px;
}
.year_item1_text {
  background: rgba(71, 97, 148, 1);
  box-shadow: 0px 4px 20px 0px rgba(71, 97, 148, 0.3);
  border-radius: 4px;
  width: 15vw;
  min-width: 180px;
  font-size: 14px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(250, 250, 250, 1);
  padding: 20px;
}
.year_item1 {
  position: absolute;
  width: 25vw;
  min-width: 300px;
  border-top: 1px dashed #e1e3e6;
  text-align: left;
  height: 64px;
  font-size: 14px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  top: 13px;
  left: -25vw;
}
.year_item1_rune{
  width: 23.5vw;
  min-width: 282px;
  left: -23.5vw;
}
.item1 {
  top: 21px;
}

.year {
  position: absolute;
  width: 72px;
  height: 26px;
  background-image: linear-gradient(90deg, #2c7aff 5%, #498cff);
  border-radius: 13px;
  font-size: 16px;
  color: #fff;
  letter-spacing: 0.28px;
  text-align: center;
  line-height: 26px;
  box-sizing: border-box;
  transform: translateX(-50%);
  z-index: 1;
}
.item2 {
  top: 150px;
}
.item3 {
  top: 270px;
}
.item4 {
  top: 400px;
}
.item5 {
  top: 530px;
}
.item6 {
  top: 660px;
}
.item7 {
  top: 790px;
}
.item4_withe {
  width: 130px;
}
.year_item2_rune {
  left: 130px;
}
.develop_footer {
  position: relative;
  display: block;
  height: 1000px;
  width: 1px;
  border-right: 1px solid #e1e3e6;
  margin-top: 100px;
}

.develop_icon {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 16px;
}
.develop_title {
  line-height: 42px;
  font-size: 44px;
  text-align: center;
  font-family: Alibaba;
  font-weight: normal;
  margin-top: 100px;
  color: rgba(0, 0, 0, 1);
}
.develop_border {
  width: 80px;
  height: 1px;
  background: rgba(23, 98, 224, 1);
}
.develop_triangle {
  width: 0;
  height: 0;
  border-left: 11px solid transparent;
  border-right: 11px solid transparent;
  border-top: 18px solid rgba(23, 98, 224, 1);
  position: relative;
  margin: 0px 6px;
}
.develop_triangle:after {
  content: "";
  border-left: 7px solid transparent;
  border-right: 7px solid transparent;
  border-top: 12px solid white;
  position: absolute;
  top: -16px;
  left: -7px;
}
.all_Hyster {
  overflow: hidden;
  width: 100%;
  min-width: 1200px;
  min-height: 667px;
  background-image: url("../icon/关于海思特_简介背景图.jpg");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
.develop {
  width: 100%;
  min-height: 816px;
  background: rgba(250, 250, 250, 1);
  background-image: url("../icon/关于海思特_发展历程背景图.jpg");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.Hyster_detial {
  /* text-align: center; */
  margin: 0px auto;
  width: 53.5vw;
  min-width: 642px;
  font-size: 18px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(102, 102, 102, 1);
  line-height: 30px;
  margin-top: 20px;
}
.Hyster {
  width: 62.5vw;
  min-width: 750px;
  margin: 0px auto;
  background-image: url("../icon/关于海思特_02.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  margin-top: 176px;
  min-height: 500px;
  padding-top: 15px;
}
.Hyster_title {
  text-align: center;
  line-height: 41px;
  font-size: 44px;
  font-family: Alibaba;
  font-weight: normal;
  color: rgba(0, 0, 0, 1);
  margin-bottom: 64px;
}
.about_item_tips {
  width: 11.86vw;
  line-height: 15px;
  min-width: 142px;
  font-size: 14px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(161, 173, 199, 1);
  line-height: 20px;
  margin-top: 15px;
}
.about_item_title {
  line-height: 22px;
  font-size: 22px;
  font-family: Microsoft YaHei;
  font-weight: bold;
  color: rgba(255, 255, 255, 1);
}
.about_item_right {
}
.about_item_image {
  height: 60px;
  /* width: 3.125vw; */
  /* min-width: 40px; */
  margin-right: 1vw;
}
.about_item {
  flex: 1;
  display: flex;
  align-items: center;
  padding-left: 3.64vw;
}
.about {
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  bottom: -76px;
  width: 62.5vw;
  min-width: 750px;
  height: 152px;
  background: linear-gradient(
    0deg,
    rgba(53, 73, 113, 1),
    rgba(77, 103, 153, 1)
  );
  box-shadow: 0px 10px 45px 5px rgba(34, 49, 78, 0.4);
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.header_text {
  line-height: 25px;
  font-size: 26px;
  font-family: Alibaba;
  font-weight: normal;
  color: rgba(255, 254, 254, 1);
  margin: 0px 16px;
}
.header_border {
  width: 40px;
  height: 1px;
  background: rgba(255, 255, 255, 1);
}
.header_tips {
  display: flex;
  align-items: center;
  margin-top: 25px;
}
.header_title {
  line-height: 67px;
  font-size: 72px;
  font-family: Alibaba;
  font-weight: normal;
  color: rgba(255, 254, 254, 1);
  margin-top: 214px;
}
.header {
  width: 100%;
  min-width: 1200px;
  height: 650px;
  background-image: url("../icon/关于海思特_banner图.jpg");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
}
.home{
 width: 100%;
  min-width: 1200px;
}
</style>
