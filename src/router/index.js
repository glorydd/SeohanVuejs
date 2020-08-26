import Vue from 'vue'
import Router from 'vue-router'
// import store from '@/vuex/store'
import authHeader from '@/services/auth/auth-header'
 
import Menu from '@/components/menu.vue'
import Home from '@/components/home.vue'
import Login from '@/components/auth/Login.vue'
import Profile from '@/components/auth/Profile.vue'

import general from '@/components/general/general'

import itDamage from '@/components/general/itDamage/itDamage'
import itDamageList from '@/components/general/itDamage/list'
import itDamageNew from '@/components/general/itDamage/new'

import report from '@/components/general/report/report'
import reportList from '@/components/general/report/list'
// import reportNew from '@/components/general/report/new'

import sales from '@/components/sales/sales'
import asQuality from '@/components/sales/asQuality/asQuality'
import asQualityList from '@/components/sales/asQuality/list'
import asQualityNew from '@/components/sales/asQuality/new'

import mat from '@/components/mat/mat'
import importPlan from '@/components/mat/importPlan/importPlan'
import importPlanList from '@/components/mat/importPlan/list'

import foodTable from '@/components/general/foodTable'
import qrReader from '@/components/general/qrReader'

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
    children:[{ 
      path: '/menu', component:Menu,
      children:[{
        path: '/', component: Home,beforeEnter: requireAuth(), 
        path: '/Profile', component: Profile , beforeEnter: requireAuth(),
        path: '/general', component: general,
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
          { path: 'qrReader', component: qrReader },
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
          { path: 'qrReader', component: qrReader },
        ],
        beforeEnter: requireAuth(),
      }], 
    }],
    path: '/login', component: Login
  }]
    // { path: '*', component: NotFound,beforeEnter: requireAuth(), },
});

export default router;
