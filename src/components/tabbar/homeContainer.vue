<template>
  <div>
    <!-- 轮播图 -->
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in lunbotuList" :key="item._id">
        <img :src="item.url" alt>
      </mt-swipe-item>
    </mt-swipe>

    <!-- 九宫格 -->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
        <router-link to="/home/newslist">
          <span class="mui-icon mui-icon-extra mui-icon-extra-new"></span>
          <div class="mui-media-body">新闻资讯</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
        <a href="#">
          <span class="mui-icon mui-icon-image"></span>
          <div class="mui-media-body">图片分享</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
        <a href="#">
          <span class="mui-icon mui-icon-eye"></span>
          <div class="mui-media-body">商品购买</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
        <a href="#">
          <span class="mui-icon mui-icon-chat"></span>
          <div class="mui-media-body">留言反馈</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
        <a href="#">
          <span class="mui-icon mui-icon-extra mui-icon-extra-card"></span>
          <div class="mui-media-body">视频专区</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
        <a href="#">
          <span class="mui-icon mui-icon-extra mui-icon-extra-peoples"></span>
          <div class="mui-media-body">联系我们</div>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      lunbotuList: []
    };
  },
  methods: {
    // 获取轮播图数据
    getlunbotu() {
      this.$http.get("lunbotu").then(result => {
        this.lunbotuList = result.body;
      });
    }
  },
  created() {
    // 初始化时获取一次数据
    this.getlunbotu();
  }
};
</script>
<style lang="scss" scoped>
.mint-swipe {
  height: 200px;
  overflow: hidden;
  img {
    display: block;
    margin: 0 auto;
    height: 100%;
    width: 100%;
  }
}

.mui-grid-view.mui-grid-9 {
  margin-top: 6px;
  background-color: #fff;
  border: none;
  li {
    border: none;
  }
  .mui-media-body {
    font-size: 13px;
  }
}
</style>

