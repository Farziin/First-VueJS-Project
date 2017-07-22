'use strict'

import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


const _9507b4fa = () => import('D:\\Projects\\FirstVueProject\\pages\\index.vue' /* webpackChunkName: "pages/index" */)

const _5e0c1004 = () => import('D:\\Projects\\FirstVueProject\\pages\\posts.vue' /* webpackChunkName: "pages/posts" */)

const _8c801e5a = () => import('D:\\Projects\\FirstVueProject\\pages\\comments.vue' /* webpackChunkName: "pages/comments" */)



const scrollBehavior = (to, from, savedPosition) => {
  // savedPosition is only available for popstate navigations.
  if (savedPosition) {
    return savedPosition
  } else {
    let position = {}
    // if no children detected
    if (to.matched.length < 2) {
      // scroll to the top of the page
      position = { x: 0, y: 0 }
    }
    else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
      // if one of the children has scrollToTop option set to true
      position = { x: 0, y: 0 }
    }
    // if link has anchor,  scroll to anchor by returning the selector
    if (to.hash) {
      position = { selector: to.hash }
    }
    return position
  }
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
  		{
			path: "/",
			component: _9507b4fa,
			name: "index"
		},
		{
			path: "/posts",
			component: _5e0c1004,
			name: "posts"
		},
		{
			path: "/comments",
			component: _8c801e5a,
			name: "comments"
		}
    ]
  })
}
