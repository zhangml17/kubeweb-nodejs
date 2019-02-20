import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import kuweb from '@/components/web-ui'
// import ProgressBar from '@/components/progress-bar'
import ProgressBar from '@/components/progressBar'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'kuweb',
      component: kuweb
    },
	{
      path: '/home',
      name: 'home',
      component: kuweb
    },
    {
      path: '/progressbar',
      name: 'Progressbar',
      component: ProgressBar
    }
  ]
})
