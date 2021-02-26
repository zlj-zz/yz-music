export * from "./storeHelper";
export * from "./apiHelper";
export * from "./routerHelper";

export function isDef(v) {
  return v !== undefined && v !== null;
}

export function copyText(v) {
  let oInput = document.createElement("input");
  oInput.value = v;
  document.body.appendChild(oInput);
  oInput.select(); // 选择对象;
  //console.log(oInput.value);
  document.execCommand("Copy"); // 执行浏览器复制命令
}
