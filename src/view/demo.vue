<template>
  <!-- <div> -->
  <!-- <div>
      <van-button
        v-for="btnItem in viewData.btnData"
        type="primary"
        @click.native="tabClickHandler(btnItem)"
      >{{btnItem.text}}</van-button>
  </div>-->
  <!-- <div> -->
  <van-grid :column-num="8">
    <van-grid-item
      v-for="btnItem in viewData.btnData"
      @click.native="tabClickHandler(btnItem)"
      :text="btnItem.text"
    />
    <!-- <van-grid-item icon="photo-o" text="文字" />
        <van-grid-item icon="photo-o" text="文字" />
    <van-grid-item icon="photo-o" text="文字" />-->
  </van-grid>
  <!-- </div> -->
  <!-- </div> -->
</template>

<script>
export default {
  name: "demo",
  data() {
    return {
      viewData: require(`../view/viewData`),
      viewMethods: require(`../controller/demo`)
    };
  },
  methods: {
    tabClickHandler(item) {
      this.viewMethods[item.method](this);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
