
export default [
  {
    path: '/',
    component: () => import('layouts/default'),
    children: [
      { path: '/', component: () => import('pages/index') },
      { path: 'weizhi', component: () => import('pages/weizhi') },
      { path: 'lvxingjia', component: () => import('pages/lvxingjia') }
    ]
  },

  { // Always leave this as last one
    path: '*',
    component: () => import('pages/404')
  }
]
