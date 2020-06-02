<template>
  <div class="home">
    <header class="header">
      <title class="header_text">智慧家居 创造未来</title>
      <div class="header_nav">
        <div class="header_nav_left">
          <div class="header_nav_title">联系方式</div>
          <div class="header_nav_name">{{localInfo.name}}</div>
          <div class="header_nav_detail">联系地址：{{localInfo.address}}</div>
          <div class="header_nav_detail">联系电话：{{localInfo.phone}}</div>
          <div class="header_nav_detail">E-mail：{{localInfo.email}}</div>
          <img class="header_nav_image" src="../icon/联系我们_02_12.png" alt srcset />
        </div>
        <img class="header_nav_right" src="../icon/联系我们_02_05.png" alt srcset />
      </div>
    </header>

    <!-- 加入我们 -->

    <div class="job_add">加入我们</div>
    <div class="job_english">JOIN USF</div>

    <!-- 工作列表 -->

    <div class="job_list">
      <div class="job_item" v-for="(item,index) in JobList " :key="index">
        <div class="job_top">
          <div class="job_name">{{item.title}}</div>
          <div class="job_top_right foucs" @click="setIme(index)">{{ item.isShow ? '收起': '展开'}}</div>
        </div>
        <div :class="item.isShow ? 'job_tips' : 'job_tips  job_tips_avtive'">岗位职责：</div>

        <div :class="item.isShow ? 'job_detail' : 'job_detail  job_detail_avtive'">
          <pre  class="job_detail_item">
            {{item.context}}

          </pre>
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
      localInfo:{},
      JobList:[]
    }
  },
  created(){
    _this=this
    this.getAllInfo()
  },
  methods:{
    setIme(index){
      this.JobList[index].isShow = !this.JobList[index].isShow
    },
      getAllInfo(){
        _this.$apis.getPJobContent().then(res=>{
          _this.localInfo=res.data.data.lsContactWay[0]
          res.data.data.lsJobContent.forEach(item=>{
            item.isShow=true
          })
          _this.JobList=res.data.data.lsJobContent
          
        })
      }
  }
};
</script>
<style  scoped>
.job_detail_item {
  font-size: 0.9vw;
  font-family: Microsoft YaHei;
  font-weight: 400;
  line-height: 32px;
  color: rgba(102, 102, 102, 1);
   text-indent:-3.1rem;
}
.job_detail {
  line-height: 14px;
  font-size: 15px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(102, 102, 102, 1);
  margin-top: 18px;
  transition: all .5s;
}
.job_tips {
  line-height: 16px;
  font-size: 18px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(0, 0, 0, 1);
  margin-top: 30px;
  transition: all .5s;
}
.job_top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  line-height: 25px;
  font-size: 26px;
  font-family: Source Han Sans SC;
  font-weight: 500;
  color: rgba(23, 98, 224, 1);
}
.job_item {
  width: 100%;
  border-bottom: solid 1px rgba(235, 236, 240, 1);
  margin-top: 53px;
  padding-bottom: 45px;
}
.job_tips_avtive{
  height: 0px;
  display: none;
}
.job_detail_avtive{
  height: 0px;
  display: none;
}
.job_list {
  width: 62.5vw;
  margin: 0px auto;
  height: 1580px;
  margin-top: 59px;
  background: rgba(255, 255, 255, 1);
  padding: 0px 2.6vw;
  padding-top: 16px;
  margin-bottom: 40px;
}
.job_english {
  line-height: 19px;
  font-size: 24px;
  font-family: Source Han Sans SC;
  font-weight: bold;
  text-align: center;
  margin-top: 20px;
  color: rgba(200, 200, 200, 1);
}
.job_add {
  line-height: 38px;
  font-size: 40px;
  font-family: Source Han Sans SC;
  font-weight: bold;
  color: rgba(0, 0, 0, 1);
  margin-top: 475px;
  text-align: center;
}
.header_nav_image {
  width: 66px;
  height: 66px;
  margin-top: 47px;
}
.header_nav_detail {
  line-height: 15px;
  font-size: 14px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(102, 102, 102, 1);
  margin-top: 22px;
}
.header_nav_name {
  line-height: 18px;
  font-size: 18px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(0, 0, 0, 1);
  margin-top: 40px;
  margin-bottom: 28px;
}
.header_nav_title {
  line-height: 24px;
  font-size: 24px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(0, 0, 0, 1);
  margin-top: 81px;
}
.header_nav_left {
  flex: 1;
  padding-left: 50px;
  height: 100%;
}
.header_nav_right {
  height: 100%;
  width: 39vw;
}
.header_nav {
  width: 62.5vw;
  height: 500px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 2px 40px 0px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  position: absolute;
  left: 0px;
  right: 0px;
  margin: 0px auto;
  bottom: -354px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.header_text {
  font-size: 60px;
  font-family: Alibaba PuHuiTi;
  font-weight: bold;
  color: rgba(255, 254, 254, 1);
  margin-top: 117px;
  text-align: center;
}
.header {
  width: 100%;
  height: 436px;
  position: relative;
  background-image: url("../icon/联系我们_banner图.jpg");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  padding-top: 0.01px;
}
.home {
  background-color: #f5f5f9;
  overflow: hidden;
}
</style>
