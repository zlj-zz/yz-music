import { request } from "./base";

export const getLoginKey = () =>
  request.get("/login/qr/key", {
    params: { timerstamp: new Date().getTime() }
  });

export const getLoginQrCode = key =>
  request.get("/login/qr/create", {
    params: { key: key, qrimg: true, timerstamp: new Date().getTime() }
  });

// 800为二维码过期,801为等待扫码,802为待确认,803为授权登录成功(803状态码下会返回cookies)
export const getLoginQrScanState = key =>
  request.get(`/login/qr/check`, {
    params: { key: key, timerstamp: new Date().getTime() }
  });

export const getLoginStatus = () => request.get("/login/status");

export const logout = () => request.get("/logout");
