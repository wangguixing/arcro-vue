export default {
  code: 1,
  data: [
    {
      path: '/dashboard',
      name: 'dashboard',
      meta: {
        title: '仪表盘',
        requiresAuth: true,
        icon: 'icon-dashboard',
        order: 1,
      },
      children: [
        {
          path: 'workplace',
          name: 'Workplace',
          meta: {
            title: '工作台',
            requiresAuth: true,
          },
        },
      ],
    },
  ],
  msg: '操作成功',
  success: true,
};
