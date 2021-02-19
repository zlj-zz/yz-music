<template>
  <div class="footer" role="footer">
    <div class="section_inner">
      <div class="footer_info">
        <div class="footer_platform">
          <h3 class="footer_tit">链接</h3>
          <ul class="footer_platform_list">
            <li class="footer_platform_list__item">
              <a
                href="https://github.com/zlj-zz/yz-music"
                target="_blank"
                class="js_other_link"
                >项目GitHub地址</a
              >
            </li>
            <li class="footer_platform_list__item">
              <a
                href="http://blog.zacharyzlj.cn/"
                target="_blank"
                class="js_other_link"
                >博客地址</a
              >
            </li>
            <li class="footer_platform_list__item">
              <a
                href="https://blog.csdn.net/qq_38410494?spm=1011.2124.3001.5343"
                target="_blank"
                class="js_other_link"
                >CSDN</a
              >
            </li>
          </ul>
        </div>
      </div>
      <div class="footer_copyright">
        <p>Copyright © 2020 - {{ date }}</p>
        <p>本项目仅学习用途</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    date() {
      return new Date().getFullYear();
    },
  },
};
</script>

<style scoped>
h3,
li,
p,
ul {
  margin: 0;
  padding: 0;
}
.section_inner {
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
}
.footer {
  color: #666;
  background-color: #f2f2f2;
  clear: both;
}
.footer_info {
  overflow: hidden;
  /*border-bottom: 1px solid #353535;*/
  position: relative;
}

.footer_platform {
  margin: 0 0 0 150px;
}
.footer_tit {
  font-size: 18px;
  font-weight: 400;
  padding: 20px 0 10px;
}
.footer_platform_list {
  margin-left: -25px;
}
.footer_platform_list__item {
  float: left;
  min-width: 100px;
  margin: 0 5px 12px 0;
  text-indent: 25px;
}

.footer_copyright {
  text-align: center;
  line-height: 28px;
  /*padding: 24px 0;*/
  padding-bottom: 24px;
}
.footer_copyright {
  font-size: 12px;
}
.footer a {
  color: #666;
}
</style>

