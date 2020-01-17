export default [
  {
    path: '/',
    component: '../layouts/index',
    exact: true,
    routes: [
      { path: '/', component: '../pages/index'},
    ]
  },
  {
    path: '/login',
    component: './login/index'
  },
  {
    path: '*',
    component: '404'
  }
]