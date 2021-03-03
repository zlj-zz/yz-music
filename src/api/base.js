import axios from "axios";
import { ElMessage } from "element-plus";

const BASIC_URL = "http://musicapi.zacharyzlj.cn/";
//const BASIC_URL = "http://192.168.31.152:3000/";

function createBaseInstance() {
  const instance = axios.create({
    baseURL: BASIC_URL,
    withCredentials: true,
    retry: 3,
    retryInterval: 2000
  });
  instance.retryDelay = 2000;
  instance.defaults.timeout = 2000;
  instance.interceptors.request.use(
    function(config) {
      return config;
    },
    function(error) {
      return Promise.reject(error);
    }
  );

  instance.interceptors.response.use(
    res => {
      return res;
    },
    function(error) {
      let config = error.config;

      if (!config || !config.retry) return Promise.reject(error);

      config.__retryCount = config.__retryCount || 0;

      if (config.__retryCount >= config.retry) {
        ElMessage.error("请检查你的网络，并尝试手动刷新");
        return Promise.reject(error);
      }

      config.__retryCount++;

      let backoff = new Promise(function(resolve) {
        console.log("retry time: " + config.__retryCount);
        resolve();
      }, config.retryDelay || 1);

      return backoff.then(function() {
        return instance(config);
      });
    }
  );

  return instance;
}

export const requset = createBaseInstance();
