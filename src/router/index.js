import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Items from '@/components/Items'
import ItemForm from '@/components/ItemForm'
import Item from '@/components/Item'
import store from '@/store'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home,
      children: [
        {
          path: '',
          name: 'Home',
          component: Items
        },
        {
          path: '/item-form',
          name: 'ItemForm',
          component: ItemForm,
          beforeEnter: (to, from, next) => {
            if (store.state.auth.isAuthenticated) {
              next()
            } else {
              next('/')
            }
          }
        },
        {
          path: '/item/:id',
          name: 'Item',
          component: Item,
          props: true
        }
      ]
    },
    {
      path: '*',
      component: Home
    }
  ]
})
