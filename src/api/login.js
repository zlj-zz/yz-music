import { requset } from "./base";

export const getLoginKey = () =>
  requset.get("/login/qr/key", {
    params: { timerstamp: new Date().getTime() }
  });

export const getLoginQrCode = key =>
  requset.get("/login/qr/create", {
    params: { key: key, qrimg: true, timerstamp: new Date().getTime() }
  });

// 800为二维码过期,801为等待扫码,802为待确认,803为授权登录成功(803状态码下会返回cookies)
export const getLoginQrScanState = key =>
  requset.get(`/login/qr/check`, {
    params: { key: key, timerstamp: new Date().getTime() }
  });

export const getLoginStatus = () => requset.get("/login/status");

export const logout = () => requset.get("/logout");
