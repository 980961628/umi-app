
const AdminRouter={
  path: '/admin',
  component: '../layouts/admin/index',
  routes: [
    {path: '/admin',component: '../pages/admin/home'},
    {path: '/admin/login',component: '../pages/admin/login/index'},
    {path: '*',component: '404'},
  ]
}

// 这个要放最后
const PCRouter={
  path: '/',
  component: '../layouts/pc/index/index',
  routes: [
    {path: '/',component: '../pages/pc/home'},
    {path: '/test',component: '../pages/pc/test'},
    {path: '/login',component: '../pages/pc/login/index'},
    {path: '*',component: '404'},
  ]
}


export default [
  AdminRouter,
  PCRouter,
  // { path: '*', component: '404' },
]