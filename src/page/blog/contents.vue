<template>
  <div id="contents">
    <div class="partingImg">
      <img
        src="https://xiamo.oss-cn-shenzhen.aliyuncs.com/gitee-mashiro/bilibili_1.png"
      />
    </div>
    <div
      class="details"
      v-for="(data, index) in list"
      :index="index"
      :style="{ 'margin-top': index > 0 ? '50px' : '' }"
    >
      <div
        @click="contentClick(data.id)"
        class="content_image"
        :style="{ float: index % 2 == 0 ? 'left' : 'right' }"
      >
        <!-- <img :src="data.coverImg" /> -->
        <div
          :style="{ 'background-image': 'url(' + data.coverImg + ')' }"
        ></div>
      </div>
      <div class="content_area">
        <div
          class="release_time"
          :style="{ 'text-align': index % 2 == 0 ? 'right' : 'left' }"
        >
          <span
            ><i class="far fa-clock icon_size"></i>&nbsp;&nbsp;发布于
            {{ data.createTime }}</span
          >
        </div>
        <div
          class="content_title"
          :style="{ 'text-align': index % 2 == 0 ? 'right' : 'left' }"
        >
          <span @click="contentClick(data.id)">{{ data.title }}</span>
        </div>
        <div
          class="content_full"
          :style="{ 'text-align': index % 2 == 0 ? 'right' : 'left' }"
        >
          <span
            ><i class="far fa-comment-dots icon_size"></i>&nbsp;&nbsp;{{
              data.commentNum
            }}条评论</span
          >
          <span style="margin-left: 8px;"
            ><i class="far fa-folder icon_size"></i>&nbsp;&nbsp;{{
              data.creatorNickname
            }}</span
          >
        </div>
        <div
          class="content_text"
          :style="{ 'text-align': index % 2 == 0 ? 'right' : 'left' }"
        >
          <span>{{ data.contentMini }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import router from '../../router';
import { list } from '@/js/api/admin/blog';
export default {
  name: 'contents',
  data() {
    return {
      details: [
        {
          time: '2020-05-28',
          title: 'emmmmmm',
          short_content:
            'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
          img: 'https://xiamo.oss-cn-shenzhen.aliyuncs.com/gitee-mashiro/2.png',
          comment_num: '2',
          from: 'xiamo'
        },
        {
          time: '2020-05-22',
          title: 'emmmmmmm',
          short_content:
            'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
          img: 'https://xiamo.oss-cn-shenzhen.aliyuncs.com/gitee-mashiro/2.png',
          comment_num: '1',
          from: 'xiamo'
        }
      ],
      list: [],
      page: 1,
      size: 10
    };
  },
  methods: {
    contentClick(id) {
      this.$router.push({ path: '/blog', query: { id: id } });
    },
    reload() {
      let data = {
        page: (this.page - 1) * this.size,
        size: this.size
      };
      list(data).then((response) => {
        if (response) {
          this.list = response;
        }
      });
    }
  },
  created() {
    this.reload();
  }
};
</script>

<style scoped>
#contents {
  padding-bottom: 300px;
}

.details {
  height: 300px;
  width: 800px;
  margin: 0 auto;
  border-radius: 10px;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.4);
  overflow: hidden;
}

.partingImg {
  margin: 40px auto;
  text-align: center;
}

.partingImg img {
  height: 50px;
}

.content_image {
  height: 100%;
  width: 450px;
  /*float: left;*/
  overflow: hidden;
}

.content_image div {
  background-size: cover;
  background-repeat: no-repeat;
  height: 100%;
  width: 100%;
  transition: all 0.5s linear;
}

.content_image div:hover {
  transform: scale(1.1);
  -webkit-transform: scale(1.1); /*兼容-webkit-引擎浏览器*/
  -moz-transform: scale(1.1); /*兼容-moz-引擎浏览器*/
}

.content_image img {
  width: 100%;
  transition: all 0.5s linear;
}

.content_image img:hover {
  transform: scale(1.1);
  -webkit-transform: scale(1.1); /*兼容-webkit-引擎浏览器*/
  -moz-transform: scale(1.1); /*兼容-moz-引擎浏览器*/
}

.content_area {
  height: 100%;
  width: 350px;
  float: left;
}

.release_time {
  margin: 20px 20px;
  font-size: 12px;
  font-weight: 100;
  /*text-align: right;*/
  color: #888;
}

.icon_size {
  font-size: 14px;
}

.content_title {
  margin: 20px 20px;
  /*text-align: right;*/
  font-size: 17px;
  font-weight: bold;
}

.content_title span {
  color: black;
  transition: color 0.15s linear;
}

.content_title span:hover {
  color: #fe9600;
}

.content_full {
  margin: 20px 20px;
  color: #888;
  font-size: 12px;
}

.content_text {
  margin: 20px 20px;
}

.content_text span {
  font-size: 14px;
  max-height: 130px;
  overflow: hidden;
  display: -webkit-box;
  word-break: break-all;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 6;
}
</style>
