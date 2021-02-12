<template>

<div class="g-bd">
  <div class="g-wrap p-prf">
    <dl class="m-proifo f-cb" id="head-box">
      <dt class="f-pr" id="ava">
        <img :src="userObj.profile.avatarUrl">
      </dt>
      <dd>
        <div class="name f-cb">
          <div class="f-cb">
            <h2 id="j-name-wrap" class="wrap f-fl f-cb wrap-3">
              <span class="tit f-ff2 s-fc0 f-thide">{{userObj.profile.artistName}}</span>
            </h2>
          </div>
          <p class="djp f-fs1 s-fc3">{{userObj.identify.imageDesc}}</p>
        </div>
        <ul class="data s-fc3 f-cb" id="tab-box">
          <li class="fst">
            <a href="/user/event?id=97137413">
              <strong id="event_count">{{userObj.profile.eventCount}}</strong>
              <span>动态</span>
            </a>
          </li>
          <li>
            <a href="/user/follows?id=97137413">
            <strong id="follow_count">{{userObj.profile.follows}}</strong>
            <span>关注</span>
            </a>
          </li>
          <li>
            <a href="/user/fans?id=97137413">
              <strong id="fan_count">{{userObj.profile.followeds}}</strong>
              <span>粉丝</span>
            </a>
          </li>
        </ul>
        <div class="inf s-fc3">
          <span>签名：{{userObj.profile.signature}} </span>
        </div>
      </dd>
    </dl>
  </div>

  <ul id="m_tabs" class="m-tabs f-cb">
    <li class="fst"><a href="/artist?id=5781" class="z-slt"><em>热门作品</em></a></li>
    <li><a href="/artist/album?id=5781"><em>所有专辑</em></a></li>
    <li><a href="/artist/mv?id=5781"><em>相关MV</em></a></li>
    <li><a href="/artist/desc?id=5781"><em>艺人介绍</em></a></li>
  </ul>
</div>

</template>

<script>
import { getUserDetail } from 'api';

export default {
  data() {
    return {
      activeName: 'first',
      id: this.$route.query.id,
      accountId: this.$route.query.accountId,
      userObj: null,
    };
  },
  created() {
    getUserDetail(this.accountId).then(res => {
          console.log(res)
          this.userObj = res.data
        })

  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
  
}
</script>

<style scoped>
h1,
h2,
h3,
h4,
h5,
h6,
ul,
ol,
li,
dl,
dt,
dd,
header,
menu,
section,
p,
input,
td,
th,
ins {
  padding: 0;
  margin: 0;
}

.g-bd,
.g-bd1,
.g-bd2,
.g-bd3,
.g-bd4,
.g-bd5,
.g-bd6,
.g-bd7 {
  width: 980px;
  min-height: 700px;
  _height: 700px;
  margin: 0 auto;
  background-color: #fff;
  border: 1px solid #d3d3d3;
  border-width: 0 1px;
}

.g-wrap {
  padding: 40px;
}

.m-proifo {
  margin-bottom: 43px;
}

.m-proifo dt {
  float: left;
  width: 188px;
  margin-right: 40px;
}

.f-pr {
  position: relative;
  zoom: 1;
}

.m-proifo dt img {
  display: block;
  width: 180px;
  height: 180px;
  padding: 3px;
  background: #fff;
  border: 1px solid #d5d5d5;
}

.m-proifo dd {
  float: left;
  width: 670px;
}

.m-proifo .name {
  padding-bottom: 12px;
  margin-bottom: 10px;
  border-bottom: 1px solid #ddd;
}

.m-proifo .name .wrap {
  padding-bottom: 3px;
}

.f-fl {
  float: left;
}

.m-proifo .name .wrap-3 .tit {
  max-width: 260px;
}

.m-proifo .name .tit {
  float: left;
  margin-top: 3px;
  font-size: 22px;
  font-weight: normal;
  line-height: 30px;
}

.s-fc0,
a.s-fc0:hover {
  color: #000;
}

.f-thide {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: normal;
}

.f-ff2 {
  font-family: "Microsoft Yahei", Arial, Helvetica, sans-serif;
}

.m-proifo .name .btn {
  float: left;
  margin: 4px 0 0 15px;
}

.u-btn-6,
.u-btn-ygz {
  width: 70px;
  height: 31px;
  background-position: 0 -919px;
}

.u-btn {
  display: inline-block;
}

.u-btn-5 {
  width: 81px;
  height: 31px;
  background-position: 0 -955px;
}

.u-btn-8 {
  width: 40px;
  height: 31px;
  padding-left: 30px;
  background-position: 0 -720px;
  color: #fff;
  line-height: 30px;
}

.m-proifo .name .djp:first-of-type {
  margin-top: 8px;
}

.m-proifo .name .djp {
  margin-top: 6px;
  line-height: 20px;
  float: left;
}

.f-fs1 {
  font-size: 14px;
}

.m-proifo .data {
  height: 41px;
  margin-bottom: 15px;
}

.m-proifo .data a {
  display: inline-block;
  *display: inline;
  position: relative;
  zoom: 1;
  color: #666;
}

.m-proifo .data a:hover {
  color: #31c27c;
}

.m-proifo .data strong {
  display: block;
  margin-top: -4px;
  font-size: 24px;
  font-weight: normal;
  cursor: pointer;
}

.m-proifo .data .fst {
  padding-left: 0;
  border-left: none;
}

.m-proifo .data li {
  float: left;
  padding: 0 40px 0 20px;
  border-left: 1px solid #ddd;
}

.f-cb::after {
  clear: both;
  content: ".";
  display: block;
  height: 0;
  visibility: hidden;
}

.m-proifo .inf {
  margin-bottom: 5px;
  line-height: 21px;
  float: left;
  font-size: 12px;
}

li,
s {
  list-style: none;
}

a {
  color: #333;
}
</style>
