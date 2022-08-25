import Vue from "vue/dist/vue.js"; // 故意使用完整版


Vue.config.productionTip = false;

new Vue({
  directives: {
    on2: {
      // bind 可以改为 inserted
      bind(el, info) {
        el.addEventListener(info.arg, info.value);
        // Vue 自带的 v-on 并不是这样实现的，它更复杂，用了事件委托
      },
      unbind(el, info) {
        el.removeEventListener(info.arg, info.value);
      }
    }
  },
  template: `
    <button v-on2:click="hi">点我</button>
  `,
  methods: {
    hi() {
      console.log("hi");
    }
  }
}).$mount("#app");
