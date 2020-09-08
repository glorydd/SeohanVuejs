import Vue from 'vue'
import Router from 'vue-router'
// import store from '@/vuex/store'
import authHeader from '@/services/auth/auth-header'

import Menu from '@/components/menu.vue'
import Home from '@/components/home.vue'

import Login from '@/components/auth/Login.vue'
import Profile from '@/components/auth/Profile.vue'

import base from '@/components/erp/base/base'
import item from '@/components/erp/base/item'
// import bom from '@/components/erp/base/bom'

import general from '@/components/erp/general/general'

import itDamage from '@/components/erp/it/itDamage/itDamage'
import itDamageList from '@/components/erp/it/itDamage/list'
import itDamageNew from '@/components/erp/it/itDamage/new'

import mat from '@/components/erp/mat/mat'
import importPlan from '@/components/erp/mat/importPlan/importPlan'
import importPlanList from '@/components/erp/mat/importPlan/list'
import wms from '@/components/erp/mat/warehouse/wms'
import warehouse from "@/components/erp/mat/warehouse/warehouse";
import locaAlm from "@/components/erp/mat/warehouse/locaAlm";

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
import protowms from "@/components/erp/lab/prototype/protowms";

const NotFound = { template: '<div>Not Found</div>' }

Vue.use(Router)

const requireAuth = () => (from, to, next) => {
  // var permissionCheck = false;
  // var permissions = localStorage.getItem('permissions');
  // permissions.forEach(element => {
  //   if (element = from) permissionCheck = true;
  // });

  // if (authHeader() && permissionCheck ) {
  if (authHeader()  ) {
    return next()
  }else{
    next('/login')
  }
}

const router = new Router({
  mode: 'history', // Use browser history
  routes: [{
    path: '/',
    component:Menu,beforeEnter: requireAuth(),
    children:[
      {path: '/', component: Home, beforeEnter: requireAuth()},
      {path: '/login', component: Login},
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
      {
        path: '/mat', component: mat,
        children: [
          {
            path: 'importPlan', component: importPlan,
            children: [
              { path: 'list', component: importPlanList },
            ]
          },
          {
            path: 'wms', component: wms,
            children: [
              { path: 'locaalm', component: locaAlm,  props: true},
              { path: 'warehouse', component: warehouse,  props: true }
            ]
          }
        ],
        beforeEnter: requireAuth(),
      },
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
      //   {
      //     path: '/lab', component: lab,
      //     children: [
      //       {
      //         path: 'protowms', component: protowms,
      //         children: [
      //           { path: 'locaalm', component: locaAlm,  props: true},
      //           { path: 'warehouse', component: warehouse,  props: true },
      //         ]
      //       },
      //     ]
      //   },
      ],
  },
  {
    path: '/lab', component: lab,
    children: [
      {
        path: 'proto', component: protowms,
        children: [
          { path: 'locaalm', component: locaAlm,  props: true},
          { path: 'warehouse', component: warehouse,  props: true },
        ]
      },
    ]
  },
  {
    path: '/base', component: base,
    children: [
      {path: 'item', component: item,  props: true, },
      // {path: 'bom', component: bom },
    ],
    // beforeEnter: requireAuth(),
  },]
})

export default router;
