export default {
  code: 1,
  data: [
    {
      path: '/dashboard',
      name: 'dashboard',
      meta: {
        locale: 'menu.server.dashboard',
        requiresAuth: true,
        icon: 'icon-dashboard',
        order: 1,
      },
      children: [
        {
          path: 'workplace',
          name: 'Workplace',
          meta: {
            locale: 'menu.server.workplace',
            requiresAuth: true,
          },
        },
        {
          path: 'https://arco.design',
          name: 'arcoWebsite',
          meta: {
            locale: 'menu.arcoWebsite',
            requiresAuth: true,
          },
        },
      ],
    },
  ],
  msg: '操作成功',
  success: true,
};
