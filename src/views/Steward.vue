<template>
  <div class="home">
    <header class="header">
      <div class="header_info">
        <div class="title">
          <div>特管家</div>
          <div class="title_border"></div>
          <div>热诚为您服务</div>
        </div>
        <div class="header_tips">
          智造精品
          <div class="tips_border"></div>信守承诺
          <div class="tips_border"></div>客户至上
        </div>
      </div>
    </header>
    <!-- 特管家服务 -->
    <div class="serve">
      <img class="serve_image" src="../icon/服务管家_简介背景图.jpg" alt srcset />
      <div class="serve_tips">
        <div class="serve_tips_title">特管家服务</div>
        <div class="servesev_tips_border"></div>

        <div class="servesev_tips_tips">
          海思特“特管家”服务是佛山市海思特科技有限公司
          为更快捷方便服务广大客户而推出的售前、售中、售
          后一站式服务，拥有独立完善的运作体系，以1052原
          则为中心，提供“七星尊享权益”“12361关怀服务”
          ，确保客户拥有全程的、专业的、周到的服务。
        </div>
      </div>
    </div>

    <!-- 服务理念 -->

    <div class="idea">
      <div class="idea_title">服务理念</div>
      <div class="idea_border"></div>
      <div class="idea_tips">12361特管家一站式服</div>
      <div class="idea_list">
        <div class="idea_item foucs" >
          <div class="idea_top">1</div>
          <img class="idea_image" src="../icon/服务管家_04_13.png" alt srcset />
          <div class="idea_item_title">高效专业</div>
          <div class="idea_item_tips">生产完成第一时间知会客户</div>
        </div>
        <div class="idea_item idea_item2 foucs">
          <div class="idea_top">2</div>
          <img class="idea_image" src="../icon/服务管家_04_17.png" alt srcset />
          <div class="idea_item_title">贴心服务</div>
          <div class="idea_item_tips idea_item_tips2">安装配送完成后第二天回访客户</div>
        </div>
        <div class="idea_item foucs">
          <div class="idea_top">3</div>
          <img class="idea_image" src="../icon/服务管家_04_21.png" alt srcset />
          <div class="idea_item_title">企业信誉</div>
          <div class="idea_item_tips">使用三个月电话回访关注产品质量</div>
        </div>
      </div>
      <div class="idea_list">
        <div class="idea_item foucs">
          <div class="idea_top">4</div>
          <img class="idea_image" src="../icon/服务管家_04_37.png" alt srcset />
          <div class="idea_item_title">温馨陪伴</div>
          <div class="idea_item_tips">使用半年提醒服务</div>
        </div>
        <div class="idea_item foucs">
          <div class="idea_top">5</div>
          <img class="idea_image" src="../icon/服务管家_04_41.png" alt srcset />
          <div class="idea_item_title">使用无忧</div>
          <div class="idea_item_tips">一年内一次深度护理</div>
        </div>
      </div>
    </div>

    <!-- 意见反馈 -->
    <div class="opinion">
      <div class="opinion_title">意见反馈</div>
      <div class="opinion_border"></div>
      <div class="opinion_Card">
        <img class="opinion_Card_image" src="../icon/服务管家_05_07.png" alt srcset />
        <div class="opinion_Card_right">
          <div class="opinion_Card_title">“我们期待您的意见反馈”</div>
          <el-input
            class="opinion_Card_text"
            type="textarea"
            rows="8"
            resize="none"
            placeholder="我们每天会关注您的反馈，不断优化产品，为您提供更好的服务！"
            v-model="textarea"
          ></el-input>
          <!-- <textarea  ut type="textarea"   class="opinion_Card_text" placeholder="我们每天会关注您的反馈，不断优化产品，为您提供更好的服务！" /></textarea > -->
          <el-input class="opinion_Card_input" placeholder="请输入你的姓名" v-model="input" clearable></el-input>
          <el-input class="opinion_Card_input" placeholder="请输入联系电话" v-model="input1" clearable></el-input>
          <div class="opinion_Card_btn foucs" @click="submit()">提交</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  components: {},
  data() {
    return {
      textarea: "",
      input: "",
      input1: ""
    };
  },
  methods: {
    submit() {
      if (!this.textarea || !this.input || !this.input1) {
        this.$message({
          showClose: true,
          message: "请填写完整信息",
          type: "error"
        });
        return;
      }
      this.$apis
        .addLsFeedback({
          context: this.textarea,
          name: this.input,
          phone: this.input1
        })
        .then(res => {
          if (res.data.code == 200) {
            this.textarea = "";
            this.input = "";
            this.input1 = "";
            this.$message({
              showClose: true,
              message: "提交成功！",
              type: "success"
            });
          } else {
            this.$message({
              showClose: true,
              message: "提交失败",
              type: "error"
            });
          }
        });
    }
  }
};
</script>
<style  scoped>
.opinion_Card_right {
  flex: 1;
}
.opinion_Card_image {
  width: 75px;
  height: 74px;
  border-radius: 50%;
  margin-right: 1.56vw;
}
.opinion_Card {
  width: 710px;
  margin-top: 60px;
  height: 540px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 5px 13px 24px 2px rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: flex-start;
  padding: 58px 0px 0px 60px;
}
.opinion_border {
  width: 3.125vw;
  min-width: 38px;
  height: 4px;
  margin-top: 16px;
  background: rgba(23, 98, 224, 1);
}
.opinion_title {
  line-height: 42px;
  font-size: 40px;
  font-family: SourceHanSansSC;
  font-weight: bold;
  color: rgba(0, 0, 0, 1);
  margin-top: 91px;
}
.opinion_Card_btn {
  width: 9.375vw;
  min-width: 112px;
  height: 50px;
  background: rgba(23, 98, 224, 1);
  border-radius: 4px;
  margin-top: 30px;
  text-align: center;
  line-height: 50px;
  font-size: 18px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
}
.opinion_Card_input {
  width: 15.625vw;
  min-width: 187.5px;
  height: 40px;
  margin-top: 20px;
  display: block;
  border: 1px solid rgba(235, 236, 240, 1);
}
.opinion_Card_text {
  width: 25vw;
  min-width: 300px;
  margin-top: 17px;
  /* height: 174px; */
  /* max-height: 174px; */
  overflow: hidden;
  /* border:1px solid rgba(235,236,240,1); */
  /* padding:   20px; */
  line-height: 20px;
  resize: none;
  font-size: 14px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(153, 153, 153, 1);
}
.opinion {
  width: 100%;
  min-width: 1200px;
  height: 920px;
  background-image: url("../icon/服务管家_意见反馈背景图.jpg");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.idea_item_tips {
  font-size: 0.72vw;
  font-family: Microsoft YaHei;
  font-weight: 400;
  margin-top: 14px;
  color: rgba(255, 255, 255, 1);
}
.idea_item_title {
  font-size: 1.05vw;
  font-family: Microsoft YaHei;
  font-weight: bold;
  margin-top: 31px;
}
.idea_item_tips2 {
  color: rgba(102, 102, 102, 1);
}
.idea_image {
  /* height: 80px; */
  width: 4.16vw;
  min-width: 50px;
  margin-top: 61px;
}
.idea_top {
  width: 3.02vw;

  min-width: 36px;
  height: 58px;
  border-radius: 0 0 0 58px;
  position: absolute;
  top: 0px;
  right: 0px;
  color: rgba(255, 255, 255, 1);
  background: rgba(108, 108, 130, 1);
  font-size: 32px;
  font-family: Alibaba;
  font-weight: normal;
  text-align: right;
  padding-right: 0.5vw;
  line-height: 50px;
  overflow: hidden;
}
.idea_item {
  width: 19.8vw;
  height: 280px;
  min-width: 240px;
  margin: 0px 15px;
  margin-bottom: 30px;
  background: rgba(56, 56, 80, 1);
  color: rgba(255, 255, 255, 1);
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  transition: all .3s;
}
.idea_item:hover{
  box-shadow:0px 2px 10px 0px rgba(255, 255, 255, 0.5);
}
.idea_item:hover > .idea_image {
  width: 4.5vw;
}
.idea_item:hover >.idea_item_title{
  font-size: 1.1vw;
}
.idea_item:hover >.idea_item_tips{
  font-size: 0.8vw;
}
.idea_item2 {
  color: rgba(0, 0, 0, 1);
  background: rgba(255, 255, 255, 1);
}
.idea_list {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 59px;
}
.idea_tips {
  font-size: 16px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  margin-top: 20px;
}
.idea_border {
  width: 60px;
  height: 4px;
  background: rgba(255, 255, 255, 1);
  margin-top: 16px;
}
.idea_title {
  line-height: 40px;
  font-size: 40px;
  font-family: SourceHanSansSC;
  font-weight: bold;
  color: rgba(255, 255, 255, 1);
  margin-top: 80px;
  text-align: center;
}
.idea {
  width: 100%;
  height: 920px;
  min-width: 1200px;
  background-image: url("../icon/服务管家_服务理念背景图.jpg");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  overflow: hidden;
  margin-top: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
}
.servesev_tips_tips {
  width: 19.5vw;
  min-width: 234px;
  height: 128px;
  font-size: 16px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(102, 102, 102, 1);
  margin-top: 35px;
}
.servesev_tips_border {
  width: 3.125vw;
  height: 4px;
  margin-top: 16px;
  background: rgba(23, 98, 224, 1);
}
.serve_tips_title {
  line-height: 38px;
  font-size: 2.08vw;
  font-family: SourceHanSansSC;
  font-weight: bold;
  color: rgba(0, 0, 0, 1);
  margin-top: 54px;
}
.serve_tips {
  width: 25vw;
  min-width: 300px;
  height: 334px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 6px 28px 2px rgba(17, 77, 178, 0.16);
  position: absolute;
  top: 40px;
  right: -200px;
  overflow: hidden;
  padding-left: 50px;
}
.serve_image {
  width: 52.08vw;
  min-width: 624px;
  height: 500px;
}
.serve {
  width: 52.08vw;
  min-width: 624px;
  height: 500px;
  position: relative;
  margin: 0px auto;
  margin-top: 90px;
}
.header_tips {
  height: 28px;
  font-size: 1.56vw;
  font-family: SourceHanSansSC;
  font-weight: 500;
  color: rgba(27, 27, 44, 1);
  margin-top: 27px;
  margin-left: 2.91vw;
}
.header_tips {
  width: 25.41vw;
  min-width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  background: rgba(155, 188, 207, 1);
}
.tips_border {
  width: 6px;
  height: 6px;
  background: rgba(27, 27, 44, 1);
  border-radius: 50%;
  margin: 0px 0.625vw;
}
.title {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  line-height: 57px;
  font-size: 3.125vw;
  font-family: SourceHanSansSC;
  font-weight: bold;
  color: rgba(255, 255, 255, 1);
}
.title_border {
  width: 12px;
  height: 12px;
  background: rgba(255, 255, 255, 1);
  border-radius: 2px;
  margin: 0px 26px;
}
.header_info {
  margin-top: 180px;
  margin-left: 46.92vw;
}
.header {
  width: 100%;
  min-width: 1200px;
  min-height: 650px;
  background-image: url("../icon/服务管家_banner图.jpg");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  overflow: hidden;
}
.home {
  width: 100%;
  min-width: 1200px;
}
</style>
