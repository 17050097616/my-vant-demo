function toast(vueObj, msg) {
  vueObj.$toast(msg);
  console.log(msg)
}

function longestToast(vueObj, msg) {
  if (vueObj) {
    vueObj.$toast({
      duration: 0, // 持续展示 toast
      closeOnClickOverlay: true,//是否在点击遮罩层后关闭,要配合overlay=true使用
      // closeOnClick: true,//是指点击toast本身
      message: msg,
      overlay: true,
    });
  } else {
    console.log('vueObj==null')
  }

}

export {
  longestToast,
  toast
}