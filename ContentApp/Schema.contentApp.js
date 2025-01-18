export const AppLauncher = {
  AppLauncher: {
      type: 'object',
      properties: {
        _id: { type: 'string' },
        name: { type: 'string' },
        icon: { type: 'string' },
        url: { type: 'string' },
        typeApp: { type: 'string' },
        appId: { type: 'string' },
        order: { type: 'string' },
        isActive: { type: 'boolean' },
        createdAt: { type: 'string', format: 'date-time' },
        updatedAt: { type: 'string', format: 'date-time' },
      },
  },
};

export const AppLauncher2 = {
  AppLauncher2: {
    type: 'object',
    properties: {
      _id: { type: 'string' },
      name: { type: 'string' },
      icon: { type: 'string' },
      url: { type: 'string' },
      typeApp: { type: 'string' },
      isActive: { type: 'boolean' },
      isDeleted: { type: 'boolean' },
      deleteAt: { type: 'null' },
      createdAt: { type: 'string', format: 'date-time' },
      updatedAt: { type: 'string', format: 'date-time' },
    },
  },
};
