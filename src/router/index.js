import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'
import authHeader from '@/services/auth-header'

import Menu from '@/components/menu.vue'
import Home from '@/components/home.vue'

import Login from '@/components/auth/Login.vue'
import Profile from '@/components/auth/Profile.vue'

import general from '@/components/erp/general/general'

import itDamage from '@/components/erp/it/itDamage/itDamage'
import itDamageList from '@/components/erp/it/itDamage/list'
import itDamageNew from '@/components/erp/it/itDamage/new'

import mat from '@/components/erp/mat/mat'
import importPlan from '@/components/erp/mat/importPlan/importPlan'
import importPlanList from '@/components/erp/mat/importPlan/list'

import report from '@/components/erp/qc/report/report'
import reportList from '@/components/erp/qc/report/list'
// import reportNew from '@/components/general/report/new'

import sales from '@/components/erp/sales/sales'
import asQuality from '@/components/erp/sales/asQuality/asQuality'
import asQualityList from '@/components/erp/sales/asQuality/list'
import asQualityNew from '@/components/erp/sales/asQuality/new'


import foodTable from '@/components/erp/general/foodTable'
// import qrReader from '@/components/general/qrReader'

import lab from "@/components/erp/lab/lab";
import proto from "@/components/erp/lab/prototype/prototype";
import locaAlm from "@/components/erp/mat/location/locaAlm";

const NotFound = { template: '<div>Not Found</div>' }

Vue.use(Router)


const requireAuth = () => (to, from, next) => {
  !!store.state.access_token ? next() : next(`/login?returnPath=${encodeURIComponent(from.path)}`)
}


const requireManager = (to, from, next) => {

  // 액세스토큰이 있으면
  if (!!store.state.access_token) {
    // 권한이 ADMIN 이면
    if (!!store.state.account.roles && !!(store.state.account.roles.includes('ADMIN') ))
      return next()
    else {
      alert('권한이 없습니다.')
      return next('/')
    }
  } else
    return next(`/login?returnPath=${encodeURIComponent(from.path)}`)
}

const router = new Router({
  mode: 'history', // Use browser history
  routes: [
    {path: '/login', component: Login},
    {path: '/',
    component:Menu,beforeEnter: requireAuth(),
    children:[
      {path: '/', component: Home, beforeEnter: requireAuth()},
      {path: '/Profile', component: Profile , beforeEnter: requireAuth()},
      {path: '/general', component: general,
        children: [
          {
            path: 'itDamage', component: itDamage,
            children: [
              { path: 'list', component: itDamageList },
              { path: 'new', component: itDamageNew },
            ]
          },
          {
            path: 'report', component: report,
            children: [
              { path: 'list', component: reportList },
              // {path: 'new', component: reportNew,beforeEnter: requireAuth},
            ]
          },
          { path: 'foodTable', component: foodTable },
          // { path: 'qrReader', component: qrReader },
        ],
        beforeEnter: requireAuth(),
      },
      {
        path: '/sales', component: sales,
        children: [
          {
            path: 'asQuality', component: asQuality,
            children: [
              { path: 'list', component: asQualityList },
              { path: 'new', component: asQualityNew },
            ]
          },
        ],
        // beforeEnter: requireAuth(),
      },
      // {
      //   path: '/mat', component: mat,
      //   children: [
      //     {
      //       path: 'importPlan', component: importPlan,
      //       children: [
      //         { path: 'list', component: importPlanList },
      //       ]
      //     },
      //   ],
      //   beforeEnter: requireAuth(),
      // },
      {
        path: '/qc', component: general,
        children: [
          {
            path: 'gspc', component: itDamage,
            children: [
              { path: 'list', component: itDamageList },
              { path: 'new', component: itDamageNew },
            ]
          },
          {
            path: 'report', component: report,
            children: [
              { path: 'list', component: reportList },
              // {path: 'new', component: reportNew,beforeEnter: requireAuth},
            ]
          },
          { path: 'foodTable', component: foodTable },
          // { path: 'qrReader', component: qrReader },
        ],
        beforeEnter: requireAuth(),
      },
      // {
      //   path: '/lab', component: mat,
      //   children: [
      //     {
      //       path: 'proto', component: proto,
      //       children: [
      //         { path: 'list', component: locaAlm },
      //       ]
      //     },
      //   ],
      //   beforeEnter: requireAuth(),
      // }
      ],
  }, {
    path: '/lab', component: lab,
    children: [
      {
        path: 'proto', component: proto,
        children: [
          { path: 'locaalmlist', component: locaAlm },
        ]
      },
    ]
  }]
})

export default router;
