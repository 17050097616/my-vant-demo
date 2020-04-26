function toast(vueObj, msg) {
  vueObj.$toast(msg);
  console.log(msg)
}

export {
  toast,
}