<template>
  <div class="mod_comment" id="comment_box">
    <div class="part__hd">
      <h2 class="part__tit">
        评论<span class="c_tx_thin part__tit_desc js_all_comment_num"
          >共{{ total }}条评论</span
        >
      </h2>
    </div>
    <div class="mod_comment js_cmt_input">
      <div class="comment__input" style="display: none">
        <div class="comment__textarea js_comment__textarea c_bg_normal">
          <div class="comment__textarea_inner">
            <!--c_tx_normal-->
            <!--focus评论框的时候将.comment__textarea_default模块隐藏，同时显示.comment__textarea_input-->
            <div
              class="comment__textarea_default c_tx_thin js_reply_text_blur"
              name=""
              id="reply_text_blur"
              contenteditable="true"
            >
              期待你的神评论……
            </div>
            <div
              class="js_reply_text comment__textarea_input c_tx_normal"
              name=""
              id="reply_text"
              style="display: none"
              contenteditable="true"
            ></div>
          </div>
          <!--字数超过后添加comment__tips--warn_tx 去掉c_tx_thin-->
          <div class="comment__tips js_comment_tips c_tx_thin" data-max="300">
            剩余<span class="c_tx_highlight">300</span>字
          </div>
        </div>
        <a class="comment__face js_cmt_face" data-type="reply"
          ><i class="icon_comment icon_comment_face"></i
        ></a>
        <div class="comment__tool">
          <a class="mod_btn_green comment__tool_btn js_send_reply">发表评论</a>
        </div>
      </div>
    </div>
    <div class="mod_all_comment js_mod_all">
      <div class="comment_type__title c_b_normal">
        <h2 class="comment_new_count">最热评论({{ total }})</h2>
      </div>
      <ul class="comment__list js_all_list">
        <li
          class="comment__list_item c_b_normal js_cmt_li"
          v-for="comment in comments"
          :key="comment.commentId"
        >
          <a class="comment__avatar js_nick">
            <img
              class="js_lazy_comment_pic"
              src="//y.gtimg.cn/mediastyle/global/img/person_300.png?max_age=2592000"
              v-lazy="comment.user.avatarUrl"
              :alt="comment.user.nickname星河"
              :title="comment.user.nickname星河"
            />
          </a>
          <h4 class="comment__title">
            <a
              class="c_tx_thin js_nick js_nick_only"
              :id="comment.user.userId"
              >{{ comment.user.nickname }}</a
            >
          </h4>

          <div v-if="comment.beReplied && comment.beReplied.length > 0">
            <p class="c_tx_normal comment__text js_middle js_hot_text">
              回复
              <a
                class="js_nick js_replyed_nick c_tx_current"
                :id="comment.beReplied[0].user.userId"
                >{{ comment.beReplied[0].user.nickname }}</a
              >: <span class="js_subcomment">{{ comment.content }}</span>
            </p>
            <p
              class="c_tx_normal comment__text c_tx_thin comment__text--history js_hot_text"
            >
              {{ comment.beReplied[0].content }}
            </p>
          </div>
          <p class="c_tx_normal comment__text js_hot_text" v-else>
            {{ comment.content }}
          </p>

          <div class="comment__opt js_comment_opt">
            <span class="comment__date c_tx_thin">{{
              formatDate(comment.time)
            }}</span>
            <a class="comment__report js_cmt_accusation" style="display: none"
              >举报</a
            >
            <a class="comment__zan js_cmt_praise"
              ><i class="icon_comment icon_comment_like"></i
              ><span class="js_praise_num">{{ comment.likedCount }}</span></a
            >
            <a
              class="comment__feedback js_feedback icon_comment icon_comment_feedback"
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

export default {
  props: {
    comments: {
      type: Array,
      default: [],
    },
    limit: { default: 10 },
    currentPage: { default: 0 },
    total: { default: 0 },
  },
  methods: {
    currentChange(v) {
      this.$emit("current-change", v);
    },
    formatDate,
  },
};
</script>

<style scoped>
ul {
  padding: 0;
  margin: 0;
}
</style>
