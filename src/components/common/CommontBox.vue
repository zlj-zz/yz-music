<template>
  <div class="mod_comment" id="comment_box">
    <div class="part__hd">
      <h2 class="part__tit">
        评论<span class="c_tx_thin part__tit_desc">共{{ total }}条评论</span>
      </h2>
    </div>
    <div class="mod_comment">
      <div class="comment__input" style="display: none">
        <div class="comment__textarea c_bg_normal">
          <div class="comment__textarea_inner">
            <!--c_tx_normal-->
            <!--focus评论框的时候将.comment__textarea_default模块隐藏，同时显示.comment__textarea_input-->
            <div
              class="comment__textarea_default c_tx_thin"
              name=""
              id="reply_text_blur"
              contenteditable="true"
            >
              期待你的神评论……
            </div>
            <div
              class="comment__textarea_input c_tx_normal"
              name=""
              id="reply_text"
              style="display: none"
              contenteditable="true"
            ></div>
          </div>
          <!--字数超过后添加comment__tips--warn_tx 去掉c_tx_thin-->
          <div class="comment__tips c_tx_thin" data-max="300">
            剩余<span class="c_tx_highlight">300</span>字
          </div>
        </div>
        <a class="comment__face" data-type="reply"
          ><i class="icon_comment icon_comment_face"></i
        ></a>
        <div class="comment__tool">
          <a class="mod_btn_green comment__tool_btn">发表评论</a>
        </div>
      </div>
    </div>
    <div class="mod_all_comment">
      <div class="comment_type__title c_b_normal">
        <h2 class="comment_new_count">最热评论({{ total }})</h2>
      </div>
      <ul class="comment__list">
        <li
          class="comment__list_item c_b_normal"
          v-for="comment in comments"
          :key="comment.commentId"
        >
          <a class="comment__avatar">
            <img
              src="//y.gtimg.cn/mediastyle/global/img/person_300.png?max_age=2592000"
              v-lazy="comment.user.avatarUrl"
              :alt="comment.user.nickname星河"
              :title="comment.user.nickname星河"
            />
          </a>
          <h4 class="comment__title">
            <a class="c_tx_thin" :id="comment.user.userId">{{
              comment.user.nickname
            }}</a>
          </h4>

          <div v-if="comment.beReplied && comment.beReplied.length > 0">
            <p class="c_tx_normal comment__text">
              回复
              <a class="c_tx_current" :id="comment.beReplied[0].user.userId">{{
                comment.beReplied[0].user.nickname
              }}</a
              >: <span>{{ comment.content }}</span>
            </p>
            <p
              class="c_tx_normal comment__text c_tx_thin comment__text--history"
            >
              {{ comment.beReplied[0].content }}
            </p>
          </div>
          <p class="c_tx_normal comment__text" v-else>
            {{ comment.content }}
          </p>

          <div class="comment__opt">
            <span class="comment__date c_tx_thin">{{
              formatDate(comment.time)
            }}</span>
            <a class="comment__report" style="display: none">举报</a>
            <a class="comment__zan"
              ><i class="icon_comment icon_comment_like"></i
              ><span>{{ comment.likedCount }}</span></a
            >
            <a class="comment__feedback icon_comment icon_comment_feedback"
              >回复</a
            >
          </div>
          <div class="js_reply_container"></div>
        </li>
      </ul>
    </div>
    <el-pagination
      background
      style="text-align: center; padding-bottom: 20px"
      layout="prev, pager, next"
      :page-size="limit"
      :total="total"
      :current-page="currentPage"
      @current-change="currentChange"
    >
    </el-pagination>
  </div>
</template>

<script>
import { formatDate } from "common/utils";
import pagination from "common/pagination";
import { getCommentsNew } from "api";

export default {
  setup() {
    return { ...pagination() };
  },
  props: {
    params: {
      type: Object,
      default: {},
    },
  },
  created() {
    this.update();
  },
  data() {
    return {
      type: "comments",
      comments: [],
    };
  },
  methods: {
    update() {
      if (this.params.id > 1) {
        let s = this.updateList(getCommentsNew, this.type, this.params).then(
          (res) => {
            console.log(res);
            this.comments = res;
          }
        );
      }
    },
    formatDate,
  },
  watch: {
    currentPage() {
      this.update();
    },
    params() {
      this.currentPage = 1;
      this.update();
    },
  },
};
</script>

<style scoped>
ul {
  padding: 0;
  margin: 0;
}
</style>
