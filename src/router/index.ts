import {
  createRouter, createWebHistory, RouteRecordRaw,
} from 'vue-router';

// const routeRecord: string[] = [];
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "Home" */ '../views/Home/index.vue'),
  },
  {
    path: '/demo',
    name: 'Demo',
    component: () => import(/* webpackChunkName: "Demo" */ '../views/Demo/index.vue'),
  },
  {
    path: '/demo1',
    name: 'Demo1',
    component: () => import(/* webpackChunkName: "Demo" */ '../views/Demo/index.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior() {
    // 切换路由，始终滚动到顶部
    return { top: 0 };
  },
  routes,
});
// router.afterEach((to, from) => {
//   // console.log(to, from);
//   // 首页路由
//   if (from.fullPath === '/' && !from.name) {
//     routeRecord.push(to.fullPath);
//     return;
//   }
//   if (to.fullPath === from.fullPath) return;
//
//   // 是否新页面
//   let isNew = true;
//   // 路由记录1个以上，且倒数第二个的值是目标值，则表示是回退页面
//   if (routeRecord.length > 1 && routeRecord[routeRecord.length - 2] === to.fullPath) {
//     routeRecord.splice(-1, 1);
//     isNew = false;
//   } else {
//     routeRecord.push(to.fullPath);
//   }
//   // eslint-disable-next-line no-param-reassign
//   to.meta.transitionName = isNew ? 'page-go' : 'page-back';
// });
export default router;
