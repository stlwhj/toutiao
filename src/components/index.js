import MyTest from '@/components/my-test'
import MyBread from '@/components/my-bread'

export default {
  install (Vue) {
    Vue.component(MyTest.name, MyTest)
    Vue.component(MyBread.name, MyBread)
  }
}
