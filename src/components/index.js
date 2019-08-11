import MyTest from '@/components/my-test'
import MyBread from '@/components/my-bread'

import MyChannel from '@/components/my-channel'
import MyImage from '@/components/my-image'

export default {
  install (Vue) {
    Vue.component(MyTest.name, MyTest)
    Vue.component(MyBread.name, MyBread)
    Vue.component(MyChannel.name, MyChannel)
    Vue.component(MyImage.name, MyImage)
  }
}
