/**
 * @author XiaChengxing
 * @date 2019/3/26 11:10 AM
 */
import toTop from './x-backToTop.vue'

const comment = {
  install: function (Vue) {
    Vue.component(toTop.name, toTop)
  }
}
// global 情况下 自动安装
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(comment)
}

export default comment
