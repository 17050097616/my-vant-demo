const Swal = require('sweetalert2')
const VantUtil = require('./VantUtil')



function testPromise() {
  // 从new promise出来开始,就会执行构造器里面的函数,.then()里面的函数只是定义resolve的函数体
  let testPromise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('i am resolve')
      console.log('resolve do');
    }, 2000)
    console.log('Promise do');

  })
  console.log(testPromise1);

  // testPromise1.then((value) => {
  //   console.log(value);
  // })
}

function selectDialog(vueObj) {
  async function test() {
    const { value: fruit } = await Swal.fire({
      title: 'Select field validation',
      input: 'select',
      inputOptions: {
        apples: 'Apples',
        bananas: 'Bananas',
        grapes: 'Grapes',
        oranges: 'Oranges'
      },
      inputPlaceholder: 'Select a fruit',
      showCancelButton: true,
      inputValidator: (value) => {
        return new Promise((resolve) => {
          if (value === 'oranges') {
            console.log(fruit);//undefined 此时fruit还没定义
            resolve()//这步执行后会关闭弹框
          } else {
            resolve('You need to select oranges :)')//这步执行后会在下拉框下面显示提示
          }
        })
      }
    })
    if (fruit) {
      console.log(fruit);//oranges
      Swal.fire(`You selected: ${fruit}`)
    }
  }
  test()
}

function asyncAwait() {
  function takeLongTime() {
    return new Promise(resolve => {
      setTimeout(() => resolve("long_time_value"), 5000);
    });
  }

  async function test1() {
    console.log('before takeLongTime')
    // const v = await takeLongTime();//await会等待setTimeout()里面的函数体执行完
    // console.log(v);//v是long_time_value,即resolve的实参
    // v.then((value) => {
    //   console.log(value);
    // })//报错,因为v不是promise,没有then函数
    //---------------------------------------

    const v = takeLongTime();
    console.log(v);//v是pending状态的promise
    v.then((value) => {
      console.log(value);
    })//正确
    console.log('after takeLongTime');
  }

  test1();
  console.log('call test1')

}

function longestToast(vueObj) {
  vueObj.$toast({
    duration: 0, // 持续展示 toast
    closeOnClickOverlay: true,//是否在点击遮罩层后关闭,要配合overlay=true使用
    // closeOnClick: true,//是指点击toast本身
    message: 'haha',
    overlay: true,

  });
}
function delayToast(vueObj) {
  vueObj.$toast({
    duration: 4000, // 持续展示 toast
    // closeOnClick: true,//是指点击toast本身
    message: 'haha',

  });
}


// function selectDialog() { }

function nestedDialog(vueObj) {
  vueObj.$dialog.confirm({
    title: '缴费查询信息',
    message: 'haha',
    messageAlign: 'left'
  }).then(() => {
    // on confirm
    //todo 追加客户授权弹窗
    vueObj.$dialog.confirm({
      title: '提示',
      message: '是否同意把信息发送到人保?',
    }).then(() => {
      // on confirm
      VantUtil.toast(vueObj, 'nestedDialog')
    }).catch(() => {
      // on cancel
      VantUtil.toast(vueObj, '用户取消交易')
    });
    // myReadCard(vueObj, recvPackage)
  }).catch(() => {
    // on cancel
  });

}

// async function SwalDialog(vueObj) {
//   // Swal.fire({
//   //   title: 'Are you sure?',
//   //   text: 'You will not be able to recover this imaginary file!',
//   //   icon: 'warning',
//   //   showCancelButton: true,
//   //   confirmButtonText: 'Yes, delete it!',
//   //   cancelButtonText: 'No, keep it'
//   // }).then((result) => {
//   //   if (result.value) {
//   //     Swal.fire(
//   //       'Deleted!',
//   //       'Your imaginary file has been deleted.',
//   //       'success'
//   //     )
//   //     // For more information about handling dismissals please visit
//   //     // https://sweetalert2.github.io/#handling-dismissals
//   //   } else if (result.dismiss === Swal.DismissReason.cancel) {
//   //     Swal.fire(
//   //       'Cancelled',
//   //       'Your imaginary file is safe :)',
//   //       'error'
//   //     )
//   //   }
//   // }) async await
// }

// module.exports = {
//   longestToast,
//   delayToast,
//   SwalDialog
// };
export {
  longestToast,
  delayToast,
  nestedDialog,
  testPromise,
  asyncAwait,
  selectDialog
};
