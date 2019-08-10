import MyTest from '@/components/my-test'
import MyBread from '@/components/my-bread'

import MyChannel from '@/components/my-channel'

export default {
  install (Vue) {
    Vue.component(MyTest.name, MyTest)
    Vue.component(MyBread.name, MyBread)
    Vue.component(MyChannel.name, MyChannel)
  }
}
